import { BASEAPI_URL_PRO } from "../utils/BaseSettings";

export const getBarbers = async (): Promise<Barbers[] | null> => {
  try {
    const response = await fetch(`${BASEAPI_URL_PRO}/v1/barbers`);
    const { message, result } = await response.json();
    if (response.ok) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};
