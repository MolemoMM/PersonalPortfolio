// Sophisticated Animated Background System
class AnimatedBackground {
    constructor() {
        this.particles = [];
        this.maxParticles = 50;
        this.animationFrame = null;
        this.init();
    }

    init() {
        this.createBackgroundContainer();
        this.generateParticles();
        this.generateGeometricShapes();
        this.generateConstellations();
        this.generateOrbs();
        this.startAnimation();
        this.addInteractiveEffects();
    }

    createBackgroundContainer() {
        // Use existing animated background container from HTML instead of creating new one
        this.container = document.querySelector('.animated-bg');
        if (!this.container) {
            // Create main animated background container only if it doesn't exist
            const animatedBg = document.createElement('div');
            animatedBg.className = 'animated-bg';
            document.body.insertBefore(animatedBg, document.body.firstChild);
            this.container = animatedBg;
        }
    }

    generateParticles() {
        // Generate floating particles
        for (let i = 0; i < this.maxParticles; i++) {
            this.createParticle(i);
        }
    }

    createParticle(index) {
        const particle = document.createElement('div');
        particle.className = `particle particle-${(index % 5) + 1}`;
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (20 + Math.random() * 15) + 's';
        
        this.container.appendChild(particle);
        this.particles.push(particle);
    }

    generateGeometricShapes() {
        // Create geometric shapes
        for (let i = 1; i <= 3; i++) {
            const shape = document.createElement('div');
            shape.className = `geometric-shape shape-${i}`;
            this.container.appendChild(shape);
        }
    }

    generateConstellations() {
        // Create twinkling constellation points
        for (let i = 0; i < 20; i++) {
            const star = document.createElement('div');
            star.className = 'constellation';
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            this.container.appendChild(star);
        }
    }

    generateOrbs() {
        // Create floating gradient orbs
        for (let i = 1; i <= 3; i++) {
            const orb = document.createElement('div');
            orb.className = `gradient-orb orb-${i}`;
            this.container.appendChild(orb);
        }

        // Create wave elements
        for (let i = 1; i <= 3; i++) {
            const wave = document.createElement('div');
            wave.className = `wave wave-${i}`;
            this.container.appendChild(wave);
        }
    }

    addInteractiveEffects() {
        // Mouse move interaction
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            // Move orbs based on mouse position
            const orbs = document.querySelectorAll('.gradient-orb');
            orbs.forEach((orb, index) => {
                const intensity = (index + 1) * 0.02;
                const translateX = (mouseX - 0.5) * 50 * intensity;
                const translateY = (mouseY - 0.5) * 50 * intensity;
                orb.style.transform += ` translate(${translateX}px, ${translateY}px)`;
            });
        });

        // Scroll-based particle effects
        window.addEventListener('scroll', () => {
            const scrollProgress = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
            
            // Adjust particle opacity based on scroll
            this.particles.forEach((particle, index) => {
                const opacity = 0.7 + Math.sin(scrollProgress * Math.PI + index) * 0.3;
                particle.style.opacity = Math.max(0.1, opacity);
            });
        });
    }

    startAnimation() {
        // Additional dynamic animations
        this.animateParticles();
    }

    animateParticles() {
        // Create new particles periodically
        setInterval(() => {
            if (this.particles.length < this.maxParticles * 2) {
                this.createParticle(this.particles.length);
            }
        }, 3000);

        // Remove old particles
        setInterval(() => {
            if (this.particles.length > this.maxParticles) {
                const oldParticle = this.particles.shift();
                if (oldParticle && oldParticle.parentNode) {
                    oldParticle.parentNode.removeChild(oldParticle);
                }
            }
        }, 5000);
    }
}

// Initialize the animated background
document.addEventListener('DOMContentLoaded', () => {
    new AnimatedBackground();
});

// Enhanced particle interaction on click
document.addEventListener('click', (e) => {
    createClickEffect(e.clientX, e.clientY);
});

function createClickEffect(x, y) {
    // Create ripple effect on click
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'radial-gradient(circle, rgba(99, 102, 241, 0.8), transparent)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '999';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.animation = 'ripple-effect 0.8s ease-out forwards';
    
    document.body.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 800);
}

