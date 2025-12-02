let ws;

// TEMP: echo server until we hook into U-Chat backend
function connectWS() {
  ws = new WebSocket("wss://echo.websocket.org");

  ws.onopen = () => {
    console.log("Connected to echo server");
  };

  ws.onmessage = event => {
    const msg = JSON.parse(event.data);
    addMessage(msg.user, msg.text);
  };
}
