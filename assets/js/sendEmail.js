// Credit: Code Institute course materials for emailJs
function sendMail(contactForm) {
    emailjs.send("Stroll-Brighton","CI-MS2", {
        "from_name":contactForm.fullname.value,
        "from_email":contactForm.email.value,
        "selection":contactForm.selection.value,
        "message_request":contactForm.message.value,
    })

.then (
    // On success the browser alert window appears and the send button displays "Sent!"
    function (success) {
        let sendBtn = document.getElementById("send-btn");
        sendBtn.innerHTML="Sent!";
        alert("Message successfully sent!", success);
    },
    // On error the browser alert window appears and the send button displays "Error!"
    function (error) {
        let sendBtn = document.getElementById("send-btn");
        sendBtn.innerHTML="Error!";
        alert("Error, Please fill the form again.", error);
    });
    document.getElementById("contactForm").reset(); // Clear the form fields after the email has been sent
return false; // Stop loading a new page
}