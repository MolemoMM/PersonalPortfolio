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

    // Predefined responses
    const responses = [
        { question: 'hello', answer: 'Hi there! How can I help you today?' },
        { question: 'how are you', answer: 'I am just a bot, but I am doing great! How about you?' },
        { question: 'what is your name', answer: 'I am your friendly chatbot.' },
        { question: 'bye', answer: 'Goodbye! Have a great day!' }
    ];

    // Show the chatbot when the button is clicked
    chatbotButton.addEventListener('click', function() {
        chatbot.style.display = 'flex';
        chatbotButton.style.display = 'none';
    });

    // Close the chatbot
    closeChatbot.addEventListener('click', function() {
        chatbot.style.display = 'none';
        chatbotButton.style.display = 'flex';
    });

    // Send a message
    sendChatbot.addEventListener('click', function() {
        const message = chatbotInput.value;
        if (message.trim() !== '') {
            addMessage('You', message);
            chatbotInput.value = '';
            // Simulate a response from the chatbot
            setTimeout(function() {
                const response = getChatbotResponse(message);
                addMessage('Chatbot', response);
            }, 1000);
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

    // Generate a response from the chatbot
    function getChatbotResponse(message) {
        const lowerCaseMessage = message.toLowerCase();
        const response = responses.find(r => r.question === lowerCaseMessage);
        return response ? response.answer : 'I am not sure how to respond to that.';
    }

    // Function to add new responses
    function addChatbotResponse(question, answer) {
        responses.push({ question: question.toLowerCase(), answer: answer });
    }

    // Example of adding a new response
    addChatbotResponse('what is your favorite color', 'I love all colors equally!');
    addChatbotResponse('tell me a joke', 'Why don’t scientists trust atoms? Because they make up everything!');
});
