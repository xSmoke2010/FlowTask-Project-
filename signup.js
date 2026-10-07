const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const year = document.getElementById("year").value;
    const state = document.getElementById("state").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "") {
        document.getElementById("nameError").textContent = "Please enter your name.";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (age === "" || age < 1 || age > 120) {
        document.getElementById("ageError").textContent = "Please enter a valid age.";
        isValid = false;
    } else {
        document.getElementById("ageError").textContent = "";
    }

    if (year === "" || year < 1900 || year > 2026) {
        document.getElementById("yearError").textContent = "Please enter a valid year.";
        isValid = false;
    } else {
        document.getElementById("yearError").textContent = "";
    }

    if (state === "") {
        document.getElementById("stateError").textContent = "Please enter your state.";
        isValid = false;
    } else {
        document.getElementById("stateError").textContent = "";
    }

    if (phone.length !== 11) {
        document.getElementById("phoneError").textContent = "Phone number must be 11 digits.";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    if (email.includes("@") === false || email.includes(".") === false) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (isValid === true) {
        alert("Account created!");
        form.reset();
        location.href = "dashboard.html";
    }
});