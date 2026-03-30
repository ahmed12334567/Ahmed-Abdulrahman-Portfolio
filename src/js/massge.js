let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");
    let valid = true;

    if (name === "" || email === "" || message === "") {
        error.classList.remove("hidden");
        nameInput.classList.add("border-red-700");
        emailInput.classList.add("border-red-700");
        messageInput.classList.add("border-red-700");
        valid = false;
    }

    if (name.length < 3) {
        error.classList.remove("hidden");
        nameInput.classList.add("border-red-700");
        valid = false;
    }

    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})+$/.test(email)) {
        error.classList.remove("hidden");
        emailInput.classList.add("border-red-700");
        valid = false;
    }
    if(valid === false){
        return;
    }
    else {
        error.classList.add("hidden");
        nameInput.classList.remove("border-red-700");
        emailInput.classList.remove("border-red-700");
        messageInput.classList.remove("border-red-700");
    (function () {
    emailjs.init("YNvJWxkSbX9Zh9wJq");

    emailjs.send("service_xoykacu", "template_dha2s1j", {
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        alert("Thank you for your message!");
        form.reset();
    })
    .catch((error) => {
        alert("Error sending message. Please try again later.");
        console.log(error);
    });
}
)();
    }
});
