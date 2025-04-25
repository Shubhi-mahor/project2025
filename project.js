const careerData = [
    {
        id: 1,
        title: "UX Designer",
        description: "Design interfaces and user experiences for digital products",
        fullDescription: "User Experience (UX) Designers create intuitive, accessible, and enjoyable digital experiences. They conduct user research, create wireframes and prototypes, and collaborate with developers to build products that meet user needs.",
        streams: ["arts", "science", "cross-stream"],
        tags: ["Creative", "Tech", "Design"],
        skills: ["Design thinking", "User research", "Prototyping", "Visual design", "Empathy"],
        education: [
            "Traditional: Design degree or HCI",
            "Alternative: Bootcamps, online courses, self-learning with portfolio"
        ],
        salary: "₹5-20 LPA depending on experience",
        growth: "High demand across industries",
        crossStreamAdvantage: "Science students bring analytical skills, Arts students bring creativity and human understanding, Commerce students bring business perspective"
    },
    {
        id: 2,
        title: "Data Scientist",
        description: "Analyze data to derive insights and solve business problems",
        fullDescription: "Data Scientists extract meaningful insights from complex data. They use statistical methods, machine learning, and programming to analyze data and help organizations make data-driven decisions.",
        streams: ["science", "commerce", "cross-stream"],
        tags: ["Analytical", "Tech", "Math"],
        skills: ["Programming (Python/R)", "Statistics", "Machine Learning", "Data visualization", "Problem-solving"],
        education: [
            "Traditional: Computer Science, Statistics, Mathematics",
            "Alternative: Data science bootcamps, online specializations"
        ],
        salary: "₹6-25 LPA depending on experience",
        growth: "Among the fastest-growing careers globally",
        crossStreamAdvantage: "Arts students bring communication skills, Commerce students bring business context, Science students bring technical aptitude"
    },
    {
        id: 3,
        title: "Digital Marketing Specialist",
        description: "Plan and execute online marketing campaigns",
        fullDescription: "Digital Marketing Specialists develop and implement marketing strategies across various digital channels. They manage social media, email campaigns, content marketing, and use analytics to measure performance.",
        streams: ["commerce", "arts", "cross-stream"],
        tags: ["Creative", "Analytics", "Communication"],
        skills: ["SEO/SEM", "Social media marketing", "Content creation", "Analytics", "Campaign management"],
        education: [
            "Traditional: Marketing, Communications, Business",
            "Alternative: Digital marketing certifications, hands-on experience"
        ],
        salary: "₹4-15 LPA depending on experience",
        growth: "Continuous growth with digital transformation",
        crossStreamAdvantage: "Science students bring analytical abilities, Arts students bring creativity, Commerce students bring market understanding"
    },
    {
        id: 4,
        title: "Product Manager",
        description: "Oversee product development from conception to launch",
        fullDescription: "Product Managers are responsible for guiding the success of a product. They define the product vision, gather requirements, work with design and development teams, and ensure the product meets market needs.",
        streams: ["commerce", "science", "cross-stream"],
        tags: ["Leadership", "Strategy", "Tech"],
        skills: ["Strategic thinking", "User empathy", "Communication", "Technical understanding", "Business acumen"],
        education: [
            "Traditional: Business, Engineering, Computer Science",
            "Alternative: Product management bootcamps, certifications"
        ],
        salary: "₹10-30 LPA depending on experience",
        growth: "High demand in tech and other industries",
        crossStreamAdvantage: "Science students bring technical knowledge, Arts students bring user perspective, Commerce students bring business strategy"
    },
    {
        id: 5,
        title: "Content Creator",
        description: "Produce engaging content for various platforms",
        fullDescription: "Content Creators develop written, visual, or video content for websites, social media, and other platforms. They craft compelling narratives that engage audiences and support brand messaging.",
        streams: ["arts", "commerce", "cross-stream"],
        tags: ["Creative", "Communication", "Media"],
        skills: ["Writing", "Storytelling", "Visual design", "Video editing", "Social media"],
        education: [
            "Traditional: Journalism, English, Communications",
            "Alternative: Portfolio-based, self-learning"
        ],
        salary: "₹3-15 LPA depending on experience",
        growth: "Growing demand with content marketing expansion",
        crossStreamAdvantage: "Science students bring technical subject expertise, Arts students bring creativity, Commerce students bring business context"
    },
    {
        id: 6,
        title: "Financial Analyst",
        description: "Analyze financial data to guide business decisions",
        fullDescription: "Financial Analysts examine financial data to help companies make investment decisions. They assess financial performance, forecast future trends, and provide recommendations to management.",
        streams: ["commerce", "science", "cross-stream"],
        tags: ["Analytical", "Finance", "Business"],
        skills: ["Financial modeling", "Data analysis", "Forecasting", "Business understanding", "Communication"],
        education: [
            "Traditional: Finance, Economics, Accounting",
            "Alternative: Financial certifications, online courses"
        ],
        salary: "₹5-20 LPA depending on experience",
        growth: "Steady demand across industries",
        crossStreamAdvantage: "Science students bring analytical rigor, Arts students bring communication skills, Commerce students bring financial fundamentals"
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Career Explorer Filtering
    const streamButtons = document.querySelectorAll('.stream-button');
    const careerCards = document.querySelectorAll('.career-card');
    const careersContainer = document.getElementById('careers-container');
    
    // Clear existing cards and populate with data
    if (careersContainer) {
        careersContainer.innerHTML = '';
        
        careerData.forEach(career => {
            const cardHTML = `
                <div class="career-card" data-id="${career.id}" data-streams="${career.streams.join(' ')}">
                    <div class="career-img" style="background-image: url('https://via.placeholder.com/300x200');"></div>
                    <div class="career-content">
                        <h3>${career.title}</h3>
                        <p>${career.description}</p>
                        <div class="career-tags">
                            ${career.tags.map(tag => `<span class="career-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
            careersContainer.innerHTML += cardHTML;
        });
    }
    
    // Add click event to all stream buttons
    streamButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            streamButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the stream value
            const stream = this.getAttribute('data-stream');
            
            // Filter career cards
            const updatedCards = document.querySelectorAll('.career-card');
            updatedCards.forEach(card => {
                if (stream === 'all' || card.getAttribute('data-streams').includes(stream)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Career Modal
    const modal = document.getElementById('career-modal');
    const closeModal = document.querySelector('.close-modal');
    const careerDetailsContainer = document.getElementById('career-details-container');
    
    // Add click event to all career cards
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.career-card');
        if (card) {
            const careerId = parseInt(card.getAttribute('data-id'));
            const career = careerData.find(c => c.id === careerId);
            
            if (career && careerDetailsContainer) {
                careerDetailsContainer.innerHTML = `
                    <div class="career-header">
                        <h2 class="career-title">${career.title}</h2>
                        <p class="career-subtitle">${career.description}</p>
                        <div class="career-tag-list">
                            ${career.tags.map(tag => `<span class="career-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="career-body">
                        <div class="career-section">
                            <h3>About This Career</h3>
                            <p>${career.fullDescription}</p>
                        </div>
                        <div class="career-section">
                            <h3>Skills Required</h3>
                            <ul>
                                ${career.skills.map(skill => `<li>${skill}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="career-section">
                            <h3>Education Pathways</h3>
                            <ul>
                                ${career.education.map(edu => `<li>${edu}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="career-section">
                            <h3>Salary Range</h3>
                            <p>${career.salary}</p>
                        </div>
                        <div class="career-section">
                            <h3>Growth Potential</h3>
                            <p>${career.growth}</p>
                        </div>
                        <div class="career-section">
                            <h3>Cross-Stream Advantage</h3>
                            <p>${career.crossStreamAdvantage}</p>
                        </div>
                    </div>
                `;
                
                modal.style.display = 'block';
            }
        }
    });
    
    // Close modal when clicking the close button
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Testimonial Slider
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.slider-control.prev');
    const nextButton = document.querySelector('.slider-control.next');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
        
        nextButton.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    }
    
    // Slider values update
    const sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(slider => {
        const valueDisplay = slider.nextElementSibling;
        
        slider.addEventListener('input', function() {
            if (valueDisplay) {
                valueDisplay.textContent = this.value;
            }
        });
    });
    
    // Form submission
    const assessmentForm = document.getElementById('career-assessment');
    if (assessmentForm) {
        assessmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const stream = document.getElementById('stream').value;
            const creative = parseInt(document.getElementById('creative').value);
            const analytical = parseInt(document.getElementById('analytical').value);
            const technical = parseInt(document.getElementById('technical').value);
            const social = parseInt(document.getElementById('social').value);
            const business = parseInt(document.getElementById('business').value);
            
            // Simple recommendation algorithm
            let recommendedCareers = [];
            
            if (creative >= 7) {
                recommendedCareers.push("UX Designer", "Content Creator");
            }
            
            if (analytical >= 7) {
                recommendedCareers.push("Data Scientist", "Financial Analyst");
            }
            
            if (technical >= 7) {
                recommendedCareers.push("Data Scientist", "UX Designer");
            }
            
            if (social >= 7) {
                recommendedCareers.push("Digital Marketing Specialist", "Content Creator");
            }
            
            if (business >= 7) {
                recommendedCareers.push("Product Manager", "Financial Analyst");
            }
            
            // Remove duplicates
            recommendedCareers = [...new Set(recommendedCareers)];
            
            // Display results (in a real application, this would be more sophisticated)
            alert(`Thank you, ${name}! Based on your preferences, we recommend exploring these careers: ${recommendedCareers.join(', ')}. We've sent detailed information to ${email}.`);
            
            // Reset form
            assessmentForm.reset();
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('inquiry-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            
            // Display confirmation
            alert(`Thank you, ${name}! We've received your message and will get back to you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
});