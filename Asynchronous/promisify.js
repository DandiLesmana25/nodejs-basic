/*
promisify from core module util
*/

const { promisify } = require('util');

function getUsers(isOffline, callback) {
  setTimeout(() => {
    const users = ['udin', 'aceng', 'agus'];

    if (isOffline) {
      callback(new Error('cannot retrive due user offline'), null);
      return;
    }
    callback(null, users);
  }, 3000);
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

// create a Promise version of getUsers
const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message));

getUsersPromise(true)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message));
