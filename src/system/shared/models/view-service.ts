import { Appointment } from './appointment';

export interface Service {
  serviceID: number;
  name: string;
  durationMinutes: number;
  price: number;
  appointments?: Appointment[];
}
