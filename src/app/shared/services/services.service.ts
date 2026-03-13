import { Injectable } from "@angular/core"
import { ServiceInterface } from "../models/service.model"
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class servicesService {

    getAllServices(): ServiceInterface[] {
        const services: ServiceInterface[] = [
            { 
                name: 'Full Body Massage', 
                description: 'Relax and restore your body with our professional massage therapy.',
                price: 500.00,
                duration: 60
            },
            { 
                name: 'Facial Treatment',
                description: 'Rejuvenate your skin with our luxury facial treatments.',
                price: 600,
                duration: 50
            },
            { 
                name: 'Wellness Therapy', 
                description: 'Holistic treatments designed to bring balance and harmony.',
                price: 600,
                duration: 90
            },
            {
                name: 'Travel To You',
                description: 'Wellness Therapy in the comfort of your own home',
                price: 800,
                duration: 60
            },
                        {
                name: 'Muscle Relaxer',
                description: 'Wellness Therapy in the comfort of your own home',
                price: 800,
                duration: 60
            }
        ]

        return services
    }
}