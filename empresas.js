document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const company = document.getElementById("company").value.trim();
  const position = document.getElementById("position").value.trim();
  const type = document.getElementById("type").value;
  const location = document.getElementById("location").value.trim();
  const requirements = document.getElementById("requirements").value.trim();
  const benefits = document.getElementById("benefits").value.trim();

  const message = `*Nova Vaga Cadastrada - JobWay Canadá*%0A
🏢 *Empresa:* ${company}%0A
💼 *Cargo:* ${position}%0A
📍 *Tipo:* ${type}%0A
🌎 *Local:* ${location || 'Não informado'}%0A
📋 *Requisitos:* ${requirements}%0A
🎁 *Benefícios:* ${benefits || 'Não informado'}`;

  const whatsappNumber = "558589500747"; // Altere para o número oficial da plataforma
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
});
