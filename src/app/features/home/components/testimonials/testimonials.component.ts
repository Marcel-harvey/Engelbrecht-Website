import { Component, signal } from '@angular/core';

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
  // UI State
  readonly currentIndex = signal<number>(0);

  testimonials: Testimonial[] = [
    { 
      name: 'Sarah M', 
      message: 'Absolutely amazing experience. I felt completely relaxed.'
    },
    { 
      name: 'David K', 
      message: 'Professional service and a peaceful environment.' 
    },
    { 
      name: 'Emma L', 
      message: 'Best wellness therapy I have experienced.'
    },
    {
      name: 'Johan vd W',
      message: 'Rather enjoyable and very friendly.'
    },
    {
      name: 'Jaendre J',
      message: ' Would 100% reccomend to anyone.'
    },
    {
      name: 'Chantelle S',
      message: 'Had stiff muscles going in and left with a loose body.'
    },
    {
      name: 'Paul S',
      message: 'Most friendly staff I have ever dealt with'
    }
  ];

  prev(): void {
    this.currentIndex.set(
      (this.currentIndex() - 1) % this.testimonials.length
    );
  }

  next(): void {
    this.currentIndex.set(
      (this.currentIndex() + 1) % this.testimonials.length
    );
  }

  getOffset(i: number): number {
    const len = this.testimonials.length;

    let offset = i - this.currentIndex();

    if (offset > len / 2) offset -= len;
    if (offset < -len / 2) offset += len;

    return offset;
  }
}