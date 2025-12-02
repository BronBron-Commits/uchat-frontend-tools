// Later we'll connect this to the real U-Chat auth-api.
// For now, just store the username and move to chat.

async function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user.length < 1) {
    document.getElementById("error").innerText = "Please enter a username";
    return;
  }

  // TODO: add real API call later
  localStorage.setItem("username", user);

  window.location = "chat.html";
}
