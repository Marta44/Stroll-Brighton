// Credit: Code Institute course materials for emailJs
function sendMail(contactForm) {
    emailjs.send("Stroll-Brighton","CI-MS2", {
        "from_name":contactForm.fullname.value,
        "from_email":contactForm.email.value,
        "selection":contactForm.selection.value,
        "message_request":contactForm.message.value,
    })

.then (
    // On success a modal alert message appears and the submit button displays "Sent!"
    function (success) {
        let sendBtn = document.getElementById("send-btn");
        sendBtn.innerHTML="Sent!";
        $("#modalSent").modal("toggle");
    },
    // On error a modal alert message appears"
    function (error) {
        $("#modalError").modal("toggle");
    });
    document.getElementById("contactForm").reset(); // Clear the form fields after the email has been sent
return false; // Stop loading a new page
}