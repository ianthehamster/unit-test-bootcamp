const { expect } = require('chai'); // 'expect' is an assertion syntax that helps us 'assert' our code meets expectations
const { add, multiply } = require('../utils.js'); // importing our add function
const { loopOverNumberArray } = require('../utils.js');

// 'describe' groups and categorises tests - accepts string (test description) and function (test logic) in arguments
describe('Utils', () => {
  // 'Utils' is description of all the tests in the outer arrow function
  describe('Add', () => {
    // 'Add' is description of the add function we are testing
    it('Adds 2 of the same number', () => {
      const result = add(1, 1);
      expect(result).to.equal(2);
    });

    it('Adds 2 different numbers', () => {
      const result = add(1, 2);
      expect(result).to.equal(3);
    });

    // adding an x in front of 'it' will skip this test
    xit('Adds a positive and a negative number', () => {
      const result = add(1, -1);
      expect(result).to.equal(0);
    });

    it('Adds 2 negative numbers', () => {
      const result = add(-1, -1);
      expect(result).to.equal(-2);
    });
  });

  describe('Loop', () => {
    it('Target is in array', () => {
      const result = loopOverNumberArray([1, 2, 3], 2);
      expect(result).to.equal(2);
    });

    it('Target is not in array', () => {
      const result = loopOverNumberArray([1, 2, 3], 4);
      expect(result).to.equal('Target not found');
    });
  });

  describe('Multiply', () => {
    it('Multiply 2 positive numbers', () => {
      const result = multiply(2, 3);
      expect(result).to.equal(6);
    });

    it('Multiply 1 positive and negative numbers', () => {
      const result = multiply(5, -8);
      expect(result).to.equal(-40);
    });
  });
});
