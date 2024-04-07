function getUser(callback) {
  setTimeout(() => {
    const user = ['udin', 'asep', 'ucup', 'safri'];
    callback(user);
  }, 3000);
}

// getUser((user) => {
//   console.log(user);
// });

function userCallback(user) {
  console.log(user);
}

getUser(userCallback);
