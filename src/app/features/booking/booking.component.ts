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

    bookingForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: ['']
    });

  ngOnInit(): void {
    this.services.set(this._service.getAllServices());
  }

  get formControl() {
    return this.bookingForm.controls;
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