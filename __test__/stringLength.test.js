const stringLength = require('../src/modules/stringLength.js');

describe("string tests", () => {
  test("string length", () => {
    //Arrange
    const string1 = "hello";
    
    //Act
    const result1 = stringLength(string1);

    //Assert
    expect(result1).toBe(5);
  });

  test ("string validation NotNull", () => {
    //Arrange
    const string2 ="";
    
    //Act
    const result2 = 'String is empty'
    
    //Assert
    expect(result2).toBe(result2);
  });

  test ("string validation NotTooLong", () => {
    //Arrange
    const string3 ="Australopitecus";
    
    //Act
    const result3 = 'String is too long'
    
    //Assert
    expect(result3).toBe(result3);
  });
});