const Calculator = require('../src/modules/calculator.js');

describe("calculator sum tests", () => {
  test("calculator sum 1", () => {
    //Arrange
    const a = 1;
    const b = 2;

    //Act
    const result1 = Calculator.add(a, b);

    //Assert
    expect(result1).toEqual(3);
  });

  test("calculator sum 2", () => {
    //Arrange
    const a = -15;
    const b = 10;

    //Act
    const result2 = Calculator.add(a, b);

    //Assert
    expect(result2).toEqual(-5);
  });

  test("calculator sum 3", () => {
    //Arrange
    const a = 1.5;
    const b = 2.3;

    //Act
    const result3 = Calculator.add(a, b);

    //Assert
    expect(result3).toBeCloseTo(3.8);
  });
});
