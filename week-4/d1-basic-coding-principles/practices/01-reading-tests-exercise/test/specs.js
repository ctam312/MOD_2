const chai = require("chai");      //importing chai
const expect = chai.expect;         //importing the chai expect command
const { isFive, isOdd, myRange } = require("../funcs");         //importing other functions from funcs file

describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {         //describing a first test condition
    const num1 = 5;

    const actual1 = isFive(num1); 

    expect(actual1).to.be.true;       //should come out to true

    const otherInput = "not 5";
    const num2 = 4;

    const actual2 = isFive(num2);                   //should come out false to line 20
    const actual3 = isFive(otherInput); 

    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
  });
});

describe("isOdd(number)", () => {                         //describing the next test condition
  it("should return true if number is odd", () => {      //num1-3 is gonna be our test inputs
    const num1 = 3;
    const num2 = 2953;
    const num3 = -999;

    const actual1 = isOdd(num1);        //set to a variable
    const actual2 = isOdd(num2); 
    const actual3 = isOdd(num3); 

    expect(actual1).to.be.true;
    expect(actual2).to.be.true;
    expect(actual3).to.be.true;         //test all variables and they should come out to be true
  });

  it("should return false if the num is even", () => {       //new test within describe
    const num1 = 4;
    const num2 = 2952;
    const num3 = -998;

    const actual1 = isOdd(num1);         //testing is odd again to see if all these values come out false
    const actual2 = isOdd(num2); 
    const actual3 = isOdd(num3); 

    expect(actual1).to.be.false;
    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
  });

  it("should throw an error if num is not type of Number", () => {
    const string = "i am a string";
    const object = { i: "am", an: "object" };
    const array = ["i", "am", "an", "array"];

    expect(() => isOdd(string)).to.throw(Error);                   //for anything that goes in that is not a number
                                                                  //it will auto throw the error
    expect(() => isOdd(object)).to.throw(Error);
    expect(() => isOdd(array)).to.throw(Error);
  });
});

describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    it("should return the correct array with default value step=1", () => {
      const [min1, max1] = [0, 5];
      const [min2, max2] = [6, 3];                                              //checking for default value 1

      const actual1 = myRange(min1, max1);                         //this shows the expected array to see 
      const expected1 = [0, 1, 2, 3, 4, 5];        
      const actual2 = myRange(min2, max2);
      const expected2 = [];

      expect(actual1).to.eql(expected1);           //now just comparing the arrays
      expect(actual2).to.eql(expected2);
    });
  });

  context("if step is provided", () => {
    it("should return the correct array", () => {
      const [min1, max1, step1] = [0, 5, 1];
      const [min2, max2, step2] = [0, 5, 2];                    //checking if the arrays are correct again, or specically the return of these inputs
      const [min3, max3, step3] = [9, 5, 2];

      const actual1 = myRange(min1, max1, step1);
      const expected1 = [0, 1, 2, 3, 4, 5];
      const actual2 = myRange(min2, max2, step2);
      const expected2 = [0, 2, 4];
      const actual3 = myRange(min3, max3, step3);
      const expected3 = [];

      expect(actual1).to.eql(expected1);
      expect(actual2).to.eql(expected2);
      expect(actual3).to.eql(expected3);
    });
  });
});
