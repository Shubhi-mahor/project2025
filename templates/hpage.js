document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Testimonial slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    // Function to show a specific slide
    function showSlide(n) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Set the current slide index
        currentSlide = (n + totalSlides) % totalSlides;
        
        // Add active class to current slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Event listeners for next and previous buttons
    document.querySelector('.next-btn').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    document.querySelector('.prev-btn').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    // Event listeners for dot indicators
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);

    // Handle the button redirection for register button
    const anchorElements = document.querySelectorAll('a[href="#register"]');
    anchorElements.forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'signup.html'; // Replace with your form URL
        });
    });
    
    // Handle the register button click directly (as backup)
    const registerButton = document.getElementById('navregisterBtn');
    if (registerButton) {
        registerButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'signup.html'; // Replace with your form URL
        });
    }

    // Handle login button click - now redirects to a separate login page
    const loginButton = document.getElementById('navLoginBtn');
    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'login.html'; // Replace with your login form URL
        });
    }
});