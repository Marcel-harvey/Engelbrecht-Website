import { BookingDateInterface } from "../../../shared/models/booking.model";
import { CustomerDetailsInterface } from "../../../shared/models/customer.model";
import { ServiceTypeInterface } from "../../../shared/models/service.model";

export interface CreateBookingInterface {
    customer: CustomerDetailsInterface;
    serviceId: number;
    bookingDate: BookingDateInterface;
    medication: string[];
    reason: string;
}
