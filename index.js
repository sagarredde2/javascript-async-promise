var  promise = new Promise(function (res, rej) {
setTimeout (function () {
  res('promise resolved ');
  rej('rejected');
},1000)

});

// function resProm () {
//   promise.then(function (res) {
//   console.log(res);
// });
// console.log('before promise');
// }

// resProm();

async function asyncProm () {
  var promiseData = await promise;
  console.log(promiseData);
  console.log('before promise');
}

asyncProm();





