# techtonica-assignments
Welcome to my Techtonica assignments repo

___

## about
This repo contains work I've done that is part of the Techtonica curriculum

### e.g. promises
```javascript
const whatIAmLearning = "full-stack javascript";
let haveMoreToLearn = true;

const canGraduateFromTechtonica = () => {
  return new Promise(
    (resolve,reject) => {
      if(haveMoreToLearn) {
        reject({
          name: 'More to learn',
          message: 'Sorry, gotta study more',
          topic: whatIAmLearning
        })
      } else {
        resolve('Congratulations!')
      }
    }
  );
}

canGraduateFromTechtonica()
.then( msg => 'Yay! ' + msg)
.catch( error => error.message + ' ' + error.topic)
```

### git
At some point, this file was only to practice using git.

Now that I know how to make basic changes to my repo in GitHub, I have to practice forking and merging. I have already practiced using the command line and managed to unintentionally delete a local directory, and with help brought it back into existence.

### things I learned about Markdown:

**bold with double asterisks**
__bold with double underscores__

*italic with single asterisks*
_italic with single underscores_

## h2 tag

###### h6 tag

* list item
* another list item
  * sublist item
  * another sublist item
  
![alt text for image](http://www.example.com/image.jpg)

Adding inline code blocks such as `source .bashrc`