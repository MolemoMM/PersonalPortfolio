const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    menulist.classList.remove('open');

};

var typed = new Typed(".input",{
    strings:[
        "Backend Developer.","Mobile Developer."
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
        chatbot.style.display = 'flex';
        chatbotButton.style.display = 'none';
        showGreeting();
    });

    // Close the chatbot
    closeChatbot.addEventListener('click', function() {
        chatbot.style.display = 'none';
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
        greetingElement.classList.add('message', 'greeting');
        greetingElement.innerHTML = '<strong>Ravyn:</strong> Welcome! How can I assist you today?';
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
            thinkingIndicator.classList.add('message', 'thinking-indicator');
            thinkingIndicator.innerHTML = '<i class="fa-solid fa-gear"></i> Processing Input';
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
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
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
