import { Appointment } from "./appointment";

export interface Client {
  clientID: number;
  appointments?: Appointment[];
}