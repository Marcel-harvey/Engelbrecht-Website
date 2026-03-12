import { Component, inject, OnInit, signal } from '@angular/core';
import { servicesService } from '../../../../shared/services/services.service';
import { ServiceInterface } from '../../../../shared/models/service.model';
import { CurrencyPipe } from '@angular/common';

interface Service {
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-preview',
  imports: [CurrencyPipe],
  templateUrl: './services-preview.component.html',
  styleUrls: ['./services-preview.component.css']
})
export class ServicesPreviewComponent implements OnInit {
  // Service injection
  private readonly _service = inject(servicesService)

  readonly services = signal<ServiceInterface[] | null>(null);

  /**
   * Set the service signal to the services shared Service
   */
  ngOnInit(): void {
    this.services.set(this._service.getAllServices());
  }
}