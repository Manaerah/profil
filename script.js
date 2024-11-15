// Simple message submission handler
function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // For now, just log the values (simulate sending message)
  console.log(`Message sent by ${name} (${email}): ${message}`);
  alert("Message sent successfully!");

  // Clear the form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
