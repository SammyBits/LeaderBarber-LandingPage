export const sendEmailHtml = async (
  emailTo: string,
  subject: string,
  message: string,
) => {
  try {
    const response = await fetch(
      `https://emailapi-cbg3.onrender.com/api/v1/emails/send-email-html-barber`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailTo, subject, message }),
      },
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
