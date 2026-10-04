document.getElementById('precioForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const precioInicial = parseFloat(document.getElementById('precioInicial').value);

  let precioFinal = 0;
  let mensajeAjuste = "";

  if (precioInicial > 1000) {
    precioFinal = precioInicial * 0.90;
    mensajeAjuste = "Descuento del 10% (Precio > S/. 1,000)";
  } else {
    precioFinal = precioInicial * 1.20;
    mensajeAjuste = "Aumento del 20% (Precio ≤ S/. 1,000)";
  }
  document.getElementById('resInicial').textContent = precioInicial.toFixed(2);
  document.getElementById('resAjuste').textContent = mensajeAjuste;
  document.getElementById('resFinal').textContent = precioFinal.toFixed(2);
  document.getElementById('resultado').classList.remove('hidden');
});