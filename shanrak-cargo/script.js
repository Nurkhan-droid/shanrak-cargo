// Navigation Scroll Effect
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Falling Snow Animation
function createSnowflake() {
    const snowContainer = document.getElementById('snowContainer');
    if (!snowContainer) return;
    
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + '%';
    const duration = Math.random() * 5 + 8 + 's';
    snowflake.style.animationDuration = duration;
    snowflake.style.opacity = Math.random() * 0.4 + 0.6;
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.animationDelay = Math.random() * 2 + 's';
    snowflake.style.animationTimingFunction = 'ease-in-out';
    
    snowContainer.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(duration) * 1000 + 1000);
}

// Create snowflakes continuously
function initSnow() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createSnowflake(), i * 300);
    }
    setInterval(createSnowflake, 400);
}

// Initialize snow when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSnow);
} else {
    initSnow();
}

// Console welcome message
console.log('%cSHANRAK KARGO', 'color: #FF6B35; font-size: 24px; font-weight: bold;');
console.log('%cДоставка товаров из Китая в Астану и по всему Казахстану', 'color: #666; font-size: 14px;');
console.log('%c🎄 С Новым Годом! 🎄', 'color: #FFD700; font-size: 16px; font-weight: bold;');
