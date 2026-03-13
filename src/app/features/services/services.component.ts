import { Component, inject } from '@angular/core';
import { ServiceService } from '../../shared/services/services.service';
import { ServiceInterface } from '../../shared/models/service.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-services.component',
  imports: [CurrencyPipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {

  private serviceService = inject(ServiceService);

  services: ServiceInterface[] = [];
  featured: ServiceInterface[] = [];

  ngOnInit() {
    this.services = this.serviceService.getAllServices();
    this.featured = this.services.filter(s => s.popular);
  }
}
