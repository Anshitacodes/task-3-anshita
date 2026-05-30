// ==========================================
// Phase 1: Sensory Receptors (Selecting Nodes)
// ==========================================
const darkModeBtn = document.querySelector("#darkModeBtn");
const registrationForm = document.querySelector("#registrationForm");
const studentName = document.querySelector("#studentName");
const message = document.querySelector("#message");
const showBtn = document.querySelector("#showBtn");
const details = document.querySelector("#details");

// ==========================================
// Phase 2 & 3: Process & Output Logic
// ==========================================

// 1. Dark Mode Toggle Module
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// 2. Form Registration Module
registrationForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop page reload

    // Trim whitespace to protect data integrity
    const cleanedName = studentName.value.trim();

    if (cleanedName === "") {
        message.style.color = "#d32f2f";
        message.textContent = "Please enter a valid name.";
        return;
    }

    // Dynamic Mutation
    message.style.color = document.body.classList.contains("dark-mode") ? "#81c784" : "#2e7d32";
    message.textContent = `Registration successful! Welcome, ${cleanedName}.`;

    // Clear the input viewport
    studentName.value = "";
});

// 3. Toggle Visibility Module (Refactored using .toggle)
showBtn.addEventListener("click", () => {
    const isHidden = details.classList.toggle("hidden");
    showBtn.textContent = isHidden ? "Show Details" : "Hide Details";
});