/*
Callback with error validate
*/
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

function usersCallback(error, users) {
  if (error) {
    console.log('process failed', error.message);
    return;
  }
  console.log('process Sukses:', users);
}

getUsers(false, usersCallback);
getUsers(true, usersCallback);
