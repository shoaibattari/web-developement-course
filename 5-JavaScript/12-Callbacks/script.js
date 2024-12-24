// JavaScript Callbacks
// callback

function sum(a, b) {
  console.log(`this is sum of ${a} + ${b} = ${a + b}`);
}

function sub(a, b) {
  console.log(`this is sub of ${a} - ${b} = ${a - b}`);
}
function calculator(a, b, callback) {
  return callback(a, b);
}
calculator(12, 10, sum);
calculator(12, 10, sub);

// callbback hell
function getData(dataId, genNextData) {
  setTimeout(() => {
    console.log(`data is ${dataId}`);
    if (genNextData) {
      genNextData();
    }
  }, 1000);
}

getData(1, () => {
  console.log("data searching next    .........");
  getData(2, () => {
    console.log("data searching next    .........");
    getData(3, () => {
      console.log("data searching next    .........");
      getData(4);
    });
  });
});
