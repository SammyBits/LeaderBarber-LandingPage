import { BASEAPI_URL } from "../../utils/BaseSettings";

export const registerClientGoogleIfNotExists = async (user: ClientGoogle) => {
  try {
    const existingClient = await isClientGoogle(user.email as string);
    if (!existingClient) {
      const response = await fetch(`${BASEAPI_URL}/v1/clientgoogle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const { result }: response = await response.json();
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};

export const isClientGoogle = async (email: string) => {
  try {
    const response = await fetch(`${BASEAPI_URL}/v1/clientgoogle/${email}`);
    const { message, result }: response = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
