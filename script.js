function appendValue(val) {
  const display = document.getElementById('display');
  
  if(val === '√') {
    // Square root of current value
    if(display.value !== '') {
      display.value = Math.sqrt(eval(display.value));
    }
    return;
  }

  display.value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function clearEntry() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1); // Remove last character
}

function calculate() {
  const display = document.getElementById('display');
  try {
    let expression = display.value;

    // Handle percentage
    expression = expression.replace(/%/g, "*0.01");

    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}
