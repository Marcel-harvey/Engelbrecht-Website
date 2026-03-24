import { Component, inject, OnInit, signal } from '@angular/core';
import { ServiceService } from '../../../../shared/services/services.service';
import { ServiceInterface } from '../../../../shared/models/service.model';
import { CurrencyPipe } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-services-preview',
  imports: [CurrencyPipe],
  templateUrl: './services-preview.component.html',
  styleUrls: ['./services-preview.component.css']
})
export class ServicesPreviewComponent implements OnInit {
  // Service injection
  private readonly _serviceType = inject(ServiceService)

  // UI State
  readonly services = signal<ServiceInterface[]>([]);

  /**
   * Get the serviceTypes from backend
   * Set response to services signal
   */
  async ngOnInit(): Promise<void> {
    try {
        const res = await firstValueFrom(
        this._serviceType.getAllServiceTypes()
      )

      if (!res.succeeded) {
        console.error(res.errors);
        return;
      }
      this.services.set(res.data);
    }
    catch (err) {
      console.error(err);
    }
  }
}