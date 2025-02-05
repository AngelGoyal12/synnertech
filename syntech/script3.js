document.addEventListener('DOMContentLoaded', () => {
    // Data
    const features = [
        { icon: '✓', text: 'Budgeting Tools' },
        { icon: '✓', text: 'Investment Tips' },
        { icon: '✓', text: 'Debt Management' }
    ];

    const pricingPlans = [
        {
            name: 'Basic Free',
            price: 'Free',
            period: 'For personal use only',
            features: ['Budgeting', 'Saving Tips', 'Investing 101'],
            buttonText: 'Get Started',
            icon: '★'
        },
        {
            name: 'Advanced',
            price: '$8',
            period: '$15/month',
            features: ['Debt Advice', 'Investment Plans', 'Tax Tips', 'Retirement'],
            buttonText: 'Subscribe Now',
            icon: '⚡'
        },
        {
            name: 'Teams',
            price: '$16',
            period: '$45/month',
            features: ['Collaborative', 'Workshops', 'Onboarding support', 'Reports', 'Custom Plans'],
            buttonText: 'Get Started',
            icon: '✨'
        },
        {
            name: 'Custom Pricing',
            price: 'Custom',
            period: 'For large organizations',
            features: ['Full Access', 'Dedicated Support', 'Custom Solutions', 'Training', 'Workshops', 'Reports'],
            buttonText: 'Contact Us',
            icon: '❤'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Investment Manager',
            content: 'This platform has revolutionized my understanding of financial management and investment strategies. Highly recommend!'
        },
        {
            name: 'James Lee',
            role: 'Entrepreneur',
            content: 'The financial literacy courses here helped me launch my business successfully. A must for any aspiring entrepreneur.'
        },
        {
            name: 'Emily Davis',
            role: 'Student',
            content: 'I learned how to manage my student loans and save for the future. These skills are invaluable.'
        },
        {
            name: 'Michael Smith',
            role: 'Professional',
            content: 'The insights I gained have improved my budgeting and investment decisions immensely. Fantastic resource!'
        }
    ];

    const faqs = [
        {
            question: 'What is financial literacy?',
            answer: 'Financial literacy refers to the knowledge and understanding of various financial areas including budgeting, investing, and managing debt effectively.'
        },
        {
            question: 'Why is financial literacy important?',
            answer: 'Financial literacy is crucial as it equips individuals with the knowledge to make informed and effective financial decisions, reducing the risk of financial stress and increasing economic stability.'
        },
        {
            question: 'How can I improve my financial literacy?',
            answer: 'Improving financial literacy involves educating oneself about financial concepts through courses, books, and online resources, and practicing good financial habits like budgeting and saving.'
        }
    ];

    // Render Functions
    function renderFeatures() {
        const featureList = document.getElementById('feature-list');
        if (!featureList) return;

        featureList.innerHTML = features.map(feature => `
            <div class="feature-item">
                <span class="feature-icon">${feature.icon}</span>
                <span>${feature.text}</span>
            </div>
        `).join('');
    }

    function renderPricing() {
        const pricingGrid = document.getElementById('pricing-grid');
        if (!pricingGrid) return;

        pricingGrid.innerHTML = pricingPlans.map(plan => `
            <div class="pricing-card">
                <div class="pricing-icon">${plan.icon}</div>
                <h3 class="plan-name">${plan.name}</h3>
                <div class="price">${plan.price}</div>
                <div class="period">${plan.period}</div>
                <ul class="features-list">
                    ${plan.features.map(feature => `
                        <li>${feature}</li>
                    `).join('')}
                </ul>
                <button class="cta-button">${plan.buttonText}</button>
            </div>
        `).join('');
    }

    function renderTestimonials() {
        const testimonialsGrid = document.getElementById('testimonials-grid'); // Correct ID
        if (!testimonialsGrid) return;

        testimonialsGrid.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-content">${testimonial.content}</div>
                <div class="testimonial-author">
                    <div class="author-name">${testimonial.name}</div>
                    <div class="author-role">${testimonial.role}</div>
                </div>
            </div>
        `).join('');
    }

    function renderFAQs() {
        const faqList = document.getElementById('faq-list'); // Correct ID
        if (!faqList) return;

        faqList.innerHTML = faqs.map((faq, index) => `
            <div class="faq-item" data-faq-id="${index}">
                <button class="faq-button">  ${faq.question}
                    <span class="faq-toggle">+</span>
                </button>
                <div class="faq-answer">${faq.answer}</div>
            </div>
        `).join('');

        // Add click handlers for FAQ toggles
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const button = item.querySelector('.faq-button');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');

            button.addEventListener('click', () => {
                answer.classList.toggle('active');
                toggle.textContent = answer.classList.contains('active') ? '−' : '+';
            });
        });
    }



    // Initialize all components
    function init() {
        renderFeatures();
        renderPricing();
        renderTestimonials();
        renderFAQs();
    }

    // Run initialization
    init();
});