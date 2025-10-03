document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    // Collect form data
    const name = document.getElementById("patientName").value || "Anonymous";
    const email = document.getElementById("patientEmail").value;
    const phone = document.getElementById("patientPhone").value;
    const department = document.getElementById("department").value;
    const doctor = document.getElementById("doctor").value || "Not specified";
    const date = document.getElementById("appointmentDate").value;
    const time = document.getElementById("appointmentTime").value || "Anytime";
    const reason = document.getElementById("reason").value || "Not provided";

    // Rating
    const rating = document.querySelector("input[name='rating']:checked")?.value || "No rating";

    // Aspects
    const aspects = [...document.querySelectorAll("input[name='aspects']:checked")]
      .map(cb => cb.value)
      .join(", ") || "None selected";

    const feedback = document.getElementById("feedbackComments").value || "No additional comments";

    // Show confirmation message
   alert(
  `✅ Thank you, ${name}!

📅 Appointment Details:
- Department: ${department}
- Doctor: ${doctor}
- Date: ${date} at ${time}
- Reason: ${reason}

⭐ Feedback:
- Rating: ${rating} stars
- Liked: ${aspects}
- Comments: ${feedback}

📧 Confirmation will be sent to: ${email}`
);


    form.reset(); // clear the form after submission
  });
});