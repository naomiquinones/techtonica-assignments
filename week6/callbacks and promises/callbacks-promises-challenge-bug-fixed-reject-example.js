let doingWeek6Work = true;
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

In this edit, I changed each variable to be the 'executed' version of each function which will return the Promise as you probably intended.

I also fixed the issue of 'message' being incorrect in now line 48

Notice however that you only see the reject message (line 31).  This is an important rule.  If 'any' of the promises processed by Promise.all reject, then you will only get that reject as a result. (even as it is still waiting on other promises to resolve).  Try it!

*/

Promise.all([week6IsDone(),didGit(),doSomething()])
.then(values => console.log(values))
.catch(reject => console.log(reject));
