// let dataType = "loop";
let dataType = "while";

const whichLoop = dataType => {
  if (dataType === "loop") {
    var forLOOP = function(num = 10) {
      console.log(num);

      for (var i = 0; i <= num; i++) {
        console.log(i);
      }
    };

    forLOOP(90);
  } else if (dataType = "while") {
    var whileLoop = function() {
      var whileNum = 10;
      var count = 0;
      while (count < whileNum) {
        console.log(count++);
      }
      return count;
    };
    console.log(`this is a while loop ${whileLoop()}`);
  }
};

whichLoop(dataType);
