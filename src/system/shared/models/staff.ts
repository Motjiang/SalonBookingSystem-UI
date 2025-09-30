import { Appointment } from './appointment';

export interface Staff {
  staffID: number;
  Designation: string;
  appointments?: Appointment[];
}
