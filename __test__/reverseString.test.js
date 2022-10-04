const reverseString = require("../src/modules/reverseString");

describe("reverse string tests", () => {
  test("reverse string", () => {
    //Arrange
    const string1 = "hello";

    //Act
    const result1 = reverseString(string1);

    //Assert
    expect(result1).toBe("olleh");
  });
});