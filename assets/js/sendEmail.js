// Credit: Code Institute course materials for emailJs
function sendMail(contactForm){
    emailjs.send("Stroll-Brighton","CI-MS2",{
        "from_name":contactForm.fullname.value,
        "form_email":contactForm.email.value,
        "selection":contactForm.selection.value,
        "message_request":contactForm.message.value,
    })

.then (
    function (message){
        alert("Message successfully sent!")
    },
    function (error){
        alert("Error, Please fill the form again.")
    });
    document.getElementById("contactForm").reset(); // Clear the form fields after submission
return false; // Stop loading a new page
}