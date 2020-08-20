var total = 0;
var expensive = 0;
var cheap = 0;

var nameInput = document.getElementById('name');
var amountInput = document.getElementById('amount');
var addButton = document.getElementById('add');

var expensesBlock = document.getElementById('expenses');
var totalField = document.getElementById('total');
var expensiveField = document.getElementById('expensive');
var cheapField = document.getElementById('cheap');

function clearForm() {
  nameInput.value = '';
  amountInput.value = '';
}

function dateToString(date) {
  var strArray=[
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
    'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ];
  var d = date.getDate();
  var m = strArray[date.getMonth()];
  var y = date.getFullYear();
  return '' + (d <= 9 ? '0' + d : d) + ' ' + m + ' ' + y;
}

addButton.addEventListener('click', function() {
  if (nameInput.value.trim() !== '' && amount !== '') {
    var amount = Number(amountInput.value.trim());
    var divElem = document.createElement('div');
    divElem.classList.add("expense");
    divElem.innerHTML = '<div class="expense-name"><div>' + nameInput.value + '</div>'
      + '<small>' + dateToString(new Date()) + '</small></div>'
      + '<div class="expense-amount">-' + amount + ' руб.</div>';
    expensesBlock.append(divElem);
    total += Number(amount);
    totalField.innerHTML = total + ' руб.';
    if (amount > expensive) {
      expensive = amount;
      expensiveField.innerHTML = expensive + ' руб.';
    }
    if (amount < cheap || cheap === 0) {
      cheap = amount;
      cheapField.innerHTML = cheap + ' руб.';
    }
    clearForm();
  }
});