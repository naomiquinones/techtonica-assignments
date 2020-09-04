let doingWeek6Work = false;
let learnedGitBasics = true;

const week6IsDone = () => {
  return new Promise( (resolve,reject) => {
    setTimeout( () =>{
      if(doingWeek6Work) {
        reject({text:'Still doing Week 6 work'})
      } else {
        resolve({text:'Hallelujah, move on to other topics'})
      }
    }, 8000)
  });
}

const didGit = () => {
  return new Promise( (resolve,reject) => {
    setTimeout( () => {
      if(learnedGitBasics) {
        resolve('I git it');
      } else {
        reject('I didn\'t git it');
      }
    }, 3500);
  });
}

const doSomething = () => {
  return new Promise( (resolve,reject) => {
    setTimeout( () => {
      return learnedGitBasics && !doingWeek6Work ? resolve('OK now do week 7 and catch up on the rest') : reject('What does, "Nose to the grindstone" mean?')
    }, 250);
  });
}

/* 

Promise.all accepts an array of Promises.

In this version, we are providing an array of executed functions - each of which returns a promise

*/

Promise.all([week6IsDone(),didGit(),doSomething()])
.then(values => console.log(values))
.catch(reject => console.log(reject));
