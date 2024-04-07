var items = document.querySelectorAll('.x');
var counter = 0;
for (let i of items) {
  i.addEventListener('click', function () {
    if (i.innerText == "") {
      if (counter % 2 == 0) {
        i.innerText = 'x';
      } else {
        i.innerText = '0';
      }
      counter++;
      checkWinner();
    }
  } ) ;
}

function checkWinner() { 
  for (var i = 0; i < 7; i += 3) {
    if (
      items[i].innerText == items[i + 1].innerText &&
      items[i].innerText == items[i + 2].innerText &&
      items[i].innerText != ""
    ) {
      console.log('winner', items[i].innerText);
      stopGame();
    }
  }
  for (var i = 0; i < 3; i++) {
    if (
      items[i].innerText == items[i + 3].innerText &&
      items[i].innerText == items[i + 6].innerText &&
      items[i].innerText != ""
    ) {
      console.log('winner', items[i].innerText);
      stopGame();
    }
  }
  if (
    items[0].innerText == items[4].innerText &&
    items[4].innerText == items[8].innerText &&
    items[8].innerText != ""
  ) {
    console.log('winner', items[0].innerText);
    stopGame();
  }
  else if (
    items[2].innerText == items[4].innerText &&
    items[2].innerText == items[6].innerText &&
    items[2].innerText != ""
  ) {
    console.log('winner', items[2].innerText);
    stopGame();
  }
}

function stopGame() {
  for (var i of items) {
    i.style.pointerEvents = 'none';
  }
}

function restart() {
  for (var i of items) {
    i.style.pointerEvents = 'auto';
    i.innerText = '';
    counter = 0;
  }
}