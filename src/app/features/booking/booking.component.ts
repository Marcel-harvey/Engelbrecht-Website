import { Component, inject, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceInterface } from '../../shared/models/service.model';
import { ServiceService } from '../../shared/services/services.service';
import { finalize, firstValueFrom } from 'rxjs';
import { BookingService } from './services/booking.service';
import { CreateBookingInterface } from './models/booking.model';
import { CustomerDetailsInterface } from '../../shared/models/customer.model';
import { MessageService } from '../../shared/services/modal/message.service';
import { BookingDateInterface } from '../../shared/models/booking.model';

type MedicationForm = FormGroup<{
  name: FormControl<string>;
}>;

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  // Depandancies
  private readonly fb = inject(FormBuilder);
  private readonly _serviceType = inject(ServiceService);
  private readonly _booking = inject(BookingService);
  private readonly _modal = inject(MessageService);

  // UI State
  readonly submitted = signal<boolean>(false);
  readonly isLoading = signal<boolean>(false);

  readonly services = signal<ServiceInterface[] | null>(null);

  readonly bookingForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/0[6-8][0-9]{8}$/)]],
      address: ['', ],
      service: ['', Validators.required],
      onMedication: [false],
      medication: this.fb.array<MedicationForm>([]),
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: ['']
    });

  async ngOnInit(): Promise<void> {
    try {
      this.isLoading.set(true);
      const res = await firstValueFrom(
        this._serviceType.getAllServiceTypes()
          .pipe(finalize(() => this.isLoading.set(false)))
      )
      if (!res.succeeded) {
        console.error(res.errors);
          this._modal.open({
          title: 'Error',
          message: 'Unexpected error loading booking, please refresh the page',
          type: 'error'
        });
        return;
      }

      this.services.set(res.data);
    }
    catch (err) {
      console.error(err);
    }

    // this.addMedication() only use if backend wants an empty array instead of null
    this.formControl.onMedication.valueChanges.subscribe(value => {
      if (value) {
        if (this.medicationArray.length === 0) {
          this.addMedication();
        }
      } 
      else {
        this.medicationArray.clear(); // removes all meds when unchecked
      }
    });
  }

  get formControl() {
    return this.bookingForm.controls;
  }
  
  get medicationArray(): FormArray<MedicationForm> {
    return this.bookingForm.controls.medication as FormArray<MedicationForm>;
  }

  addMedication() {
    this.medicationArray.push(
      this.fb.group({
        name: this.fb.nonNullable.control('', Validators.required)
      })
    )
  }

  removeMedication(index: number) {
    if (this.medicationArray.length > 1)
      this.medicationArray.removeAt(index);
  }

  /**
   * Sets the on mediaction to true when checkbox is clicked
   */
  setMedication() {
    this.formControl.onMedication.patchValue(true);
  }

  /**
   * Sends the booking request to the backend/server API
   * @recieves BlankApiResponse
   * @returns void
   */
  async onSubmit(): Promise<void> {
    this.submitted.set(true);
    this.isLoading.set(true);

    if (this.bookingForm.invalid) return;

    // Create the customer interface for the payload
    const customer: CustomerDetailsInterface =  {
      name: this.formControl.name.value,
      surname: this.formControl.surname.value,
      email: this.formControl.email.value,
      phoneNumber: this.formControl.phone.value,
      address: this.formControl.address.value || ''
    }

    const bookingDate: BookingDateInterface = {
      date: this.formControl.date.value,
      startTime: this.formControl.time.value + ':00'
    }

    const payload: CreateBookingInterface = {
      customer: customer,
      serviceId: Number(this.formControl.service.value),
      bookingDate: bookingDate,
      medication: this.medicationArray.value
        .map(m => m.name)
        .filter((name): name is string => !!name),
      reason: this.formControl.notes.value || ''
    };

    try {
      const res = await firstValueFrom(
        this._booking.createBooking(payload)
          .pipe(finalize(() => {
            this.isLoading.set(false),
            this.submitted.set(false)
          }
        ))
      );

      if (!res.succeeded) {
        // console.error(res.errors);
        this._modal.open({
          title: 'Error',
          message: res.message,
          type: 'error'
        });
        return;
      }

      this._modal.open({
        title: 'Success',
        message: 'Booking created successfully',
        type: 'success'
      });

      this.bookingForm.reset({
        onMedication: false
      });
    }
    catch (err) {
      console.error(err);
      this._modal.open({
        title: 'Error',
        message: 'Unexpected error occured during operation, please try again later',
        type: 'error'
      });
    }
  }
}