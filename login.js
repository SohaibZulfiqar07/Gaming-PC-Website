//  basic functionalities added to the login page.
//  login paged connected to the home page.......

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (event) {
    // Prevent page reload
    event.preventDefault();

    // Get input values
    const email = document.getElementById("account").value.trim();
    const password = document.getElementById("password").value.trim();

    //check for the fields if they are empty or filled....
    if (email === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }
    // check for the login info already saved, if user put this, the user will be brought to the home page..
     const savedEmail = localStorage.getItem("cyberbuilds_email");
    const savedPassword = localStorage.getItem("cyberbuilds_password");

    if (email === savedEmail && password === savedPassword ) {
      alert("Login successful! Redirecting to homepage...");
      window.location.href = "index.html"; // Redirect to index page
    } else {
      alert("Invalid email or password. Try again.");
    }
  });
});