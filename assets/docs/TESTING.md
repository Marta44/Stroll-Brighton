## HTML
- The first time I checked the code with [W3C Markup Validation Service](https://validator.w3.org/) 
I have found these errors: the value of the for attribute in the label element didn't match the ID of the input element because I wrongly named the labels with capital letters while the IDs weren't. The other error was about the first child of the select element, an option element that was without a value attribute: I decided to add the placeholder option label "Select a tour".
![HTML-validation](/assets/docs/testing-images/html-validator-check1.png)
![HTML-validation](/assets/docs/testing-images/html-validator-check2.png)
I fixed these errors and now the only warning left is that the section "Home" doesn't have any heading but this has been done on purpose. 
## CSS
- I ran the CSS code through [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) and the result was: no errors.
![CSS-validation](/assets/docs/testing-images/Css-validator.png)
## JavaScript
- I scanned the JavaScript code with [JS HINT](https://jshint.com/) and 
## Google Map
- I tested the map componentRestrictions to "gb" trying to type in the input field Berlin and the result is positive and it doesn't appear in the autocomplete search. 
![Search-restriction-UK](/assets/docs/testing-images/search-restricted.png)
- An alert message appears when a user type some words, in this case I tried "north", and press Enter without selecting on of the suggested places in the autocomplete search box. 
![Google-map-alert-input](/assets/docs/testing-images/alert-message-google-map.png)
### API Key
- I checked the developer tool console and there were no errors.
- I restricted the key to my Gitpod URL in addition to the live site on Github pages.
![Key-restricted](/assets/docs/testing-images/API-restrictions-urls.png)
- I added my credit card to the billing account.
![Add-payment](/assets/docs/testing-images/added-payment-APIKey.png)
## EmailJS
- These are the parameters that I set in the EmailJS template. 
![EmailJS-parameters](/assets/docs/testing-images/parameters-emailjs.png)
- I tested the contact form and I have received the emails correctly. 
![EmailJS-testing](/assets/docs/testing-images/test-emailjs.png)
- Once the email has been sent correctly the innerHTML text of the submit button turns from "Send" to "Sent!".
![EmailJS-testing-submit](/assets/docs/testing-images/sent!-innerHTML.png)
- Once the email has been sent successfully an alert window message appears. "Message successfully sent!".
![EmailJS-testing-alert](/assets/docs/testing-images/alert-success.png)
- If a user try to submit the form missing to fill one of the fields a message appears as all the fields have the required attribute. 
![ContactForm-required-fields](/assets/docs/testing-images/fields-required.png)
## User Stories Testing
- 