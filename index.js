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



const getData = fetch("https://api.github.com/users/sagarredde2");
console.log(getData);
getData.then(
  function res(data) {
    console.log(data.json());
  },
  function rej(error) {
    console.log(error);
  },
);

function makeApiCall(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

// Example usage:
const apiUrl = "https://api.github.com/users/sagarredde2";

makeApiCall(apiUrl)
  .then((responseData) => {
    console.log("API call successful:", responseData);
  })
  .catch((error) => {
    console.error("API call failed:", error);
  });

