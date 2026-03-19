import { Component, inject, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceInterface } from '../../shared/models/service.model';
import { ServiceService } from '../../shared/services/services.service';
import { finalize, firstValueFrom } from 'rxjs';
import { BookingService } from './services/booking.service';
import { CreateBookingInterface } from './models/booking.model';
import { CustomerDetailsInterface } from '../../shared/models/customer.model';

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
  private readonly _service = inject(ServiceService);
  private readonly _booking = inject(BookingService);

  // UI State
  readonly submitted = signal<boolean>(false);
  readonly errorMessage = signal<string>('');
  readonly isLoading = signal<boolean>(false);

  readonly services = signal<ServiceInterface[] | null>(null);

  readonly bookingForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      address: ['', ],
      service: ['', Validators.required],
      onMedication: [false],
      medication: this.fb.array<MedicationForm>([]),
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: ['']
    });

  ngOnInit(): void {
    this.services.set(this._service.getAllServices());
    // this.addMedication() only use if backend wants an empty array instead of null
    this.formControl.onMedication.valueChanges.subscribe(value => {
      if (value) {
        if (this.medicationArray.length === 0) {
          this.addMedication();
        }
      } else {
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

  async onSubmit(): Promise<void> {
    this.submitted.set(true);

    if (this.bookingForm.invalid) {
      return;
    }

    const bookingData = this.bookingForm.value;
    console.log('Booking Data:', bookingData);

    // Placeholder for backend integration
    this.successMessage = 'Your booking request has been sent successfully!';
    this.bookingForm.reset();
    this.submitted.set(false);
  }
}