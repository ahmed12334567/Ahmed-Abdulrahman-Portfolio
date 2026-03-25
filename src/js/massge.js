let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let erorr = document.getElementById("erorr");
    let valid = true;

    if (name === "" || email === "" || message === "") {
        erorr.classList.remove("hidden");
        nameInput.classList.add("border-red-700");
        emailInput.classList.add("border-red-700");
        messageInput.classList.add("border-red-700");
        valid = false;
    }

    if (name.length < 3) {
        erorr.classList.remove("hidden");
        nameInput.classList.add("border-red-700");
        valid = false;
    }

    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})+$/.test(email)) {
        erorr.classList.remove("hidden");
        emailInput.classList.add("border-red-700");
        valid = false;
    }
    if(valid === false){
        return;
    }
    else {
        erorr.classList.add("hidden");
        nameInput.classList.remove("border-red-700");
        emailInput.classList.remove("border-red-700");
        messageInput.classList.remove("border-red-700");
    (function () {
    emailjs.init("aMVSMMVoQmOFG9buE");

    emailjs.send("service_27e817g", "template_1pxyi9o", {
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        alert("Tank you for your message!");
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
(function() {
    emailjs.init("aMVSMMVoQmOFG9buE");
})();

async function sendVisitorData() {
    if (sessionStorage.getItem('is_reported')) {
        return; 
    }

    try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const userIP = ipData.ip;
        const accessTime = new Date()

        const templateParams = {
            user_ip: userIP,
            access_time: accessTime
        };

        await emailjs.send('service_qzalf55', 'template_9ej8w5k', templateParams);
        sessionStorage.setItem('is_reported', 'true');

    } catch (error) {
        console.error('Error sending visitor data:', error);
    }
}
sendVisitorData();