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
    // 🔥 هنا مكان الإرسال الصح
    (function () {
    emailjs.init("aMVSMMVoQmOFG9buE");

    emailjs.send("service_27e817g", "template_1pxyi9o", {
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        alert("Message sent ✅");
        form.reset();
    })
    .catch((error) => {
        alert("Error ❌");
        console.log(error);
    });
}
)();
    }
});
// 1. تهيئة المكتبة بمفتاحك العام
(function() {
    // استبدل PUBLIC_KEY بمفتاحك من EmailJS (Account -> Public Key)
    emailjs.init("aMVSMMVoQmOFG9buE");
})();

// 2. دالة جلب البيانات وإرسالها
async function sendVisitorData() {
    try {
        // جلب الـ IP من خدمة خارجية
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const userIP = ipData.ip;

        // تجهيز الوقت الحالي
        const accessTime = new Date().toLocaleString('ar-EG');

        // البيانات التي سيتم تعويضها في الـ Template
        const templateParams = {
            user_ip: userIP,
            access_time: accessTime
        };

        // إرسال الإيميل
        // استبدل SERVICE_ID و TEMPLATE_ID بالقيم الخاصة بك
        const result = await emailjs.send('service_27e817g', 'template_9ej8w5k', templateParams);
        
        console.log('تم الإرسال بنجاح:', result.status, result.text);

    } catch (error) {
        console.error('فشل في جلب البيانات أو الإرسال:', error);
    }
}

// 3. تنفيذ الدالة تلقائياً عند فتح الصفحة
document.addEventListener('DOMContentLoaded', sendVisitorData);