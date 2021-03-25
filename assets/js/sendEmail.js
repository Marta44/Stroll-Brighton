function sendMail(contactForm){
    emailjs.send("Stroll-Brighton","CI-MS2",{
        "from_name":contactForm.name.value,
        "form_email":contactForm.email.value,
        "selection":contactForm.selection.value,
        "message_request":contactForm.message.value,
    })
}