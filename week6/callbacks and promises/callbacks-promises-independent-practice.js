// Try out your own code in the browser
let haveMoreToLearn = true;
let needSleep = false;

const canIGoToMovie = () => {
  return new Promise( (resolve,reject) => {
    if(haveMoreToLearn) {
      reject({
        name: 'Have more to learn',
        message: 'Sorry, gotta study'
      })
    } else if(needSleep) {
      reject({
        name: 'Need sleep',
        message: 'Sleep deprived'
      })
    } else {
      resolve('Finally, a chance to relax')
    }
  })
}

canIGoToMovie()
.then(message => {
  console.log('Yay! ' + message)
})
.catch( error => {
  console.log(error.name + ' ' + error.message)
})