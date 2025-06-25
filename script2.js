document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const experience = document.getElementById("experience").value;
  const englishLevel = document.getElementById("englishLevel").value;

  const message = `*Nova Inscrição - JobWay Canadá*%0A
👤 *Nome:* ${name}%0A
📧 *Email:* ${email}%0A
📱 *WhatsApp:* ${phone}%0A
💼 *Profissão:* ${profession}%0A
🧰 *Experiência:* ${experience}%0A
🗣️ *Inglês:* ${englishLevel}`;

  const whatsappNumber = "558589500747"; // Coloque seu número aqui
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
});
