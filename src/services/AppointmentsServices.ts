import { BASEAPI_URL } from "../utils/BaseSettings";
import { type Appointments } from "../types/services/Appointments";
export const getAppointments = async () => {
  try {
    const response = await fetch(`${BASEAPI_URL}/v1/appointments`);
    const { message, result } = await response.json();
    if (response.ok) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAppointmentsByClient = async (
  clientEmail: string,
): Promise<Appointments[] | null> => {
  try {
    const response = await fetch(
      `${BASEAPI_URL}/v1/appointments/${clientEmail}`,
    );
    const { message, result } = await response.json();
    if (response.ok) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const createAppointment = async (appointment: Appointments) => {
  try {
    const response = await fetch(`${BASEAPI_URL}/v1/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    });
    const { message, result } = await response.json();
    if (response.ok) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};
