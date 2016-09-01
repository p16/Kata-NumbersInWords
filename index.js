'use strict';

Array.prototype.chunk = function chunk(chunkLength) {
  var newArr = [];
  for(var i = 0; i < this.length; i = i + chunkLength) {
    newArr.push(this.slice(i, i + 3));
  }

  return newArr;
}

function numbersInWords(numbers) {
  if (numbers === 0) {
    return 'zero';
  }

  if (numbers.toString().length <= 2) {
    return getTens(numbers);
  }

  return numbers.toString().split('').map(function(v) {
      return parseInt(v);
    })
    .reverse()
    .chunk(3)
    .reduce(function(result, values, index) {
      var label = getLabel(index * 3);
      if (values.reduce((r, a) => r+a, 0) === 0) {
        return result;
      }

      result = `${getTens(parseInt(values.slice(0, 2).reverse().join('')))} ${label} ` + result;

      if (values[2]) {
        result = `${basicMapping[values[2].toString()]} hundred ` + result;
      }

      return result;
    }, '')
    .trim();
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
