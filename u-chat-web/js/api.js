// Basic API wrapper for U-Chat backend

const API_BASE = "http://your-server/api";

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch(API_BASE + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  if (res.ok) {
    localStorage.setItem("username", username);
    window.location = "chat.html";
  } else {
    document.getElementById("error").innerText = "Login failed";
  }
}
