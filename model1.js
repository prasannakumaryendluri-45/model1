// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to add a class when scrolled
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled'); // Add scrolled class when user scrolls down
    } else {
        navbar.classList.remove('scrolled'); // Remove scrolled class when at the top
    }
};

// Hover effect for menu items
const menuItems = document.querySelectorAll('.navbar ul li a');

menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.color = '#ff6347'; // Change color on hover
    });

    item.addEventListener('mouseout', function() {
        this.style.color = ''; // Reset color when hover ends
    });
});
s