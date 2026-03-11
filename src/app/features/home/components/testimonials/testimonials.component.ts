import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  message: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    { name: 'Sarah M', message: 'Absolutely amazing experience. I felt completely relaxed.' },
    { name: 'David K', message: 'Professional service and a peaceful environment.' },
    { name: 'Emma L', message: 'Best wellness therapy I have experienced.' }
  ];
}