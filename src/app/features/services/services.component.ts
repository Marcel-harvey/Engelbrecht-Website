import { Component, inject, signal } from '@angular/core';
import { ServiceService } from '../../shared/services/services.service';
import { ServiceInterface } from '../../shared/models/service.model';
import { CurrencyPipe } from '@angular/common';
import { CallToActionComponent } from "../../shared/components/call-to-action.component/call-to-action.component";
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-services.component',
  imports: [CurrencyPipe, CallToActionComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  // Dependancy Injections
  private readonly _serviceType = inject(ServiceService);

  // UI State
  readonly serviceTypes = signal<ServiceInterface[]>([]);
  readonly featured = signal<ServiceInterface[]>([]);

  // Temp setup for popular
  private readonly feature1 = "Full Body Massage";
  private readonly feature2 = "Hot Stone Therapy"

  async ngOnInit(): Promise<void> {
    try {
      const res = await firstValueFrom(
        this._serviceType.getAllServiceTypes()
      );

      if (!res.succeeded){
        console.error(res.errors);
        return;
      }
      this.serviceTypes.set(res.data);
    }
    catch(err) {
      console.error(err);
    }

    // Temp solution
    // TODO: Backend needs a popular value that is calculated by amount of bookings made
    // TODO: Later will need to remove feature and create check in html for popular == true
    this.serviceTypes().forEach(service => {
      if (service.name == this.feature1 || service.name == this.feature2) {
        this.featured().push(service);
      }
    })
  }
}
