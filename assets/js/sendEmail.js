// Credit: Code Institute course materials for emailJs
function sendMail(contactForm){
    emailjs.send("Stroll-Brighton","CI-MS2",{
        "from_name":contactForm.fullname.value,
        "from_email":contactForm.email.value,
        "selection":contactForm.selection.value,
        "message_request":contactForm.message.value,
    })

.then (
    // On success displays the browser alert window and the send button turns green
    function success(){
        let sendBtn = document.getElementById("send-btn");
        sendBtn.innerHTML="Sent!";
        alert("Message successfully sent!")
    },
    // On error displays the browser alert window and the send button turns red
    function (error){
        let sendBtn = document.getElementById("send-btn");
        sendBtn.innerHTML="Error!";
        alert("Error, Please fill the form again.", error)
    });
    document.getElementById("contactForm").reset(); // Clear the form fields after submission
return false; // Stop loading a new page
}