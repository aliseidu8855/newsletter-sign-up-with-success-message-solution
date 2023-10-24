if (window.matchMedia("(min-width: 576px)").matches) {
  document.getElementById("imageElement").src = "./assets/images/illustration-sign-up-desktop.svg";
}

/* Nodes */
const successModal = document.querySelector(".success-modal");
const main = document.querySelector(".main");
const emailInput = document.getElementById("email-input");
const dismiss = document.querySelector(".dismiss");
const subscriptionForm = document.getElementById("subscription-form");
const subscribeEmail = document.querySelector(".subscribe-email");
const error = document.querySelector(".error");

/* Valid Emal */
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}


/* Show Modal */
function showSuccessModal() {
  successModal.classList.remove("hidden");
  main.classList.add("hidden");
}


/* hide Modal */
function hideSuccessModal() {
  successModal.classList.add("hidden");
  main.classList.remove("hidden");
}
/* Form Submition handler */
function handleSubmit(event) {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    showSuccessModal();
    subscribeEmail.textContent = emailInput.value;
    error.classList.add("error-msg");
  } else {
    hideSuccessModal();
    error.classList.remove("error-msg");
  }
}

/* Event listeners */
subscriptionForm.addEventListener("submit", handleSubmit);
dismiss.addEventListener("click", (event) => {
  hideSuccessModal();
  emailInput.value = "";
});
