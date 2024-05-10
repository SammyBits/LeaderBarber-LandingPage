import { BASEAPI_URL } from "../../utils/BaseSettings";

export const registerClientGoogle = async (user: ClientGoogle) => {
  try {
    const response = await fetch(`${BASEAPI_URL}/api/v1/clientgoogle`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};