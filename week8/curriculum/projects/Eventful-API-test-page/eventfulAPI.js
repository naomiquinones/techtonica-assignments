const eventfulKey = require("./keys.js").eventful;
const eventful = require('eventful-node');
const client = new eventful.Client(eventfulKey);

 //sample search, try running it to see it in action
/* client.searchEvents({
  keywords: 'tango',
  location: 'San Francisco',
  date: "Next Week"
}, function(err, data){
   if(err){
     return console.error(err);
   }
   let resultEvent = data.search.events.event;
   console.log('Received ' + data.search.total_items + ' events');
   console.log('Event listings: ');
   for ( let i =0 ; i < resultEvent.length; i++){
     console.log("===========================================================")
     console.log('title: ',resultEvent[i].title);
     console.log('start_time: ',resultEvent[i].start_time);
     console.log('venue_name: ',resultEvent[i].venue_name);
     console.log('venue_address: ',resultEvent[i].venue_address);
   }
}); */

 //export a custom function tht searches via Eventful API, displays the results AND stores some of the data into MySQL
// Original instructions says MySQL but we're using Postgres
// YOUR WORK HERE
module.exports = function(optionsObj){
  return new Promise((resolve, reject) => {
    console.log("\n *-*-*-*-*-*-*\n Searching\n");
    client.searchEvents(optionsObj, (err, data) => {
      if(!err){
        let resultEvent = data.search.events.event;
        if (data.search.total_items === 0 || data.search.total_items === '0'){
          // console.log('Nothing found');
          resolve('0 events');
        } else if (!Array.isArray(resultEvent)){
          console.log('-- -- -- -- \nFound one: \n', resultEvent);
        } else {
          console.log('\n-*-*-*-*-\nHere is the first one: \n ');
          
          console.log('title: ',resultEvent[0].title);
          console.log('start_time: ',resultEvent[0].start_time);
          console.log('venue_name: ',resultEvent[0].venue_name);
          
          // const firstEvent = {
          //   "title": resultEvent[0].title,
          //   "location": resultEvent[0].venue_name,
          //   "date": resultEvent[0].start_time
          // };
          // resolve(firstEvent);
        }
        resolve(resultEvent);
      
      } else {
        reject('eventfulPromise failed. The error was: \n' +err);
      } //end if else
    }); // end of searchEvents
  }); // end of promise
};//end of function