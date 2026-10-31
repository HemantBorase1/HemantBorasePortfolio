/**
 * Submits contact form entries to Web3Forms API.
 *
 * @param {Object} formData
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email address
 * @param {string} formData.message - Inquiry or project details
 * @param {boolean} [formData.botcheck] - Honeypot field for bot detection
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitContactForm({ name, email, message, botcheck = false }) {
  // Honeypot check: if filled/checked by a bot, pretend success silently without sending
  if (botcheck) {
    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  if (!accessKey || accessKey.trim() === "") {
    console.warn(
      "[submitContactForm] NEXT_PUBLIC_WEB3FORMS_KEY is missing or empty in .env.local. Please provide a valid Web3Forms access key."
    );
    return {
      success: false,
      message: "Contact service is currently unconfigured. Please email me directly.",
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey.trim(),
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        subject: "New portfolio message from " + name.trim(),
        from_name: "Portfolio Contact Form",
        botcheck: false,
      }),
    });

    const data = await response.json();

    return {
      success: Boolean(data.success),
      message:
        data.message ||
        (data.success
          ? "Thank you! Your message has been sent successfully. I will get back to you soon."
          : "Submission failed. Please try again or email me directly."),
    };
  } catch (error) {
    console.error("[submitContactForm] Network or transmission error:", error);
    return {
      success: false,
      message: "Network error occurred while sending your message. Please try again or email me directly.",
    };
  }
}
