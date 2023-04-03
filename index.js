const updateCounter = (number) => {
  const valueElm = document.querySelector('.counter__value');
  valueElm.textContent = String(number).padStart(2, '0');
  //console.log(number)
};

let value = 0;
const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');

btnUp.addEventListener('click', () => {
  if (value < 99) {
    value += 1;
    updateCounter(value);
    //console.log(value)
  }
});

btnDown.addEventListener('click', () => {
  if (value > 0) {
    value -= 1;
    updateCounter(value);
  }
});

updateCounter(value);

/*
opravene chyby:
1. preklepy v názvech proměnných
2. querySelector nehledal třídy, ale elementy
3. value se odečetla/přičetla, ale nikam se to neuložilo
4. valueElm.value je přímo hodnota inputu, ale my máme natvrdku 15, takže nemáme určeno že se jedná o hodnotu
*/