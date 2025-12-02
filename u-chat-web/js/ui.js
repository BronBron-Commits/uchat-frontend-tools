function addMessage(user, text) {
  const messages = document.getElementById("messages");
  const div = document.createElement("div");
  div.className = "message";
  div.innerText = user + ": " + text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
  const box = document.getElementById("msgBox");
  const text = box.value;
  if (!text) return;
  ws.send(JSON.stringify({ text }));
  box.value = "";
}

function sendOnEnter(event) {
  if (event.key === "Enter") sendMessage();
}

window.onload = () => {
  if (document.getElementById("messages")) {
    connectWS();
  }
};
