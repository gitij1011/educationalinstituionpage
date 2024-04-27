
document.getElementById("myForm").addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Validate name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    return;
  }

  // Validate email
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    return;
  }

  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    return;
  }

  // If all validations pass, you can proceed with form submission
  // For demonstration, alert success
  alert("Form submitted successfully!");
});
