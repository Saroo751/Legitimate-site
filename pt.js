const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    if (!name.value || !email.value ||  !message.value) {
        alert('Please fill in all fields');
        e.preventDefault();
    }
})

document.getElementById('menu-toggle').onclick = () => {
    document.getElementById('nav-links').classList.toggle('show');
};


const testimonies = document.querySelectorAll('.testimony')
window.addEventListener('scroll', () => {
    testimonies.forEach((card) =>{
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 50) {
            card.computedStyleMap.transform = 'translateY(0)';
        }
    }
)
})

testimonies.forEach(card => {
    card.computedStyleMap.opacity = 0;
    card.computedStyleMap.transform = 'translateY(20px)';
    card.computedStyleMap.transition = 'all 0.5s ease out';
}

)

setInterval(() => {
    const carousel = document.getElementById("carousel");
    carousel.scrollBy({ left: 310, behavior: "smooth"});
}, 3000);


const fakeUsers = [
  {
    name: "Jane M.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Samuel K.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Eliza G.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Chris T.",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    name: "Mariam B.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    name: "James O.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  }
];

const messages = [
  "Just earned $2000 — I'm impressed!",
  "Started small, and now I'm seeing real returns.",
  "Withdrawals are instant. Totally legit!",
  "I’ve tried 3 platforms, this is the best by far.",
  "Support was really responsive. Great experience!",
  "Invested last week, already seeing gains!"
];

function addFakeReview() {
  const reviewBox = document.getElementById('review-box');
  const user = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
  const message = messages[Math.floor(Math.random() * messages.length)];

  const review = document.createElement('div');
  review.className = 'review';

  review.innerHTML = `
    <img src="${user.avatar}" alt="${user.name}" class="avatar">
    <div class="review-content">
      <div class="username">${user.name}</div>
      <div class="message">${message}</div>
    </div>
  `;

  reviewBox.appendChild(review);
  reviewBox.scrollTop = reviewBox.scrollHeight;
}

// Start generating a review every 6-10 seconds
function startLiveReviews() {
  addFakeReview(); // Add one immediately
  setInterval(() => {
    addFakeReview();
  }, Math.floor(Math.random() * 4000) + 6000);
}

startLiveReviews();

 const chatToggleBtn = document.querySelector(".chat-toggle");
const chatWindow = document.querySelector(".chat-window");
const chatBody = document.getElementById("chatBody");

// Telegram chat link - replace with your actual link
const telegramLink = "https://t.me/Larissa_Marolt";

// Bot avatar image URL
const botAvatar = "https://i.pravatar.cc/40?img=12";
// User avatar image URL
const userAvatar = "https://i.pravatar.cc/40?img=5";

// The constant array of fake chat messages
const fakeChat = [
  "👋 Hello! Welcome to our investment platform.",
  "Our plans offer daily returns and instant withdrawals.",
  "Many users are profiting already. Want to learn more?",
  "Let me know if you want to speak with our live agent."
];

// State to track which message to show next
let messageIndex = 0;

// Toggle chat window open/close
chatToggleBtn.addEventListener("click", () => {
  if (chatWindow.classList.contains("open")) {
    chatWindow.classList.remove("open");
  } else {
    chatWindow.classList.add("open");
    if (messageIndex === 0) {
      startChat();
    }
  }
});

// Append a bot message bubble
function appendBotMessage(text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "chat-message bot";

  const avatarDiv = document.createElement("div");
  avatarDiv.className = "avatar";
  avatarDiv.style.backgroundImage = `url(${botAvatar})`;

  const bubbleDiv = document.createElement("div");
  bubbleDiv.className = "bubble";
  bubbleDiv.textContent = text;

  msgDiv.appendChild(avatarDiv);
  msgDiv.appendChild(bubbleDiv);

  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Append a user message bubble
function appendUserMessage(text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "chat-message user";

  const avatarDiv = document.createElement("div");
  avatarDiv.className = "avatar";
  avatarDiv.style.backgroundImage = `url(${userAvatar})`;

  const bubbleDiv = document.createElement("div");
  bubbleDiv.className = "bubble";
  bubbleDiv.textContent = text;

  msgDiv.appendChild(avatarDiv);
  msgDiv.appendChild(bubbleDiv);

  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Show bot messages one by one from fakeChat array, then show options
function startChat() {
  if (messageIndex < fakeChat.length) {
    appendBotMessage(fakeChat[messageIndex]);
    messageIndex++;
    setTimeout(startChat, 2200);
  } else {
    showOptions();
  }
}

// Show Yes / No buttons and handle user interaction
function showOptions() {
  const optionsDiv = document.createElement("div");
  optionsDiv.className = "chat-options";

  const yesBtn = document.createElement("button");
  yesBtn.className = "btn-yes";
  yesBtn.textContent = "Yes";

  const noBtn = document.createElement("button");
  noBtn.className = "btn-no";
  noBtn.textContent = "No";

  optionsDiv.appendChild(yesBtn);
  optionsDiv.appendChild(noBtn);
  chatBody.appendChild(optionsDiv);
  chatBody.scrollTop = chatBody.scrollHeight;

  yesBtn.addEventListener("click", () => {
    optionsDiv.remove();
    appendUserMessage("Yes, I want to speak with an agent.");
    setTimeout(() => {
      appendBotMessage("Great! Click below to chat with our agent:");
      const link = document.createElement("a");
      link.href = telegramLink;
      link.target = "_blank";
      link.rel = "noopener";
      link.className = "telegram-link";
      link.textContent = "📲 Open Telegram Chat";
      chatBody.appendChild(link);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
  });

  noBtn.addEventListener("click", () => {
    optionsDiv.remove();
    appendUserMessage("No, thanks.");
    setTimeout(() => {
      appendBotMessage("No worries! I'm here if you need anything else.");
    }, 600);
  });
}