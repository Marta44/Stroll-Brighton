// Credit: Code Institute course materials for emailJs
function sendMail(contactForm){
    emailjs.send("Stroll-Brighton","CI-MS2",{
        "from_name":contactForm.fullname.value,
        "from_email":contactForm.email.value,
        "selection":contactForm.selection.value,
        "message_request":contactForm.message.value,
    })

.then (
    function success(input){
        let sendBtn = document.getElementById("send-btn");
        sendBtn.style.backgroundColor="green";
        alert("Message successfully sent!")
    },
    function (error){
        let sendBtn = document.getElementById("send-btn");
        sendBtn.style.backgroundColor="red";
        alert("Error, Please fill the form again.")
    });
    document.getElementById("contactForm").reset(); // Clear the form fields after submission
return false; // Stop loading a new page
}