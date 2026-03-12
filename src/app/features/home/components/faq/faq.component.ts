import { Component, signal } from '@angular/core';
import { FaqInterface } from '../../models/faq.model';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  openIndex = signal<number | null>(null);

  faqs: FaqInterface[] = [
    {
      question: 'Do I need to book in advance?',
      answer: 'Yes, we recommend booking in advance to secure your preferred time.'
    },
    {
      question: 'How long are treatments?',
      answer: 'Most treatments range from 45 to 90 minutes depending on the service.'
    },
    {
      question: 'What should I wear?',
      answer: 'Comfortable clothing is recommended. Towels and robes are provided where needed.'
    },
    {
      question: 'Can I cancel my appointment?',
      answer: 'Yes, cancellations can be made up to 24 hours before your appointment.'
    }
  ];

  toggle(index: number) {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}