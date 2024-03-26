// Add these lines at the beginning of your script to hide the "education" and "experiences" sections when the page loads
document.getElementById("education").style.display = "none";
document.getElementById("experiences").style.display = "none";

// Click events for buttons 
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");

const education = document.getElementById("education"); // Selecting the education element correctly
const experiences = document.getElementById("experiences"); // Selecting the experiences element correctly
const skillsBtn = document.getElementById("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
    portfolio.style.display = "flex"; // Displaying the portfolio element when the "Portfolio" button is clicked
    education.style.display = "none"; // Hiding the education element when the "Portfolio" button is clicked
    experiences.style.display = "none"; // Hiding the experiences element when the "Portfolio" button is clicked
    skillsBtn.classList.remove("active-btn");
    portfolioBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
    portfolio.style.display = "none";
    education.style.display = "flex"; // Displaying the education element when the "skills" button is clicked
    experiences.style.display = "flex"; // Displaying the experiences element when the "skills" button is clicked
    portfolioBtn.classList.remove("active-btn");
    skillsBtn.classList.add("active-btn");
});


