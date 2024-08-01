  function valorInput() {
    const inputField1 = document.getElementById('input-field-1');
    const inputField2 = document.getElementById('input-field-2');
    const valorDigitado1 = inputField1.value;
    const valorDigitado2 = inputField2.value;
    const displayElement1 = document.getElementById('value-display-1');
    const displayElement2 = document.getElementById('value-display-2');
    displayElement1.textContent = valorDigitado1;
    displayElement2.textContent = valorDigitado2;
  }