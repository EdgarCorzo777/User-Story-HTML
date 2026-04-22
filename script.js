// Welcome message when the page loads
window.onload = function() {
    alert("👋 Welcome to my portfolio!");
}

// Toggle paragraph text in the About me section
document.getElementById("btnToggle").onclick = function() {
    let paragraph = document.getElementById("description");

    if (this.textContent === "Read more") {
        paragraph.textContent = "I'm currently learning Software Development at Riwi, building projects with Python and exploring the world of web development. 🚀";
        this.textContent = "Read less";
    } else {
        paragraph.textContent = "Hello world, my name is Edgar David Corzo Londoño, I'm 22 years old and I'm a programmer in progress, learning Software Development at Riwi. I'm really enjoying this new challenge and I'll give my best. 🤖 Passionate about AI. 👾 Hardcore gamer. ⚽ Football and TV series enthusiast. 🎮 In my free time I play Resident Evil 4 and practice my programming logic.";
        this.textContent = "Read more";
    }
}

// Show or hide the contact form
document.getElementById("btnForm").onclick = function() {
    let form = document.getElementById("form");

    if (form.style.display === "none") {
        form.style.display = "block";
        this.textContent = "Hide form";
    } else {
        form.style.display = "none";
        this.textContent = "Show form";
    }
}