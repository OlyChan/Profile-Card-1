function validateForm() {
  let valid = true;

  //clear errors and success message
  document.querySelectorAll(".error").forEach((err) => (err.textContent = ""));
  document
    .querySelectorAll("input, textarea")
    .forEach((el) => el.classList.remove("invalid"));
  document.querySelector("#successMsg").textContent = "";

  //fullname
  const fullname = document.querySelector("#fullname");
  const fullname_error = document.querySelector(".contact-name-error");
  if (fullname.value.trim() === "") {
    fullname_error.textContent = "Full name is required!";
    fullname.classList.add("invalid");
    valid = false;
  }

  //email
  const email = document.querySelector("#email");
  const email_error = document.querySelector(".contact-email-error");
  const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.value.trim() === "") {
    email_error.textContent = "Email is required!";
    email.classList.add("invalid");
    valid = false;
  } else if (!email_regex.test(email.value.trim())) {
    email_error.textContent = "Please enter a valid email address";
    email.classList.add("invalid");
    valid = false;
  }

  //subject
  const subject = document.querySelector("#subject");
  const subject_error = document.querySelector(".contact-subject-error");
  if (subject.value.trim() === "") {
    subject_error.textContent = "Subject is required!";
    subject.classList.add("invalid");
    valid = false;
  }

  //message
  const message = document.querySelector("#message");
  const message_error = document.querySelector(".contact-message-error");
  if (message.value.trim() === "") {
    message_error.textContent = "Message is required!";
    message.classList.add("invalid");
    valid = false;
  } 

  //success
  if (valid) {
    document.querySelector("#successMsg").textContent =
      "Form submitted successfully!";
  }

  if (valid) {
  const successMsg = document.querySelector("#successMsg");
  successMsg.textContent = "Form submitted successfully!";
  successMsg.style.color = "green";

 
  setTimeout(() => {
    document.querySelector("#contactForm").reset();
    location.reload();
  }, 2000);
}
  return valid;


}

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});
