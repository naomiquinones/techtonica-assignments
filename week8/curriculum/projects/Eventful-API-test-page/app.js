const inquirer = require('inquirer');
//connection available to all
const connection = require('./connection');
const eventfulAPI = require('./eventfulAPI.js');

const app = {};

app.startQuestion = (closeConnectionCallback) => {
  inquirer.prompt({
    type: 'list',
    message: 'What action would you like to do?',
    choices: [
      'Complete a sentence',
      'Create a new user',
      'Find one event of a particular type in San Francisco next week',
      'Mark an existing user to attend an event in database',
      'See all events that a particular user is going to',
      'See all the users that are going to a particular event',
      'Exit'
    ],
    name: 'action',
  }).then((res) => {
    const continueCallback = () => app.startQuestion(closeConnectionCallback);

    if (res.action === 'Complete a sentence') app.completeSentence(continueCallback);
    if (res.action === 'Create a new user') app.createNewUser(continueCallback);
    if (res.action === 'Find one event of a particular type in San Francisco next week') app.searchEventful(continueCallback);
    if (res.action === 'Mark an existing user to attend an event in database') app.matchUserWithEvent(continueCallback);
    if (res.action === 'See all events that a particular user is going to') app.seeEventsOfOneUser(continueCallback);
    if (res.action === 'See all the users that are going to a particular event') app.seeUsersOfOneEvent(continueCallback);
    if (res.action === 'Exit') {
      closeConnectionCallback();
      return;
    }
  })
}

app.completeSentence = (continueCallback) => {
  //YOUR WORK HERE

  console.log('\nPlease answer the following questions:\n');

  // input questions
  const questions = [
    {
      type: 'input',
      name: 'color',
      message: 'What is your favorite color?'
    },
    {
      type: 'input',
      name: 'item',
      message: "What is an item you would like?"
    }
  ];

  inquirer.prompt(questions)
    .then(answers => {
      console.log(`\nMy favorite color is ${answers.color} so my dream is to buy a ${answers.color} ${answers.item}\n`);
      continueCallback();
    })
    .catch(err => console.error(err.stack));

  //End of your work
}

app.createNewUser = (continueCallback) => {
  //YOUR WORK HERE

  console.log('\nTo join eventonica, please answer the following questions:\n');

  // input questions
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your email address?"
    }
  ]

  inquirer.prompt(questions).then(answers => {
    const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *';
    const values = [answers.name, answers.email];
    connection
      .query(text, values)
      .then((res, err) => {
        console.log('\n', res.rows[0]);
        continueCallback();
      })
      .catch(e => console.error('\n------- Oops\n----\n'+e.stack)) // catch connection error
  });
  //End of your work
}

app.searchEventful = (continueCallback) => {
  //YOUR WORK HERE
  console.log('\nSearch events:\n');

  const questions = [
    {
      type: 'input',
      name: 'keywords',
      message: "What is the event to search for (e.g. dance, fashion, etc.?",
      default: "dance"
    },
    {
      type: 'input',
      name: 'location',
      message: "Where should we search?",
      default: "San Francisco"
    },
    {
      type: 'input',
      name: 'date',
      message: "When?",
      default: "Today"
    }
  ];
  inquirer.prompt(questions).then(answers => {
    console.log(`You are searching for ${answers.keywords} events in ${answers.location} happening: ${answers.date}.\n `);
    
    eventfulAPI(answers).then( res => {
        // console.log('Response from eventfulAPI promise',res);
        if (res === '0 events') {
          console.log('-*-*-*\nSorry, no events, please try again\n');
        } else {
          
        }
        continueCallback();
      }).catch(err => { // eventful catch
        console.log('eventful catch error: ',err);
      }
      );
      // console.log(eventData);
      
    })
    .catch(err =>{ // inquirer catch
      console.log('inquirer catch error: ', err);
    });
    
    //End of your work
}

app.matchUserWithEvent = (continueCallback) => {
  //YOUR WORK HERE
  console.log('\n-*-*-* Match user with event\n');
  const putInDb = [`dance${Math.floor(Math.random()*100)}`,'Berkeley','Next Week'];
  const question = {
    type: 'confirm',
    name: 'insert',
    message: "Add event? (Y/n)",
    default: true
  };
  inquirer.prompt(question).then(answer => {
    console.log(answer);
    if(answer === 'y') {
      console.log('Signing up for this event');
      connection
      .query('INSERT INTO events VALUES($1,$2,$3)', putInDb)
      .then((res, err) => {
        console.log('\n', res.rows[0]);
      }) // end connection then
      .catch(e => console.error(e.stack)) // catch connection error
    }

  })
  .catch(err =>{ // inquirer catch
    console.log('inquirer catch error: ', err);
  });
  
  //End of your work
  continueCallback();
}

app.seeEventsOfOneUser = (continueCallback) => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

app.seeUsersOfOneEvent = (continueCallback) => {
  //YOUR WORK HERE

  console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

module.exports = app;