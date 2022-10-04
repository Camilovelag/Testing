const stringLength = require('../src/modules/stringLength');

describe("string tests", () => {
  test("string length", () => {
    //Arrange
    const string1 = "hello";
    
    //Act
    const result1 = stringLength(string1);

    //Assert
    expect(result1).toBe(5);
  });
});  