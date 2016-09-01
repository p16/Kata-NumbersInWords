var numbersInWords = require('../');
var expect = require('chai').expect;

describe('NumbersInWords', function() {
  it('it should return the right word up to 20', function(done) {
    expect(numbersInWords(0)).to.equal('zero');
    expect(numbersInWords(1)).to.equal('one');
    expect(numbersInWords(8)).to.equal('eighth');
    expect(numbersInWords(9)).to.equal('nine');

    expect(numbersInWords(11)).to.equal('eleven');
    expect(numbersInWords(15)).to.equal('fifteen');
    expect(numbersInWords(20)).to.equal('twenty');

    done();
  });

  it('it should return the right word between 21 and 99', function(done) {
    expect(numbersInWords(21)).to.equal('twenty one');
    expect(numbersInWords(33)).to.equal('thirty three');
    expect(numbersInWords(48)).to.equal('fourty eighth');
    expect(numbersInWords(99)).to.equal('ninety nine');
    done();
  });

  it('it should return the right word between 99 and 999', function(done) {
    expect(numbersInWords(350)).to.equal('three hundred fifty');
    expect(numbersInWords(567)).to.equal('five hundred sixty seven');
    expect(numbersInWords(999)).to.equal('nine hundred ninety nine');
    done();
  });

  it('it should return the right word between 1000 and 999999', function(done) {
    expect(numbersInWords(15005)).to.equal('fifteen thousand five');
    expect(numbersInWords(67543)).to.equal('sixty seven thousand five hundred fourty three');
    expect(numbersInWords(999999)).to.equal('nine hundred ninety nine thousand nine hundred ninety nine');
    expect(numbersInWords(1000)).to.equal('one thousand');
    done();
  });

  it('it should return the right word between 1000000 and 9999999', function(done) {
    expect(numbersInWords(1000000)).to.equal('one million');
    expect(numbersInWords(5983321)).to.equal('five million nine hundred eighty three thousand three hundred twenty one');
    expect(numbersInWords(9999999)).to.equal('nine million nine hundred ninety nine thousand nine hundred ninety nine');
    expect(numbersInWords(2000000)).to.equal('two million');
    done();
  });
})
