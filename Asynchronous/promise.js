// const { reject } = require('lodash');

/*
promise
 */
function getUsers(isOffline) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ['udin', 'aceng', 'agus'];

      if (isOffline) {
        reject(new Error('cannot retrive due user offline'));
        return;
      }
      resolve(users);
    }, 3000);
  });
}

// function usersCallback(error, users) {
//   if (error) {
//     console.log('process failed', error.message);
//     return;
//   }
//   console.log('process Sukses:', users);
// }

// getUsers(false, usersCallback);
// getUsers(true, usersCallback);

getUsers(false)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message));
