import { BASEAPI_URL } from "../utils/BaseSettings";

export const getBarbers = async () => {
  try {
    const response = await fetch(`${BASEAPI_URL}/v1/barbers`);
    const { message, result } = await response.json();
    console.log("message", message);
    console.log("result", result);
    if (response.ok) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};
