const counter = cb => {
  console.log('inside counter function');
  cb(); // callback will get called by counter()
}

counter( () => {
  console.log('in a callback function')
});

// avoid callback hell of nesting functions
// e.g.
/* counter(function(){
  console.log('inside callback function');
  counter(function(){
    console.log('inside callback function');
   });
});  */

const haveBlackSocks = true;

// the promise

const willIGetNewPhone = new Promise( 
  (resolve, reject) => {
    if (haveBlackSocks) {
      const phone = {
        brand: 'iPhone',
        color: 'who cares'
      };
      resolve(phone);
    } else {
      const reason = new Error('buy some new socks');
      reject(reason);
    }
  }
);

const showOff = function(phone) {
  const message = `Hi, I finally upgraded to a
    ${phone.brand}. It's color is... ${phone.color}!`;
  return Promise.resolve(message);
}

// now call the promise
const checkSocks = () => {
  willIGetNewPhone
    .then(showOff)
    .then(fulfilled => console.log(fulfilled))
    .catch(error => console.log(error.message));
}

checkSocks();