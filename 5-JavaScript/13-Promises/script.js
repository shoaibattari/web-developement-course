// callback hell
// function login(callback) {
//   setTimeout(() => {
//     console.log("user is Login done");
//     callback();
//   }, 1000);
// }
// function getUserInfo() {
//   const user = {
//     fullName: "shoaib",
//   };
//   setTimeout(() => {
//     console.log("user info is here", user);
//   }, 500);
// }

// login(getUserInfo);
// isValidate = false;
// const p = new Promise((resolve, reject) => {
//   if (isValidate) {
//     resolve("user is login done");
//   } else {
//     reject("user is not login");
//   }
// });

// p.then((res) => console.log("then message", res)).catch((err) =>
//   console.log(" catch error", err)
// );

function login(isValidate) {
  return new Promise((resolve, reject) => {
    if (isValidate) {
      resolve("user is login done");
    } else {
      reject("user is not login");
    }
  });
}

function getUserInfo() {
  const user = {
    fullName: "shoaib",
  };
  setTimeout(() => {
    console.log("user info is here", user);
  }, 500);
}

login(true)
  .then(() => {
    console.log("user is login"), getUserInfo();
  })
  .catch(() => console.log("user is not login"));
