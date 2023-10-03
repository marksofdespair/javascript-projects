function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }

  function makeSquare(size) {
    if (size !== 5) {
      return "Size must be 5 to create a 5x5 square.";
    }
  
    let square = "";
  
    for (let i = 0; i < size; i++) {
      let row = "#".repeat(size);
      square += row + "\n";
    }
  
    return square;
  }
  
  // Testing the function
  let square_5x5 = makeSquare(5);
  console.log(square_5x5);

  function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }

  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }

  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }

  makeIsoscelesTriangle(); 

  //wait forgot the diamon function

  function makeDiamond(height) {
    if (height % 2 === 0) {
      return "Height must be an odd number to create a diamond.";
    }
  
    let diamond = "";
  
    for (let i = 1; i <= height; i += 2) {
      let spaces = " ".repeat((height - i) / 2);
      let hashes = "#".repeat(i);
      diamond += spaces + hashes + spaces + "\n";
    }
  
    for (let i = height - 2; i >= 1; i -= 2) {
      let spaces = " ".repeat((height - i) / 2);
      let hashes = "#".repeat(i);
      diamond += spaces + hashes + spaces + "\n";
    }
  
    return diamond;
  }
  
  // Testing the function with a height of 7!
  let diamond_7 = makeDiamond(7);
  console.log(diamond_7);
  