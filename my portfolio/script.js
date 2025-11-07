function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const message = document.getElementById("message").value;

  alert(
    `Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`
  );

  e.target.reset();
}
