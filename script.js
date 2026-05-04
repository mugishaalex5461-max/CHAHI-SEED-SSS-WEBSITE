// Event carousel functionality
function showEvent(index) {
    const cards = document.querySelectorAll('.event-card');
    const dots = document.querySelectorAll('.dot');
    if (!cards.length) {
        return;
    }
    
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (cards[index]) {
        cards[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

// Auto-rotate carousel every 5 seconds
let currentEvent = 0;
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.event-card');
    if (cards.length > 0) {
        setInterval(() => {
            currentEvent = (currentEvent + 1) % cards.length;
            showEvent(currentEvent);
        }, 5000);
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});

function createQuickActions() {
    if (document.getElementById('quickActions')) {
        return;
    }

    const quickActions = document.createElement('div');
    quickActions.id = 'quickActions';
    quickActions.innerHTML = `
        <a class="quick-action quick-action-location" href="https://www.google.com/maps/search/?api=1&query=Kisoro+District+Mount+Muhabura+Uganda" target="_blank" rel="noopener noreferrer" aria-label="Open school location in Google Maps">
            <i class="fas fa-location-dot"></i>
            <span>Location</span>
        </a>
        <a class="quick-action quick-action-call" href="tel:+256782797037" aria-label="Call the head teacher">
            <i class="fas fa-phone"></i>
            <span>Call</span>
        </a>
        <a class="quick-action quick-action-whatsapp" href="https://wa.me/256782797037?text=Hello%20CHAHI%20SEED%20SECONDARY%20SCHOOL" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <i class="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
        </a>
    `;

    document.body.appendChild(quickActions);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav links based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Form validation helper
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;
    
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

// Scroll to top button
function createScrollToTopButton() {
    const button = document.createElement('div');
    button.id = 'scrollToTop';
    button.innerHTML = '<i class="fas fa-chevron-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color, #1a5f8e);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 999;
        opacity: 0;
        transition: opacity 0.3s;
    `;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(button);
}

document.addEventListener('DOMContentLoaded', createScrollToTopButton);
document.addEventListener('DOMContentLoaded', createQuickActions);