// Add ripple effect CSS
const rippleCSS = document.createElement('style');
rippleCSS.textContent = `
    @keyframes ripple-effect {
        0% {
            width: 10px;
            height: 10px;
            opacity: 1;
        }
        100% {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleCSS);

const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

// Enhanced mobile menu functionality
function closeMobileMenu() {
    if (menu && menulist) {
        menu.classList.remove('bx-x');
        menulist.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

function toggleMobileMenu() {
    if (menu && menulist) {
        menu.classList.toggle('bx-x');
        menulist.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }
}

// Close mobile menu when clicking on menu items
document.querySelectorAll('.menulist a').forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Toggle mobile menu on icon click
if (menu) {
    menu.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (menulist && menulist.classList.contains('active')) {
        if (!menulist.contains(e.target) && !menu.contains(e.target)) {
            closeMobileMenu();
        }
    }
});

// Close mobile menu when window resizes
window.addEventListener('resize', () => {
    if (window.innerWidth > 968) {
        closeMobileMenu();
    }
});

// Close mobile menu on scroll (with debounce)
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (menulist && menulist.classList.contains('active')) {
            closeMobileMenu();
        }
    }, 100);
});

// Handle escape key to close mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menulist && menulist.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Prevent body scroll when mobile menu is open
const preventBodyScroll = () => {
    if (document.body.classList.contains('menu-open')) {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.width = '100%';
    } else {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
};

// Observer for menu state changes
const menuObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (document.body.classList.contains('menu-open')) {
                preventBodyScroll();
            } else {
                preventBodyScroll();
            }
        }
    });
});

// Start observing body class changes
menuObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
});

var typed = new Typed(".input",{
    strings:[
        "Practicing DevOps."
    ],
    typeSpeed:120,
    backSpeed: 70,
    loop: true

});

 document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.service_card');
            card.querySelector('.more-text').style.display = 'inline';
            button.style.display = 'none';
            card.querySelector('.show-less-btn').style.display = 'inline';
        });
    });

    document.querySelectorAll('.show-less-btn').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.service_card');
            card.querySelector('.more-text').style.display = 'none';
            button.style.display = 'none';
            card.querySelector('.read-more-btn').style.display = 'inline';
        });
    });

/* chatbot */
document.addEventListener('DOMContentLoaded', function() {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbot = document.getElementById('chatbot');
    const closeChatbot = document.getElementById('close-chatbot');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const sendChatbot = document.getElementById('send-chatbot');
    const clearChatbot = document.getElementById('clear-chatbot'); // New clear button
    let chatStarted = false;

    // Predefined responses
    const responses = [
        { keywords: ['hello', 'hi', 'helo', 'sho','awe', 'hy'], answer: 'Hi there! How can I help you today?' },
        { keywords: ['how are you'], answer: 'I am just a bot, but I am doing great! How about you?' },
        { keywords: ['name'], answer: 'I am your friendly bot Ravyn.' },
        { keywords: ['personal'], answer: 'Molemo is originally from Vanderbijlpark,Gauteng studied at Suncrest High School and loves pizza' },
        { keywords: ['location'], answer: 'He Originates from vanderbijlpark, Gauteng but currently resides in Johannesburg, Gauteng.'},
        { keywords: ['contact'], answer: 'You can get in touch with Molemo by reaching him through Contact details: 064 315 6461 or Email Address: mamashelamolemo@gmail.com or navigate to the Contact Page for more information' },
        { keywords: ['about page', 'about'], answer: 'Molemo Mamashela is an aspiring software engineer from Johannesburg, Gauteng, with a passion for solving complex problems and creating innovative solutions through technology. Excited by the process of building systems from scratch. You can find out more about him by going through the About Page.' },
        { keywords: ['profile'], answer: 'This is Molemo Mamashela\'s Personal Portfolio showcasing his skills, experience, and projects. It serves as an online resume, allowing visitors to get a deeper understanding of who he is and what he can do. The portfolio includes a Home, About Me, Services, Portfolio, and Contact Page.' },
        { keywords: ['Services'], answer: 'The Main Services that Molemo provides are Web Development, Mobile Development, and Backend Development. Extra services that he provides outside coding are IT Support. For more information, please turn to the Services Page.' },
        { keywords: ['Project','projects'], answer: 'No projects have been published yet, but I can assure you, you will be contacted once they have been. Just fill the form on the contact page ;)' },
        { keywords: ['skills', 'skill'], answer: 'Molemo has skills in various programming languages including JavaScript, C#, and Java. He is also proficient in frameworks such as Node.js, Firebase, and Django.' },
        { keywords: ['experience', 'work'], answer: 'Molemo currently works at Capaciti as "DevOps Candidate" for The Company "Wipro" of which both are established companies.' },
        { keywords: ['education', 'study'], answer: 'Molemo holds a National Diploma In Information Technology from the Centarl University of Technology. He has also completed online courses to further enhance his skills such as Cyber Threat Management.' },
        { keywords: ['hobbies'], answer: 'In his free time, Molemo enjoys coding, watching football. He is also an avid traveler and loves exploring new places.' },
        { keywords: ['LinkedIn',], answer: 'You can connect with Molemo on LinkedIn: http://www.linkedin.com/in/molemomamashela-19073624' },
        { keywords: ['GitHub'], answer: 'You can follow Molemo on GitHub: https://github.com/MolemoMM/MolemoMM' },
        { keywords: ['availability','available'], answer: 'Molemo is currently available for new projects and consultations. Feel free to reach out through the Contact Page.' },
        { keywords: ['languages'], answer: 'Molemo speaks English and Sesotho fluently.' },
        { keywords: ['CV'], answer: 'You can download Molemo\'s resume from the Resume Page to get a detailed overview of his skills, experience, and education.' },
        { keywords: ['certifications'], answer: 'Molemo has earned certifications in web development, mobile development, and cloud computing. You can find more details on the Certifications Page.' },
        { keywords: ['partnerships'], answer: 'Molemo is open to partnerships and collaborations. If you have a project in mind, reach out through the Contact Page.' },
        { keywords: ['support'], answer: 'If you need support or have any questions, feel free to reach out through the Contact Page..' }
    ];

    // Show the chatbot when the button is clicked
    chatbotButton.addEventListener('click', function() {
        chatbot.classList.add('active');
        chatbotButton.style.display = 'none';
        showGreeting();
    });

    // Close the chatbot
    closeChatbot.addEventListener('click', function() {
        chatbot.classList.remove('active');
        chatbotButton.style.display = 'flex';
    });

    // Clear chat history
    clearChatbot.addEventListener('click', function() {
        chatbotMessages.innerHTML = '';
        chatStarted = false;
        showGreeting();
    });

    // Show greeting animation
    function showGreeting() {
        const greetingElement = document.createElement('div');
        greetingElement.classList.add('message', 'bot', 'greeting');
        greetingElement.innerHTML = '👋 Hello! I\'m Ravyn, Molemo\'s AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?';
        chatbotMessages.appendChild(greetingElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Send a message
    function sendMessage() {
        const message = chatbotInput.value;
        if (message.trim() !== '') {
            if (!chatStarted) {
                removeGreeting();
                chatStarted = true;
            }
            addMessage('You', message);
            chatbotInput.value = '';

            // Show thinking indicator
            const thinkingIndicator = document.createElement('div');
            thinkingIndicator.classList.add('typing-indicator');
            thinkingIndicator.innerHTML = '<div class="typing-dots"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
            chatbotMessages.appendChild(thinkingIndicator);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

            // Simulate a response from the chatbot
            setTimeout(function() {
                const response = getChatbotResponse(message);
                chatbotMessages.removeChild(thinkingIndicator);
                addMessage('<i class="ri-robot-2-line"></i>', response);
            }, 1000);
        }
    }

    sendChatbot.addEventListener('click', sendMessage);

    // Send message on Enter key press
    chatbotInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Add a message to the chat
    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        
        // Add appropriate class based on sender
        if (sender === 'You') {
            messageElement.classList.add('user');
            messageElement.innerHTML = `${message}`;
        } else {
            messageElement.classList.add('bot');
            messageElement.innerHTML = `${message}`;
        }
        
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Remove greeting message
    function removeGreeting() {
        const greetingElement = document.querySelector('.greeting');
        if (greetingElement) {
            chatbotMessages.removeChild(greetingElement);
        }
    }

    // Generate a response from the chatbot
    function getChatbotResponse(message) {
        const lowerCaseMessage = message.toLowerCase();
        for (const response of responses) {
            for (const keyword of response.keywords) {
                if (lowerCaseMessage.includes(keyword.toLowerCase())) {
                    return response.answer;
                }
            }
        }
        // Check if the message is a math problem
        const processedMessage = preprocessMathMessage(lowerCaseMessage);
        if (isMathProblem(processedMessage)) {
            return solveMathProblem(processedMessage);
        }
        return 'I am not sure how to respond to that.';
    }

    // Function to preprocess the math message
    function preprocessMathMessage(message) {
        return message
            .replace(/add/g, '+')
            .replace(/subtract/g, '-')
            .replace(/divide/g, '/')
            .replace(/multiply/g, '*');
    }

    // Function to check if the message is a math problem
    function isMathProblem(message) {
        try {
            math.evaluate(message);
            return true;
        } catch (error) {
            return false;
        }
    }

    // Function to solve a math problem
    function solveMathProblem(message) {
        try {
            const result = math.evaluate(message);
            return `The answer is ${result}`;
        } catch (error) {
            return 'I am not sure how to solve that math problem.';
        }
    }

    // Function to add new responses
    function addChatbotResponse(keywords, answer) {
        responses.push({ keywords: keywords.map(keyword => keyword.toLowerCase()), answer: answer });
    }

  
   
});

// ===== ENHANCED INTERACTIVE EFFECTS FOR ANIMATED BACKGROUND =====

// Dynamic background interaction based on mouse movement
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Move floating shapes based on mouse position
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const xMove = (mouseX - 0.5) * speed * 20;
        const yMove = (mouseY - 0.5) * speed * 20;
        
        shape.style.transform = `translate(${xMove}px, ${yMove}px) rotate(${mouseX * 360}deg)`;
    });
    
    // Move gradient orbs based on mouse position
    const orbs = document.querySelectorAll('.orb');
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.3;
        const xMove = (mouseX - 0.5) * speed * 15;
        const yMove = (mouseY - 0.5) * speed * 15;
        
        orb.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// Parallax scroll effect for background elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.shape, .orb');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform += ` translateY(${yPos}px)`;
    });
    
    // Animate mesh gradient based on scroll
    const meshGradient = document.querySelector('.mesh-gradient');
    if (meshGradient) {
        const scrollPercent = scrolled / (document.body.scrollHeight - window.innerHeight);
        meshGradient.style.transform = `rotate(${scrollPercent * 360}deg) scale(${1 + scrollPercent * 0.2})`;
    }
});

// Enhanced intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Add stagger animation to child elements
            const children = entry.target.querySelectorAll('.service_card, .row, .skill-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.animation = `slideInUp 0.6s ease forwards`;
                    child.style.animationDelay = `${index * 0.1}s`;
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe sections for animations
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// Enhanced smooth scrolling with easing
function smoothScrollTo(element) {
    const targetPosition = element.offsetTop - 70;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function
        const ease = 0.5 - Math.cos(percentage * Math.PI) / 2;
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }
    
    window.requestAnimationFrame(step);
}

// Enhanced navigation click handling
document.querySelectorAll('.menulist a, .menulist2 a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            smoothScrollTo(targetElement);
        }
    });
});

// Dynamic particle generation
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'dynamic-particle';
    particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: rgba(199, 198, 222, 0.8);
        border-radius: 50%;
        pointer-events: none;
        animation: particleFade 4s linear forwards;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    document.querySelector('.particle-field').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 4000);
}

// Generate particles periodically
setInterval(createParticle, 2000);

// Enhanced form interactions
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'scale(1.02)';
        input.parentElement.style.boxShadow = '0 8px 25px rgba(150, 32, 16, 0.2)';
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'scale(1)';
        input.parentElement.style.boxShadow = 'none';
    });
});

// Enhanced button click effects
document.querySelectorAll('.btn1, .btn2, .menu-btn, .submit-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Enhanced scroll-based background color changes - DISABLED to show animated background
window.addEventListener('scroll', () => {
    const scrollPercent = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
    const mainContent = document.querySelector('.main-content');
    
    if (mainContent) {
        const opacity = 0.85 + (scrollPercent * 0.1);
        // mainContent.style.background = `rgba(18, 18, 18, ${Math.min(opacity, 0.95)})`;
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    // Scroll-based animations
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = scrolled * speed;
        shape.style.transform += ` translateY(${yPos}px)`;
    });
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// Add CSS animations for new effects
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes particleFade {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0);
        }
        10% {
            opacity: 1;
            transform: translateY(-10px) scale(1);
        }
        90% {
            opacity: 1;
            transform: translateY(-80px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0);
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: slideInUp 0.8s ease forwards;
    }
    
    .dynamic-particle {
        z-index: 0;
    }
`;

