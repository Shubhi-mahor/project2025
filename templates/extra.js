// Career data stored in a separate file or section
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
        crossStreamAdvantage: "Science students bring analytical skills, Arts students bring creativity and human understanding, Commerce students bring business perspective",
        pageUrl: "careers/ux-designer.html"
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
        crossStreamAdvantage: "Arts students bring communication skills, Commerce students bring business context, Science students bring technical aptitude",
        pageUrl: "careers/data-scientist.html"
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
        crossStreamAdvantage: "Science students bring analytical abilities, Arts students bring creativity, Commerce students bring market understanding",
        pageUrl: "careers/digital-marketing.html"
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
        crossStreamAdvantage: "Science students bring technical knowledge, Arts students bring user perspective, Commerce students bring business strategy",
        pageUrl: "careers/product-manager.html"
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
        crossStreamAdvantage: "Science students bring technical subject expertise, Arts students bring creativity, Commerce students bring business context",
        pageUrl: "careers/content-creator.html"
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
        crossStreamAdvantage: "Science students bring analytical rigor, Arts students bring communication skills, Commerce students bring financial fundamentals",
        pageUrl: "careers/financial-analyst.html"
    }
];

// Main application code
document.addEventListener('DOMContentLoaded', function() {
    // Career Explorer Filtering
    const streamButtons = document.querySelectorAll('.stream-button');
    const careersContainer = document.getElementById('careers-container');
    const careerDetails = document.getElementById('career-details');
    const backButton = document.getElementById('back-to-careers');

    // Fix: Update sliders to show correct value 1-10
    const sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(slider => {
        // Set initial value display
        const valueDisplay = slider.nextElementSibling;
        valueDisplay.textContent = slider.value;
        
        // Update value display when slider changes
        slider.addEventListener('input', function() {
            valueDisplay.textContent = this.value;
        });
    });

    // Function to render career cards
    function renderCareerCards(filteredData = careerData) {
        if (!careersContainer) return;
        
        careersContainer.innerHTML = '';
        
        filteredData.forEach(career => {
            const cardHTML = `
                <div class="career-card" data-id="${career.id}" data-streams="${career.streams.join(' ')}">
                    <div class="career-img" style="background-image: url('/api/placeholder/300/200');"></div>
                    <div class="career-content">
                        <h3><a href="#" class="career-title-link" data-page="${career.pageUrl}" data-id="${career.id}">${career.title}</a></h3>
                        <p>${career.description}</p>
                        <div class="career-tags">
                            ${career.tags.map(tag => `<span class="career-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
            careersContainer.innerHTML += cardHTML;
        });
        
        // Add event listeners for career title links
        document.querySelectorAll('.career-title-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Redirect to the career page
                const pageUrl = this.getAttribute('');
                window.location.href = pageUrl;
            });
        });
    }

    // Initial rendering of career cards
    renderCareerCards();

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

    // Career Card Click Event for the entire card
    document.addEventListener('click', function(e) {
        // We've already handled the title links with specific event listeners
        // This is for clicks on the rest of the card
        
        // Skip if we clicked on a link
        if (e.target.tagName === 'A') return;
        
        // Check if we clicked on a card
        const card = e.target.closest('.career-card');
        if (card) {
            const careerId = parseInt(card.getAttribute('data-id'));
            const career = careerData.find(c => c.id === careerId);
            if (career) {
                window.location.href = career.pageUrl;
            }
        }
    });

    // Form submission for career assessment
    const assessmentForm = document.getElementById('career-assessment');
    if (assessmentForm) {
        assessmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for completing the assessment! We will analyze your responses and provide personalized career recommendations.');
        });
    }
});