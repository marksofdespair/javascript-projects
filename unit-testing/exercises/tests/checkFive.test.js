const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("checkFive produces feedback if provided integer is less than five.", function(){
      let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });

});