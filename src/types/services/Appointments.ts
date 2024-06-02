export type Appointments = {
  uuid?: string;
  dateTime: Date;
  service: string;
  clientEmail: string;
  barberUUID: string;
  status: Status;
  notes?: string;
  price: string;
  history?: IHistory;
  createdAt?: Date;
};

export type AppointmentsByClient = {
  uuid: string;
  dateTime: String;
  barberName: string;
  price: string;
  serviceName: string;
};

export enum Status {
  CONFIRMED = "confirmed",
  CANCELLED = "cancelled",
  COMPLETED = "completed",
  IDLE = "idle",
}

interface IHistory {
  date: Date;
  event: string;
}

