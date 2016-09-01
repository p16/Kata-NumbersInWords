'use strict';

function numbersInWords(numbers) {
  if (numbers === 0) {
    return 'zero';
  }

  if (numbers.toString().length <= 2) {
    return getTens(numbers);
  }

  var result = '';
  var numberAsArray = numbers.toString().split('').map(function(v) {
    return parseInt(v);
  }).reverse();

  for(var i = 0; i < numberAsArray.length; i = i + 3) {
    var actuals = numberAsArray.slice(i, i + 3);
    var label = getLabel(i);

    if (actuals.reduce((r, a) => r+a, 0) === 0) {
      continue;
    }

    if (actuals[2]) {
      result = `${basicMapping[actuals[2].toString()]} hundred ${getTens(parseInt(actuals.slice(0, 2).reverse().join('')))} ${label} ` + result;
      continue;
    }

    result = `${getTens(parseInt(actuals.slice(0, 2).reverse().join('')))} ${label} ` + result;
  }

  return result.trim();
}

function getLabel(numberOfDigits) {
  return labels[numberOfDigits.toString()] || '';
}

function getTens(numbers) {
  if (numbers <= 20) {
    return basicMapping[numbers.toString()];
  }

  var numberAsArray = numbers.toString().split('');
  return tens[numberAsArray[0]] + (parseInt(numberAsArray[1]) > 0 ? ' ' + basicMapping[numberAsArray[1]] : '');
}


var labels = {
  '3': 'thousand',
  '6': 'million',
  '9': 'billion',
}

var tens = {
  '2': 'twenty',
  '3': 'thirty',
  '4': 'fourty',
  '5': 'fifty',
  '6': 'sixty',
  '7': 'seventy',
  '8': 'eighty',
  '9': 'ninety',
};

var basicMapping = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eighth',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
};



module.exports = numbersInWords;
