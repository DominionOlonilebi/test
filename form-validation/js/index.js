// index.js

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Name validation
  if (name === "") {
    Toastify({
      text: "Please enter your name.",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #b8b8b8, #8a8989, #b8b8b8)",
      },
    }).showToast();
    return false;
  }

  // Email validation
  if (email === "") {
    Toastify({
      text: "Please enter your email address.",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #b8b8b8, #8a8989, #b8b8b8)",
      },
    }).showToast();
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Toastify({
      text: "Please enter a valid email address.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "black",
        color: "white",
      },
    }).showToast();
    return false;
  }

  // Password validation
  if (password === "") {
    Toastify({
      text: "Please enter your password.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "red",
        color: "white",
      },
    }).showToast();
    return false;
  }

  // Confirm password validation
  if (confirmPassword === "") {
    Toastify({
      text: "Please confirm your password.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "red",
        color: "white",
      },
    }).showToast();
    return false;
  }

  if (password !== confirmPassword) {
    Swal.fire({
      title: "Error!",
      text: "Passwords do not match.",
      icon: "error",
      confirmButtonText: "Close",
    });
    return false;
  }

  // If all validations pass, return true to submit the form
  return true;
}

// Assuming you have a form with the ID "myForm"
document.getElementById("myForm").addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault(); // Prevent form submission if validation fails
  } else {
    // Form submitted successfully
    Swal.fire({
      title: "Success!",
      text: "Form submitted successfully!",
      icon: "success",
      confirmButtonText: "Close",
    });
  }
});
