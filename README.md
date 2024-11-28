Website Link: https://molemomm.github.io/PersonalPortfolio/

<h3 align="left">Languages and Tools used in this project:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# To Gain Acces to the profile

-Clone the the URL link provided
-Past the URL in Chrome and press enter




# Personal Portfolio
This project is my personal portfolio website designed to showcase my work and contact information. Below is a detailed description of each file and its purpose within the project.

## Project Structure

```
css/
    styles.css
images/
index.html
scrips/
    jason.js
```

### Files and Directories

- **css/styles.css**: Contains the CSS styles for the website.
- **images/**: Directory for storing images used in the website.
- **index.html**: The main HTML file for the website.
- **scrips/jason.js**: Contains JavaScript code for the website.

## [`index.html`](index.html )

The [`index.html`](index.html ) file is the main HTML file for the personal portfolio website. It includes the following sections:

### Head Section

The head section includes meta tags for character set and viewport settings, the title of the webpage, and links to external stylesheets and fonts.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Portfolio</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>
```

### Body Section

The body section contains the main content of the webpage, including the header, main content sections, and footer.

#### Header

The header section typically includes navigation links and branding elements.

```html
<header>
    <!-- Header content goes here -->
</header>
```

#### Main Content

The main content includes various sections such as the contact section and the footer.

##### Contact Section

The contact section invites visitors to get in touch with a call to action, "Got a project? Let's Talk," and provides contact details, including an email address and phone number. It also features social media icons linking to Facebook, LinkedIn, and Instagram. Additionally, there is a contact form that allows users to submit their name, email, and message, which is processed via the Web3Forms API.

```html
<section class="contact" id="contact">
    <div class="contact-main">
        <a href="#" class="h-line">
            <i class="ri-shining-2-line"></i>
            <span>Contact!</span>
        </a>
        <h2>
        Got a project? <span>Let's Talk</span>
        </h2>
        <!-- Contact Details -->
        <div class="email">
            <p>Email</p>
            <h6>mamashelamolemo@gmail.com</h6>
        </div>
        <div class="num">
            <p>Call</p>
            <h6>064 315 6461</h6>
        </div>
        <!-- Social Media Icons -->
        <div class="social-icons">
            <a href="#"><i class="ri-facebook-line"></i></a>
            <a href="http://www.linkedin.com/in/molemo-mamashela-190736244" target="_blank" rel="noopener"><i class="ri-linkedin-line"></i></a>
            <a href="#"><i class="ri-instagram-line"></i></a>
        </div>
    </div>
    <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="7fd02245-286c-4f19-9a24-a6201e6a603b">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Email Address" required>
        <textarea name="message" cols="30" rows="10" placeholder="Write Message here..." required></textarea>
        <input type="submit" value="Submit Now" class="submit-btn">
    </form>
</section>
```

##### Footer

The footer contains a copyright notice for the year 2024, attributing the content to Molemo Mamashela and stating that all rights are reserved.

```html
<div class="footer">
    <div class="Copyright">
        <p>Copyright©2024 Molemo Mamashela. All rights Reserved</p>
    </div>
    <a href="#home" class="scroll-top">
        <i class="ri-arrow-up-s-line"></i>
    </a>
</div>
```

### External Resources

- **Typed.js**: A JavaScript library for typing animations.
- **Boxicons**: Icon library.
- **Remixicon**: Icon library.
- **Google Fonts**: Custom fonts from Google Fonts.
- **Font Awesome**: Icon library.

## [`css/styles.css`](css/styles.css )

The [`css/styles.css`](css/styles.css ) file defines the styling for various sections of the webpage. It includes styles for text elements such as paragraphs and headings, specifying properties like font weight, line height, margin, and color. The file uses CSS variables for consistent color and font size management. Specific sections like the "About" section and "Services" section have tailored styles, including font sizes, colors, and margins. The "Services" section features a title with a highlighted span and a card layout for service descriptions. The service cards are styled with a dark background, padding, rounded corners, and a transition effect for smooth interactions. The layout uses flexbox for alignment and spacing. Overall, the file ensures a cohesive and visually appealing design for the webpage.

## [`scrips/jason.js`](scrips/jason.js )

The [`scrips/jason.js`](scrips/jason.js ) file contains JavaScript code that manages the behavior of a webpage's menu and a typing animation effect. It includes an event listener for toggling the menu's open state when a specific element is clicked. Additionally, it has a scroll event listener that ensures the menu is closed when the user scrolls the page. The file also initializes a typing animation using the Typed.js library, which cycles through the strings "Backend Developer" and "Mobile app Developer" with specified typing and backspacing speeds, and loops the animation indefinitely. This script enhances the interactivity and dynamic content of the webpage.

## How to Run

1. Open [`index.html`](index.html ) in a web browser to view the personal portfolio website.
2. Ensure that the [`css/styles.css`](css/styles.css ) and [`scrips/jason.js`](scrips/jason.js ) files are correctly linked and available in their respective directories.

## License

This project is licensed under the terms specified by the author, Molemo Mamashela. All rights reserved.

Similar code found with 2 license types
