// chapter_19_Promise/05_dom_pyramid.js

// The DOM pyramid helps us understand how web pages are built.
// DOM stands for Document Object Model.
// It is like a tree where the top is the whole page and the bottom is the small pieces.

// Imagine a house:
// - The roof is the whole web page (document).
// - The rooms are sections like header, main, and footer.
// - The furniture is the small things like buttons, text, and images.

// In the DOM pyramid:
// 1. The top is the document (the whole web page).
// 2. The middle is the elements or tags like <div>, <p>, <button>.
// 3. The bottom is the text, links, and tiny details inside those elements.

// The DOM pyramid means:
// - Start from the top (page) and go down to find the pieces.
// - Each element can have children inside it.
// - You can change the page by changing the top, middle, or bottom pieces.

// Example HTML structure:
// document
//   ├─ html
//   │   ├─ head
//   │   └─ body
//   │       ├─ h1
//   │       └─ p
//
// The DOM pyramid helps programmers know where to look when they use JavaScript.
// If you want to change text, you find the right element lower in the pyramid.
// If you want to add a new button, you choose the right parent element and put it there.

// This file is added under chapter_19_Promise to explain the DOM pyramid concept.
