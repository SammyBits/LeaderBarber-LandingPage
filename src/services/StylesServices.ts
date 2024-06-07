import { BASEAPI_URL_PRO } from "../utils/BaseSettings";

export const getStyles = async () => {
  try {
    const response = await fetch(`${BASEAPI_URL_PRO}/v1/services`);
    const { message, result } = await response.json();
    if (response.ok) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};
