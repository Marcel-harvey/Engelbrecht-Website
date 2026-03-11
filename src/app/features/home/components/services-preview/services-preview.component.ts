import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-preview',
  standalone: true,
  templateUrl: './services-preview.component.html',
  styleUrls: ['./services-preview.component.css']
})
export class ServicesPreviewComponent {
  services: Service[] = [
    { title: 'Full Body Massage', description: 'Relax and restore your body with our professional massage therapy.' },
    { title: 'Facial Treatment', description: 'Rejuvenate your skin with our luxury facial treatments.' },
    { title: 'Wellness Therapy', description: 'Holistic treatments designed to bring balance and harmony.' }
  ];
}