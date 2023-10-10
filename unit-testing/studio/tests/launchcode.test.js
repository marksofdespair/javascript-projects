// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
    test("Checks testing launchcode", function(){
      expect(launchcode.organization).toBe("nonprofit");
    });
    
    test("checks executive director", function(){
      expect(launchcode.executiveDirector).toBe("Jeff");
    });

    test("checks percentageCoolEmployees", function (){
      expect(launchcode.percentageCoolEmployees).toBe(100);
    });

    test("checks programsOffered", function (){
      expect(launchcode.programsOffered).toContain("Web Development")
      expect(launchcode.programsOffered).toContain("Data Analysis")
      expect(launchcode.programsOffered).toContain("Liftoff")
      expect(launchcode.programsOffered.length).toBe(3)
    });
});

describe("Testing launchOutput()", function(){

  test("should output Launch! when passed a number only divisible by 2", function (){
    let divisibleby2 = 4;
    let result = launchOutput(divisibleby2);
    expect(result).toBe('Launch!');
  });
})