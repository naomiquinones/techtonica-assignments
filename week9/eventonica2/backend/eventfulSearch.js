require('dotenv').config();
const eventfulKey = process.env.EVENTFUL;
const eventful = require('../backend/node_modules/eventful-node');
const client = new eventful.Client(eventfulKey);

 // export a function that searches Eventful via its API and displays results

 module.exports = function(optionsObj){
  return new Promise((resolve, reject) => {
    console.log("\n *-*-*-*-*-*-*\n Searching\n");

    // optionsObj = {keywords: "rock"}

    console.log("\n\n optionsObj is: ",optionsObj,"\n\n-*-*-\n Finished logging");
   
    client.searchEvents(optionsObj, (err, data) => {

      if(!err){
        let resultEvent = data.search.events.event;
        // console.log("resultEvent is: ", resultEvent);
        if (data.search.total_items === 0 || data.search.total_items === '0') {
          console.log('Nothing found');
          resolve('0 events');
        } else if ( !Array.isArray(resultEvent)) {
          console.log('-*- -*- -*- -*- -*-\nFound one: \n-*- -*- -*- -*-', resultEvent);
          resolve(resultEvent);
        } else {
          console.log('\n-*-*-*-*-\nHere is the first one in the list: \n ');
          console.log('title: ',resultEvent[0].title);
          console.log('start_time: ',resultEvent[0].start_time);
          console.log('venue_name: ',resultEvent[0].venue_name);

          let finalEventData = {
            title: resultEvent[0].title,
            location: resultEvent[0].venue_name,
            date: resultEvent[0].start_time
          }
          resolve( finalEventData );
        }

      
      } else {
        reject('--*-- --*-- oops\n --*-- eventfulPromise failed: '+err);
      } //end if else
    }); // end of searchEvents
  }); // end of promise
};//end of function