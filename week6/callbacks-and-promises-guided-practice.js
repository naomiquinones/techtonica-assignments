const counter = cb => {
  console.log('inside counter function');
  cb(); // callback will get called by counter()
}

counter( () => {
  console.log('in a callback function')
})