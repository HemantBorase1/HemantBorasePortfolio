/**
 * Submits contact form entries to a Google Apps Script Web App endpoint.
 *
 * @param {Object} formData
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email address
 * @param {string} formData.message - Inquiry or project details
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitContactForm({ name, email, message }) {
  const endpoint = process.env.NEXT_PUBLIC_SHEET_URL;

  if (!endpoint || endpoint.trim() === "") {
    // If endpoint is not configured yet, simulate a success for local preview/development
    console.warn(
      "[submitContactForm] NEXT_PUBLIC_SHEET_URL is not set in .env.local. Simulating successful form submission in development."
    );
    // Add small simulated delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      message: "Message received (Development preview: configure NEXT_PUBLIC_SHEET_URL for production).",
    };
  }

  try {
    const payload = new URLSearchParams({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    // Google Apps Script requires no-cors mode when called from browser clients
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload.toString(),
    });

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
    };
  } catch (error) {
    console.error("[submitContactForm] Submission failed:", error);
    return {
      success: false,
      message: "An unexpected error occurred while sending your message. Please try again or reach out directly via email.",
    };
  }
}
