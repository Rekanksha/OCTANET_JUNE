document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.getElementById("contact-link");
    const contactSection = document.getElementById("contact");

    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        contactSection.classList.toggle("hidden");
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
});
