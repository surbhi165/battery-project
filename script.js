function startPrototype() {
  alert("Prototype flow will start soon! 🚀");
  window.location.href = "battery-request.html";
}
function sendMessage() {
  const userInput = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");

  const userText = userInput.value.trim();
  if (userText === "") return;

  // Show user's message
  const userDiv = document.createElement("div");
  userDiv.className = "user-msg";
  userDiv.innerText = userText;
  chatBody.appendChild(userDiv);

  // Bot response
  const botDiv = document.createElement("div");
  botDiv.className = "bot-msg";

  // Dummy response logic
  if (userText.toLowerCase().includes("time")) {
    botDiv.innerText = "Our delivery usually takes 15-30 minutes.";
  } else if (userText.toLowerCase().includes("price")) {
    botDiv.innerText = "Pricing depends on battery type. Vendor will confirm.";
  } else {
    botDiv.innerText = "Sorry, I didn’t get that. A human agent will contact you!";
  }

  chatBody.appendChild(botDiv);

  // Scroll to bottom
  chatBody.scrollTop = chatBody.scrollHeight;

  // Clear input
  userInput.value = "";
}
function subscribe(plan) {
  alert(`🎉 Thank you for subscribing to the ${plan} plan!`);
}
