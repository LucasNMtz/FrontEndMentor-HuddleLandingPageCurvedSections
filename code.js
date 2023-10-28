// form script
const emailInput = document.getElementById("email-input");
const errorMessage = document.getElementById("div__incorrect-email");
const validEmailMessage = document.getElementById("div__correct-email");

emailInput.addEventListener("input", function () {
    const email = emailInput.value;

    if (isValidEmail(email)) {
        emailInput.style.border = "1px solid #4dec1cd7"; // Set the border color to green 
        errorMessage.style.display = "none";
        validEmailMessage.style.display = "block";
    } else {
        emailInput.style.border = "1px solid hsl(0, 100%, 63%)"; // Set the border color to red
        errorMessage.style.display = "block";
        validEmailMessage.style.display = "none";
    }
});

emailInput.addEventListener("blur", function () {
    emailInput.style.border = "none"; // Resets the border color when leaving the field
    errorMessage.style.display = "none";
    validEmailMessage.style.display = "none";
});

function isValidEmail(email) {
    // Use a regular expression to validate the email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
// form script

// Social logos hover
const socialLogos = document.querySelectorAll(".social-logo");

socialLogos.forEach((logo) => {
    logo.addEventListener("mouseenter", function () {
        // Get hover image path
        const hoverSrc = logo.src.replace(".svg", "-light-blue.svg");
        // Change the src attribute on hover
        logo.src = hoverSrc;
    });

    logo.addEventListener("mouseleave", function () {
        // Restore the original image when exiting the hover
        const originalSrc = logo.src.replace("-light-blue.svg", ".svg");
        logo.src = originalSrc;
    });
});
// Social logos hover