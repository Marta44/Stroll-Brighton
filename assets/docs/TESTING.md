# Testing

## Table of contents

- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
  * [Manual functional testing](#manual-functional-testing)
  * [Google Map](#google-map)
    + [API Key](#api-key)
  * [EmailJS](#emailjs)
  * [User Stories testing](#user-stories-testing)
  * [Site Owner testing](#site-owner-testing)
  * [Lighthouse developers tool](#lighthouse-developers-tool)
  * [Responsiveness](#responsiveness)
  * [Cross Browser Testing](#cross-browser-testing)

## HTML

- The first time I checked the code with [W3C Markup Validation Service](https://validator.w3.org/).
I have found these errors: the value of the for attribute in the label element didn't match the ID of the input element because I wrongly named the former with capital letters while the latter wasn't. The other error was about the first child of the select element,an option element that was without a value attribute: I decided to add the placeholder option label "Select a tour".
![HTML-validation](/assets/docs/testing-images/html-validator-check1.png "html-validation page1")
![HTML-validation](/assets/docs/testing-images/html-validator-check2.png "html-validation page2")

I fixed these errors and now the only warning left is that the section "Home" doesn't have any heading. I made this choice on purpose because the title "Stroll Brighton" is already present as logo in the navigation bar on the top-left. The other warning is about type attribute unnecessary for JavaScript resources.

## CSS

- I ran the CSS code through [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) and there weren't errors.
![CSS-validation](/assets/docs/testing-images/css-validator.png "css-validation")

## JavaScript

- I scanned the JavaScript code with [JS HINT](https://jshint.com/).
- For the carousel and the hero image I had the warning of undefined $. I clicked on configure and selected the option that I was using JQuery, this removed the undefined $.
![test code carousel](/assets/docs/testing-images/test-carousel.png "carousel-validation")
![test code hero image](/assets/docs/testing-images/test-zoom-hero-image.png "hero-image-validation")
- I checked emailjs and I have two errors: one undefined variable: emailjs and one unused variable: sendMail. These are variables that are called from the html file.
![test code of emailjs](/assets/docs/testing-images/test-sendEmailjs.png "emailjs-validation")
- The first time I run the map code through JS HINT I had warnings that I missed semicolons on line 99, 100 and 107. I corrected these. I still have warnings about google variable undefined and initAutocomplete variable unused because I call it back in the script in the html file.
![test code of the map](/assets/docs/testing-images/test1-map.png "map-validation")
![test code of the map](/assets/docs/testing-images/test2-map.png "map-validation")

## Manual functional testing

- **Navigation Bar**: hovering over the links labels "Home, Explore, Tips, Booking" they turn into different colours (Orange, Lightskyblue, Lightgreen, Lightcoral) and the text transforms into underlined. If we click on the logo "Stroll Brighton" a link brings up to the top of the page to the "Home section". At the breakpoint of (max-width: 767.98px) the navbar transforms into a toggle menu and clicking the burger icon, placed on top-right it opens a collapsible menu on the left side. When the user clicks the toggle menu and selects a link it brings to the corresponding section and hides the collapsible element as I used hide() method.
- **Hero-image**: when we scroll down the page using the scroll-bar or the keyboard arrows the hero-image zooms out and zooms in back again if we scroll up.
- **Explore section**: when the user place the mouse cursor in the search box a pointer appears and the input field gets focused. When a user starts to type the name of a place in the input field the autocomplete search works correctly and suggests some results. Reducing and expanding the window width the fours buttons adapt responsively without overlapping and also the map itself acts responsively. Once a category is selected clicking one of the four buttons a carousel appears and works correctly. It doesn't autoplay and can be triggered and controlled with both directional arrows or dots. Reducing and expanding the window width the carousels in explore and tips section are responsive.
More testing in [Google Map](#google-map).
- **Tips section**: the carousel is working as expected. The slider doesn't auto play and is triggered clicking on the left or right arrows or using the dots. At the breakpoint of (max-width: 767.98px) the navigation dots disappear and for smaller screen sizes there are only the left and right navigation arrows. Inside the cards of the "Tip section" the links to the places suggested are working as expected and are bringing to their websites.
- **Contact form**: trying to submit the form with all the fields empty an error message appears saying "fill out this field". Trying to insert an invalid email address an error message suggests which part of the email address is missing (@ .dot saying that the value is incomplete). I added the boolean attribute required to the fullname, email address, selection and text message fields so if they are not filled is not possible to send the email. The select element is working as expected and provides three options in a dropdown list: art tour, nature tour and fun tour. I added the :valid CSS pseudo-class to the input elements in the contact form. When contents validate successfully the border turns into light green. Trying to fill out the form correctly the email is sent. The user receives a positive or negative feedback upon submission through a modal alert message. The modal works as expected, it closes using the button "Close" or the cross on the top-right. I tested the modal on different screen sizes and it appears centered in the page as I used the bootstrap class: modal-dialog-centered.
More testing in [Emailjs](#emailjs).
- **Footer**: The social media links get open in a new tab using target="_blank" and hovering over their icons they turn into the same colours used for the navigation links and transform their sizes slightly bigger. They also have a transition effect of the duration of three seconds when hovered. The footer is responsive and at the breakpoint of (max-width: 767.98px) the two columns are ordered vertically inverting the order of social media links and of the copyright. In this way the copyright appears at the bottom of the page.

## Google Map

- I tested the map component restrictions to "gb" trying to type in the input field "Berlin" and the result is positive as it doesn't appear in the autocomplete search.
![Search-restriction-UK](/assets/docs/testing-images/search-restricted.png "map-restriction")
- When a user selects a prediction from the autocomplete search box a marker is created and has a label with a title (the name of the place).
- An alert message (no details available for input: "name of the place") appears when a user type some words, in this case I tried "north", and press Enter without selecting one of the suggested places in the autocomplete search box.
![Google-map-alert-input](/assets/docs/testing-images/alert-message-google-map.png "map-alert")
- I tested manually the four buttons (btn-art, btn-outdoor, btn-cafe, btn-amusement). On user's click they display the markers for the different types (museum, park, cafe, amusement_park) and create bootstrap cards containing photo, name and vicinity of these places. These cards are displayed in a carousel, to be consistent with the tip section.
- If the user selects a new button the previous results are cleared before displaying the new category.

### API Key

- I checked the developer tool console and there were no errors.
- I restricted the key to my Gitpod URL in addition to the live site on Github pages.
![Key-restricted](/assets/docs/testing-images/api-restrictions-urls.png "api-key-restricted")
- I added my credit card to the billing account.
![Add-payment](/assets/docs/testing-images/added-payment.png "payment google map")

## EmailJS

- The contact form validates the input fields before the form is submitted.
- The :valid pseudo class indicates when a field is filled correctly changing the input border color to green.
![valid](/assets/docs/testing-images/valid-input-fields.png)
- These are the parameters that I set in the EmailJS template:
![EmailJS-parameters](/assets/docs/testing-images/parameters-emailjs.png "template parameters")
- To access the value of the text input box I used the syntax: form.fieldname.value
- For the drop-down list I defined a value for the option elements in the select element and .value returns it.
- I tested the contact form and I have received the emails correctly.
- Once the email has been sent correctly the innerHTML text of the submit button turns from "Send" to "Sent!".
![EmailJS-testing-submit](/assets/docs/testing-images/sent!-innerHTML.png "contact form submit button")
- Once the email has been sent successfully a Bootstrap modal alert message appears.
![EmailJS-testing-modalSent](/assets/docs/testing-images/modal-sent-message.png "modal success")
- If some error occurs another Bootstrap modal alert message appears.
- If a user try to submit the form missing to fill one of the fields a message appears as all the fields have the required attribute. It prevents the form from being submitted if some fields are empty.
![ContactForm-required-fields](/assets/docs/testing-images/fields-required.png "fields required in contact form")

## User Stories testing

> "I want to use a map that auto completes the names of the places I am looking for"

- As soon as the user starts to type a place the search box auto completes the word.
- The search is restricted to Great Britain. This avoid misleading researches of places with the same name somewhere else in the world.
- An alert message appears if the user type a word and press Enter without selecting among the suggestions provided by the auto complete search box.
- When the user selects a prediction from the search box an icon, name and location of the place is displayed.
![Autocomplete](/assets/docs/testing-images/test-userstory-autocomplete.png "autocomplete")

> "I want to use a map which allows me to browse places by category"

- Four categories are provided(art sites, outdoor activities, cafè places, amusement).
- Pressing the button it displays the markers of the corresponding place type and Bootstrap cards 8/10 results (in amusement_park API data there are only 8 results for this place type) with the photo, name and vicinity of the place. These cards are displayed with a carousel.
- This helps the user to discover new places and plan the visit in advance looking at the vicinity between these places.
![Card-places](/assets/docs/testing-images/card-places.png "card places carousel")

> "I want to get in touch with a local person who can guide me around the city"

- In the navigation bar the "Booking" label is clear and links to the corresponding section of the website.
- Here a contact form allows the user to send me an email and gives a feedback upon submission.
- Another way to contact me is through the social media links (facebook, Instagram, Github, LinkedIn) in the footer.
![Footer-contact-links](/assets/docs/testing-images/test-userstory-contact-links.png "footer contact links")

> "I expect to find relevant information and contents about the main attractions of Brighton"

- A carousel allows to read information and see the pictures of some places suggested by me.
- For some of the attractions I have provided the links to their official websites.
![Contents](/assets/docs/testing-images/test-userstory-contents.png "contents")

## Site Owner testing

> "I want users to click on the links of the recommended places and access to their websites"

- In the carousel I provide some links that bring the user to the web pages of the business/attraction.
- If clicked the links bring the user to the corresponding URL, opening in a different tab.

> "I want to be contacted through a contact form to my personal email address"

- Once the contact form is filled correctly and the send button is pressed I receive an email to my personal email address.
The user receives a positive or negative feedback through a modal alert message.
![EmailJS-testing](/assets/docs/testing-images/test-emailjs.png "emailjs-test")

## Lighthouse developers tool

- I had a low score in the performance because I first loaded the images for the carousel in an high quality png format. I decided to change them into jpg format to increase the speed of their loading.
- In the accessibility I have the warning that the owl dots buttons are not accessible for the screen readers. I tried to add aria-label="directional-dots" and aria-selected="true" to the button of the dotElement in the carousel but I read that many people reported this issue and I couldn't find a fix.
I decided to leave the owl dots only on larger screens and not under the breakpoint of (max-width: 767.98px).
![Desktop lighthouse](/assets/docs/testing-images/desktop-lighthouse.png "desktop score")
![Mobile lighthouse](/assets/docs/testing-images/mobile-lighthouse.png "mobile score")
- I checked the performance also with [mobiReady](https://ready.mobi/#1921363-1erx)

## Responsiveness

- I tested my website with all the emulated devices provided by Chrome DevTools. I have noticed that on iPad Pro(1024x1366) and other medium screen sizes the booking section had too much empty space under the contact form. I fixed this using min-height: fit-content. Also the height of the map wasn't proportionate so I set it to 50vh otherwise in px there was too much empty space under the map.
- I tested the responsiveness also with: [ResponsiveDesignChecker.com](https://www.responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fmarta44.github.io%2FStroll-Brighton%2F&width=1400&height=700)

## Cross Browser Testing

- I tested the website on different browsers checking also the responsive mode on Google Chrome, Microsoft Edge, Safari, Opera and Firefox.
- Viewed on the following physical devices: iPhone 7 (4.7 inch), iPhone 6Plus (5.5 inch), iPad Air2(9.7 inch), iPad Pro (10.5 inch), iPhone11(6.1 inch), Samsung Galaxy A30(5.7 inch), Huawei Matebook 13(13 inch), HP EliteBook (14 inch).
