// Display a message on the screen
function addMessage(user, text) {
  const messages = document.getElementById("messages");

  const div = document.createElement("div");
  div.className = "message";

  const self = localStorage.getItem("username");

  if (user === self) {
    div.classList.add("you");
  }

  div.innerText = user + ": " + text;
  messages.appendChild(div);

  messages.scrollTop = messages.scrollHeight;
}

// Send message to WebSocket
function sendMessage() {
  const box = document.getElementById("msgBox");
  const text = box.value;
  const user = localStorage.getItem("username");

  if (!text) return;

  ws.send(JSON.stringify({ user, text }));
  box.value = "";
}

// Send via Enter key
function sendOnEnter(event) {
  if (event.key === "Enter") sendMessage();
}

// Logout
function logout() {
  localStorage.removeItem("username");
  window.location = "index.html";
}

window.onload = () => {
  const name = localStorage.getItem("username");
  if (name) {
    document.getElementById("usernameDisplay").innerText = name;
  }

  if (document.getElementById("messages")) {
    connectWS();
  }
};
