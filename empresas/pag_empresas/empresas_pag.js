// Máscara simples para telefone (formato brasileiro)
document.addEventListener("DOMContentLoaded", () => {
  const telefoneInput = document.querySelector("input[name='telefone']");
  if (telefoneInput) {
    telefoneInput.addEventListener("input", (e) => {
      let valor = e.target.value.replace(/\D/g, "");
      if (valor.length > 10) {
        valor = valor.replace(/(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
      } else {
        valor = valor.replace(/(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
      }
      e.target.value = valor;
    });
  }

  // Validação básica do formulário
  const form = document.getElementById("empresaForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      const inputs = form.querySelectorAll("input, select");
      let valido = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.border = "2px solid red";
          valido = false;
        } else {
          input.style.border = "1px solid #ccc";
        }
      });

      if (!valido) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    });
  }
});
