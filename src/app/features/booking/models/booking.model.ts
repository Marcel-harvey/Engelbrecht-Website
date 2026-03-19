import { BookingDateInterface } from "../../../shared/models/booking.model";
import { CustomerDetailsInterface } from "../../../shared/models/customer.model";
import { ServiceTypeInterface } from "../../../shared/models/service.model";

export interface CreateBookingInterface {
    customer: CustomerDetailsInterface;
    serviceType: ServiceTypeInterface;
    date: BookingDateInterface;
    medication: string[];
    reason: string;
}
