require('dotenv').config();
const eventfulKey = process.env.EVENTFUL;
const eventful = require('eventful-node');
const client = new eventful.Client(eventfulKey);

 // export a function that searches Eventful via its API and displays results

module.exports = function(optionsObj){
  let eventfulPromise = new Promise((resolve, reject) => {
    console.log("\n *-*-*-*-*-*-*\n Searching\n");
    client.searchEvents(optionsObj, (err, data) => {
      if(!err){
        let resultEvents = data.search.events.event;
        console.log('\n-*-*-*-*-\nFound an event: \n ');
        console.log('title: ',resultEvents[0].title);
        console.log('start_time: ',resultEvents[0].start_time);
        console.log('venue_name: ',resultEvents[0].venue_name);

        resolve(resultEvents);
      
      } else {
        reject('eventfulPromise failed');
      } //end if else
    }); // end of searchEvents
  }); // end of promise
};//end of function