const chatInput = document.querySelector('.chat-input input[type="text"]');
const chatMessages = document.querySelector(".chat-messages");

function sendMessage() {
  const message = chatInput.value;
  if (message.trim() === "") {
    return; // Skip empty messages
  }

  const sender = "you"; // Change the sender as needed
  const timestamp = new Date().toLocaleTimeString(); // Get current timestamp

  const chatCard = document.createElement("div");
  chatCard.classList.add("chat-card");
  chatCard.classList.add("sent"); // Add "sent" class to indicate sent messages

  const senderElement = document.createElement("div");
  senderElement.classList.add("sender");
  senderElement.textContent = sender;

  const timestampElement = document.createElement("div");
  timestampElement.classList.add("timestamp");
  timestampElement.textContent = timestamp;

  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.textContent = message;

  chatCard.appendChild(senderElement);
  chatCard.appendChild(timestampElement);
  chatCard.appendChild(messageElement);

  chatMessages.appendChild(chatCard);

  chatInput.value = ""; // Clear input field
}

const sendButton = document.querySelector(".chat-input button");
sendButton.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