document.head.appendChild(additionalStyles);

// Initialize enhanced features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add loading effect
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, var(--bg-color), var(--second-bg-color));
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.5s ease;
    `;
    
    loadingOverlay.innerHTML = `
        <div style="text-align: center; color: var(--text-color);">
            <div style="width: 50px; height: 50px; border: 3px solid rgba(150, 32, 16, 0.3); border-top: 3px solid var(--main-color); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
            <p style="font-size: 18px; font-weight: 500;">Loading Amazing Experience...</p>
        </div>
    `;
    
    document.body.appendChild(loadingOverlay);
    
    // Remove loading overlay after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.remove();
            }, 500);
        }, 1000);
    });
});

// Mobile-specific enhancements
function initializeMobileEnhancements() {
    // Add viewport height fix for mobile browsers
    function setVhProperty() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVhProperty();
    window.addEventListener('resize', setVhProperty);
    window.addEventListener('orientationchange', () => {
        setTimeout(setVhProperty, 100);
    });
    
    // Improve touch scrolling on iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        document.body.style.webkitOverflowScrolling = 'touch';
    }
    
    // Prevent zoom on input focus for iOS
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.fontSize = '16px';
        });
    });
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle mobile menu better
    if (window.innerWidth <= 968) {
        // Ensure menu icon is visible
        if (menu) {
            menu.style.display = 'block';
        }
        
        // Add touch event handling
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            // Swipe left to close menu if it's open
            if (diff > swipeThreshold && menulist && menulist.classList.contains('active')) {
                closeMobileMenu();
            }
        }
    }
}

// Initialize mobile enhancements when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMobileEnhancements);
} else {
    initializeMobileEnhancements();
}

// ===== END ENHANCED INTERACTIVE EFFECTS =====
