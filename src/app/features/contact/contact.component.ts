import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Dependancies
  private readonly fb = inject(FormBuilder)

  readonly submitted = signal<boolean>(false);

  contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
  });

  submitForm() {
    this.submitted.set(true);

    if (this.contactForm.invalid) {
      return;
    }

    console.log(this.contactForm.value);

    // Backend email logic will be wired later
    alert("Thank you! Your message has been sent.");

    this.contactForm.reset();
    this.submitted.set(false);
  }
}