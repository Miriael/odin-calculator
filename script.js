const display = document.querySelector('.display');
const displayableButtons = document.querySelectorAll('.displayable');
const operatorButtons = document.querySelectorAll('.operator');
const digitButtons = document.querySelectorAll('.digit')
let currentExpression = [];

digitButtons.forEach(button => {
  button.addEventListener('click', () => {
    buttonPress(button);
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    operatorClick(button.textContent)
  })
})

document.querySelector('.eq').addEventListener('click', () => {
  equalsClick()
})

document.querySelector('#clear').addEventListener('click', () => {
  clear();
}) 

document.querySelector('#backspace').addEventListener('click', () => {
  del();
})

function del() {
  display.textContent = display.textContent.slice(0, display.textContent.length-1);
}

function clear() {
  display.textContent = '';
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    alert('You just created a black hole with your division-by-zero wizardry. I hope you are happy!')
    clear()
  } else {
    return a / b;
  }
}

function operate(a, operator, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

function buttonPress (button) {
  if (display.textContent == '0') {
    display.textContent = button.textContent;
  } else {
      display.textContent += button.textContent;
  }
}


//When any opearator is clicked, check the string in display
function equalsClick() {
  currentExpression = display.textContent.split(' ').filter(Boolean)
  if (currentExpression.includes('+') || currentExpression.includes('-') || currentExpression.includes('*') || currentExpression.includes('/')) {
    let result = operate(+currentExpression[0], currentExpression[1], +currentExpression[2]);
    if (result == undefined) {
      alert('Error!')
      clear()
    }
    display.textContent = +result.toFixed(1);
  };
};

function operatorClick(button) {
  currentExpression = display.textContent.split(' ').filter(Boolean)
  if (currentExpression.includes('+') || currentExpression.includes('-') || currentExpression.includes('*') || currentExpression.includes('/')) {
    let result = operate(+currentExpression[0], currentExpression[1], +currentExpression[2]);
    display.textContent = +result.toFixed(1) + button;
  } else {
    display.textContent += button;
  }
}