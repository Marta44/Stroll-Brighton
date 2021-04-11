# Testing

## HTML

- The first time I checked the code with [W3C Markup Validation Service](https://validator.w3.org/).
I have found these errors: the value of the for attribute in the label element didn't match the ID of the input element because I wrongly named the labels with capital letters while the IDs weren't. The other error was about the first child of the select element, an option element that was without a value attribute: I decided to add the placeholder option label "Select a tour".
![HTML-validation](/assets/docs/testing-images/html-validator-check1.png "html-validation page1")
![HTML-validation](/assets/docs/testing-images/html-validator-check2.png "html-validation page2")

I fixed these errors and now the only warning left is that the section "Home" doesn't have any heading. I made this choice on purpose because the title "Stroll Brighton" is already present as logo in the navigation bar on the top-left.

## CSS

- I ran the CSS code through [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) and the result was: no errors.
![CSS-validation](/assets/docs/testing-images/Css-validator.png "css-validation")

## JavaScript

- I scanned the JavaScript code with [JS HINT](https://jshint.com/).
- For the carousel and the hero image I had the warning of undefined $. I clicked on configure and selected the option that I was using JQuery, this removed the undefined $.
![test code carousel](/assets/docs/testing-images/test-carousel.png "carousel-validation")
![test code hero image](/assets/docs/testing-images/test-zoom-hero-image.png "hero-image-validation")
- I checked emailjs and I have two errors: one undefined variable: emailjs and one unused variable: sendMail. These are variables that are called from the html file.
![test code of emailjs](/assets/docs/testing-images/test-sendEmailjs.png "emailjs-validation")
- The first time I run the map code through JS HINT I had warnings that I missed semicolons on line 94, 95 and 102. I corrected these. I still have warnings about google variable undefined and initAutocomplete variable unused because I call it back in the script in the html file.
![test code of the map](/assets/docs/testing-images/test-map.png "map-validation")

## Manual functional testing

- **Navigation Bar**: hovering over the links labels "Home, Explore, Tips, Booking" they turn into different colours (orange, lightskyblue, lightgreen, lightcoral), the same colours of the correspondent section and the text transforms to underlined. If we click on the logo "Stroll Brighton" a link brings up to the top of the page to the "Home section". At the breakpoint of (max-width: 767.98px) the navbar transforms into a toggle menu and clicking the burger icon, placed on top-right it opens a collapsible menu on the left side.
- **Hero-image**: when we scroll down the page using the scroll-bar or the keyboard arrows the hero-image zooms out and zooms in back again if we scroll up.
- **Explore section**: when the user place the mouse cursor in the search box a pointer appears and the input field gets focused. Reducing and expanding the window width the fours buttons adapt responsively without overlapping.
More testing in [Google Map](#google-map).
- **Tips section**: the carousel is working as expected. At the breakpoint of (max-width: 767.98px) the navigation dots disappear and for smaller screen sizes there are only the left and right navigation arrows. In the carousel cards the links to the different pages suggested work as expected.
- **Contact form**: trying to submit the form with all the fields empty an error message appears saying "fill out this field". Trying to insert an invalid email address an error message suggests which part of the email address is missing (@ .dot saying that the value is incomplete). I added the boolean attribute required to the fullname, email address, selection and text message fields so if they are not filled is not possible to send the email. Trying to fill out the form correctly the email is sent. More testing in [Emailjs](#emailjs).
- **Footer**: The social media links get open in a new tab using target="_blank" and hovering over their icons they turn into the same colours used for the navigation links and transform their sizes slightly bigger. They also have a transition effect of the duration of three seconds when hovered. The footer is responsive and at the breakpoint of (max-width: 767.98px) the two columns are ordered vertically inverting the order of social media links and of the copyright. In this way the copyright appears at the bottom of the page.

## Google Map

- I tested the map component restrictions to "gb" trying to type in the input field "Berlin" and the result is positive as it doesn't appear in the autocomplete search.
![Search-restriction-UK](/assets/docs/testing-images/search-restricted.png "map-restriction")
- An alert message appears when a user type some words, in this case I tried "north", and press Enter without selecting one of the suggested places in the autocomplete search box.
![Google-map-alert-input](/assets/docs/testing-images/alert-message-google-map.png "map-alert")
- I tested manually the four buttons (btn-art, btn-outdoor, btn-cafe, btn-amusement). On user's click they display the markers for the different types (museum, park, cafe, amusement_park) and create bootstrap cards containing photo, name and vicinity of these places.

### API Key

- I checked the developer tool console and there were no errors.
- I restricted the key to my Gitpod URL in addition to the live site on Github pages.
![Key-restricted](/assets/docs/testing-images/API-restrictions-urls.png "api-key-restricted")
- I added my credit card to the billing account.
![Add-payment](/assets/docs/testing-images/added-payment-APIKey.png "payment google map")

## EmailJS

- The contact form validates the input fields before the form is submitted.
- These are the parameters that I set in the EmailJS template:
![EmailJS-parameters](/assets/docs/testing-images/parameters-emailjs.png "template parameters")
- To access the value of the text input box I used the syntax: form. fieldname.value
- For the drop-down list I defined a value for the option elements in the select element and .value returns that.
- I tested the contact form and I have received the emails correctly.
![EmailJS-testing](/assets/docs/testing-images/test-emailjs.png "emailjs-test")
- Once the email has been sent correctly the innerHTML text of the submit button turns from "Send" to "Sent!".
![EmailJS-testing-submit](/assets/docs/testing-images/sent!-innerHTML.png "contact form submit button")
- Once the email has been sent successfully an alert window message appears. "Message successfully sent!".
![EmailJS-testing-alert](/assets/docs/testing-images/alert-success.png "emailjs-alert")
- If a user try to submit the form missing to fill one of the fields a message appears as all the fields have the required attribute. It prevents the form from being submitted if some fields are empty.
![ContactForm-required-fields](/assets/docs/testing-images/fields-required.png "fields required in contact form")

## User Stories testing

-

## Site Owner testing

-

## Lighthouse developers tool

- I had a low score in the performance because I first loaded the images for the carousel in an high quality png format. I decided to change them into jpg format to increase the speed of their loading.
- In the accessibility I have the warning that the owl dots buttons are not accessible for the screen readers. I tried to add aria-label="directional-dots" and aria-selected="true" to the button of the dotElement in the carousel but I didn't find a fix.
I decided to leave the owl dots only on larger screens and not under the breakpoint of (max-width: 767.98px).
![Desktop lighthouse](/assets/docs/testing-images/desktop-lighthouse.png "desktop score")
![Mobile lighthouse](/assets/docs/testing-images/mobile-lighthouse.png "mobile score")

## Responsiveness

- I tested my website different size resolutions with: [Mobi Ready](https://ready.mobi). I had a major fail about absolute measures in my CSS file. I fixed this using relative measures em for font-sizes instead of px.

## Cross Browser Testing

- I tested the website on different browsers: Google Chrome, Microsoft Edge, Safari, Opera and Firefox.