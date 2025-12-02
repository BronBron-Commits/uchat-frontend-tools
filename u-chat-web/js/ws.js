let ws;

function connectWS() {
  const username = localStorage.getItem("username");
  ws = new WebSocket("ws://your-server/ws?user=" + username);

  ws.onmessage = event => {
    const msg = JSON.parse(event.data);
    addMessage(msg.user, msg.text);
  };
}
