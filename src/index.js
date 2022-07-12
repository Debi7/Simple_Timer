document.addEventListener('DOMContentLoaded', function () {
  let btnStart = document.getElementById('start');
  btnStart.addEventListener('click', reduceStart);

  let btnStop = document.getElementById('stop');
  btnStop.addEventListener('click', reduceStop);

  const btnBox = document.querySelector('.newBtn-box');

  const btnReset = document.createElement('button');
  btnReset.classList.add('new-btn');
  btnReset.innerText = 'Сбросить';
  btnBox.append(btnReset);
  btnReset.addEventListener('click', resetTimer);

  const btnPlusTen = document.createElement('button');
  btnPlusTen.classList.add('new-btn');
  btnPlusTen.innerText = '+10';
  btnBox.append(btnPlusTen);
  btnPlusTen.addEventListener('click', plusTen);

  const btnAdd = document.createElement('button');
  btnAdd.classList.add('new-btn');
  btnAdd.innerText = 'Прибавить';
  btnBox.append(btnAdd);
  btnAdd.addEventListener('click', addInTimer);

  const timer = document.getElementById('timer');

  let i = parseInt(timer.innerHTML, 10);
  let timerInterval = null;
  let resetNum = parseInt(timer.innerHTML, 10); //или let resetNum = i;

  function reduceStart() {
    timerInterval = setInterval(() => {
      if (i > 0) {
        i--;
        timer.innerHTML = i;
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);
  }

  function reduceStop() {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  }

  function resetTimer() {
    timer.innerHTML = resetNum;
  }

  function plusTen() {
    resetNum += 10;
    i += 10;
    timer.innerHTML = i;
  }

  function addInTimer() {
    const promptNum = prompt('Введите число', '');
    if (!!promptNum) {
      //если ввести буквы - в таймере выдаст NaN
      const num = parseInt(promptNum, 10);
      resetNum += num;
      i += num;
      timer.innerHTML = i;
    }
  }

  const roundBtns = document.getElementsByClassName('round'); //коллекция кнопок
  Array.from(roundBtns).forEach((item, index) => {
    item.addEventListener('click', () => {
      if (index !== roundBtns.length - 1) {
        //если НЕ последний элемент массива
        let nextIndex = index + 1; //следующий элемент по индексу
        let nextItem = parseInt(roundBtns[nextIndex].innerHTML, 10);
        nextItem += 1;
        roundBtns[nextIndex].innerHTML = nextItem;
      } else {
        let itemOne = parseInt(roundBtns[0].innerHTML, 10);
        itemOne += 1;
        roundBtns[0].innerHTML = itemOne;
      }

      if (index === 0) {
        //если первый элемент массива
        let itemEndIndex = roundBtns.length - 1; //индекс последнего элемента
        let itemEnd = parseInt(roundBtns[itemEndIndex].innerHTML, 10); //значение последнего элемента массива
        itemEnd += 1;
        roundBtns[itemEndIndex].innerHTML = itemEnd;
      } else {
        let beforeIndex = index - 1;
        let beforeItem = parseInt(roundBtns[beforeIndex].innerHTML, 10);
        beforeItem += 1;
        roundBtns[beforeIndex].innerHTML = beforeItem;
      }

      if (index !== 0) {
        //если НЕ первый элемент массива
        let beforeIndex = index - 1;
        let beforeItem = parseInt(roundBtns[beforeIndex].innerHTML, 10);
        beforeItem += 1;
        roundBtns[beforeIndex].innerHTML = beforeItem;
      } else {
        let itemEndIndex = roundBtns.length - 1; //индекс последнего элемента
        let itemEnd = parseInt(roundBtns[itemEndIndex].innerHTML, 10); //значение последнего элемента массива
        itemEnd += 1;
        roundBtns[itemEndIndex].innerHTML = itemEnd;
      }
    });
  });

// Это отловит пустую строку, андефайнд и нулл
// if (!!promptNum) {} двойное отрицание - преобразуешь свое значение в boolean. Двойное отрицание значит, что у тебя есть значение. Оно вернет тру, если значение есть. И фолс если его нет

});
const arrNum = [1, 2, 3, 4, 5];
function reverseArray(arr) {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    arrNew[i] = arr[(arr.length - 1) - i];
  }
  return arrNew;
}
console.log(reverseArray(arrNum));
