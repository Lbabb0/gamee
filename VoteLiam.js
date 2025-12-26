// Function to toggle theme
var toggleTheme = function() {
    // Get the current body or main element
    var body = document.body;
    
    // Check if dark-theme is already applied
    if (body.classList.contains("dark-theme")) {
        // Switch to light theme
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
    } else {
        // Switch to dark theme
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    }
};

// Add an event listener to the theme toggle button
var themeToggleButton = document.getElementById("theme-toggle");
if (themeToggleButton) {
    themeToggleButton.addEventListener("click", toggleTheme);
}

// Maintain theme between page reloads
window.onload = function() {
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.add("light-theme");
    }
};
