// Dark Mode Toggle Function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Save the dark mode preference in localStorage
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

// Apply dark mode preference on page load
document.addEventListener("DOMContentLoaded", () => {
    // Check localStorage for dark mode preference
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Add event listeners to sidebar links for smooth scrolling
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Helper function to scroll to top smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listener for the "scroll to top" button (if added)
const scrollToTopButton = document.getElementById('scrollToTopButton');
if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', scrollToTop);
}
