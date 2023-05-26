function logOne() {
    setTimeout(function() {
      console.log("one!");
    }, Math.random() * 1000);
  }
  
  function logTwo() {
    setTimeout(function() {
      console.log("two!");
    }, Math.random() * 5000);
  }
  
  function inOrder(logOne, logTwo) {
    Promise.resolve(logOne()).then(logTwo())
  }
  inOrder(logOne, logTwo);
  
  