//  basic functionalities added to the signup page.
//  signup page connected to the login page.......

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector("form");

  signupForm.addEventListener("submit", function (event) {
    // Prevent page reload
    event.preventDefault();

    // Get input values
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirm").value.trim();
    const country = document.getElementById("country").value;

    // check for the fields if they are empty or filled....
    if (!fname || !lname || !email || !password || !confirm || !country) {
      alert("Please fill in all fields.");
      return;
    }

    // check if passwords match....
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    // save the signup info for login page use....
    localStorage.setItem("cyberbuilds_email", email);
    localStorage.setItem("cyberbuilds_password", password);

    alert("Sign Up successful! Please log in now.");
    window.location.href = "login.html"; // Redirect to login page
  });
});