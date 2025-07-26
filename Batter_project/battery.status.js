
function showStatus() {
  const phone = document.getElementById("phone").value.trim();
  const result = document.getElementById("result");

  if (!phone) {
    alert("⚠️ Please enter your phone number");
    return;
  }

  const statuses = [
    "🔋 Battery request received.",
    "⚙️ Assigning nearest vendor...",
    "🚚 Battery is out for delivery!",
    "✅ Battery delivered successfully!",
    "📞 Vendor will call you soon."
  ];

  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  result.textContent = randomStatus;
  result.style.display = "block";
}
