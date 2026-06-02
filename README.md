# Interactive Student Portal
#decodelab task 3
## Project Overview

The Interactive Student Portal is a front-end web application developed using HTML, CSS, and JavaScript. The purpose of this project is to demonstrate how JavaScript can be used to create dynamic and interactive user experiences without reloading the webpage.

This project follows the concept of user input, event handling, and dynamic DOM manipulation. Users can register through a form, switch between light and dark themes, and display or hide course details in real time.

---

## Objectives

* To understand the basics of DOM manipulation.
* To implement event-driven programming using JavaScript.
* To create a responsive and interactive user interface.
* To demonstrate real-time webpage updates without page refresh.
* To practice integrating HTML, CSS, and JavaScript into a complete project.

---

## Features

### 1. Dark Mode Toggle

* Allows users to switch between light mode and dark mode.
* Changes the webpage appearance instantly.
* Implemented using JavaScript and CSS class manipulation.

### 2. Student Registration Form

* Accepts user input through a form.
* Prevents page refresh using `event.preventDefault()`.
* Displays a personalized success message after registration.

### 3. Show/Hide Details Section

* Enables users to reveal or hide course information.
* Updates button text dynamically.
* Improves user interaction and page organization.

### 4. Dynamic DOM Manipulation

* Updates webpage content without reloading.
* Uses JavaScript to modify text and styles in real time.

---

## Technologies Used

| Technology       | Purpose                            |
| ---------------- | ---------------------------------- |
| HTML5            | Structure of the webpage           |
| CSS3             | Styling and layout                 |
| JavaScript (ES6) | Interactivity and DOM manipulation |

---

## Project Structure

```text
project_3_JSwebsite/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Implementation Details

### Phase 1 – Input (Sensory Receptors)

The webpage captures user actions through interactive elements such as:

* Dark Mode Button
* Registration Form
* Show Details Button

JavaScript uses `document.querySelector()` to identify and access these elements.

Example:

```javascript
const darkModeBtn = document.querySelector("#darkModeBtn");
```

---

### Phase 2 – Process (Wiring the Nerves)

Event listeners are attached to the selected elements.

Examples:

```javascript
darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
```

```javascript
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
});
```

The event listeners detect user interactions and execute the corresponding logic.

---

### Phase 3 – Output (The Mutation)

The webpage responds dynamically to user actions by:

* Changing the theme color.
* Displaying a personalized success message.
* Showing or hiding course details.

All updates occur instantly through DOM manipulation.

---

## How to Run the Project

### Method 1: Open Directly

1. Download or clone the repository.
2. Open the project folder.
3. Double-click `index.html`.

### Method 2: Using VS Code

1. Open the project folder in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

---

## Expected Output

* A clean and interactive student portal webpage.
* Users can toggle dark mode.
* Registration messages appear instantly after form submission.
* Course details can be shown or hidden dynamically.

---

## Learning Outcomes

Through this project, the following concepts were practiced:

* HTML page structure
* CSS styling techniques
* JavaScript event handling
* DOM manipulation
* Form processing
* Interactive web design
* Client-side programming

---

## Future Enhancements

Possible improvements include:

* Form validation with error messages.
* Saving user data using Local Storage.
* Responsive design for mobile devices.
* Multiple course registration options.
* Animated transitions and effects.

---

## Conclusion

The Interactive Student Portal successfully demonstrates how JavaScript can transform a static webpage into an interactive application. By combining HTML, CSS, and JavaScript, the project provides real-time user interaction through event handling and dynamic DOM updates, fulfilling all assignment requirements.
