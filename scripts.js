/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "red";
        } else {
            messageDiv.innerHTML = `Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`;
            messageDiv.style.color = "green";
            form.reset();
        }
    
    });
});