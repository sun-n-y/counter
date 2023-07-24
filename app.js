const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

let intialValue = 0;

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const operation = e.target.classList[0];
    if (operation === 'decrease') {
      intialValue--;
      value.textContent = intialValue;
    }
    if (operation === 'reset') {
      intialValue = 0;
      value.textContent = intialValue;
    }
    if (operation === 'increase') {
      intialValue++;
      value.textContent = intialValue;
    }
    if (intialValue > 0) {
      value.style.color = 'green';
    } else if (intialValue < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'black';
    }
  });
});
