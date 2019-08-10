// make a print function so I don't have to type console.log
const print = thing => console.log(thing);

class Event {
  constructor(name, description, date) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
    this.date = date;
  }
  addAvailableTickets(ticketType, ticketPrice) {
    this.availableTickets.push([ticketType, ticketPrice]);
  }
  searchTickets(minPrice, maxPrice) {
    // check if negative numbers were input
    if (minPrice < 0) {
      return 'Please make your minimum price zero or greater.';
    } else if (maxPrice < 0) {
      return 'Please make your maximum price zero or greater.';

      // check if maximum and minimum are in wrong order
    } else if (maxPrice < minPrice) {
      return 'Please list the minimum price before the maximum price'
    }
    // make message variable to hold string
    let message = '';
    // if there are no tickets exit now with message
    if (this.availableTickets.length === 0) {
      print('no available tickets: ', this.availableTickets.length);
      message = 'This event is sold out.';
    } else {
      // reset message because there should be at least one ticket to check
      message = 'Eligible tickets: ';
      // set a counter to track how many tickets match
      let counter = 0;
      // loop through available tickets
      for (let i = 0; i < this.availableTickets.length; i++) {
        // if the ticket price is in the range defined by min and max
        if (
          this.availableTickets[i][1] >= minPrice &&
          this.availableTickets[i][1] <= maxPrice) {
          message += (i + 1) + '. ' + this.availableTickets[i][0] + ' ';
          counter++;
        }
      }
      if (counter === 0) {
        message = 'No tickets available';
      }
    }
    return message;
  }
  getDate() {
    let day = this.date.getDay();
    let month = this.date.getMonth();
    let date = this.date.getDate();
    let year = this.date.getFullYear();
    let hours = this.date.getHours();
    let minutes = this.date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = `${day}, ${month} ${date}, ${year} at ${hours}:${minutes} ${ampm}`;
    return strTime;
  }
}
class Ticket {
  constructor(ticketType, ticketPrice) {
    this.ticketType = ticketType;
    this.ticketPrice = ticketPrice;
  }
}
const workshop1 = new Event('Workshop', 'Saturday coding', new Date(2019, 7, 16, 18, 30));
const meetup1 = new Event('Meetup', 'An evening with other techies', new Date(2019, 7, 2, 18, 0));
const hackathon1 = new Event('Hackathon', 'A whole weekend of coding', new Date(2019, 7, 29, 9, 0));

/* add tickets */
workshop1.addAvailableTickets('free', 0);
workshop1.addAvailableTickets('donor', 120);

meetup1.addAvailableTickets('single', 30);
meetup1.addAvailableTickets('couple', 55);

hackathon1.addAvailableTickets('early-bird', 100);
hackathon1.addAvailableTickets('regular', 150);

const event_array = new Array();

event_array.push(workshop1, meetup1, hackathon1);

print(event_array);

// 
let cheapestTicketPrice = 0;
let cheapestTicket = '';
// loop through event array to get cheapest ticket
// for each event
event_array.forEach(function(item)  {
  print(item);
  let tickets = item.availableTickets.length;
  print(tickets);
  for (let i = 0; i < item.availableTickets.length; i++) {
    let ticketPrice = item.availableTickets[i][1]
    print(item.ticketPrice);
    if(cheapestTicket <= item.availableTickets[i].ticketPrice) {
    }

  }
});

$(document).ready(function () {
  let html = '';
  // loop through the array
  $.each(event_array, function (index, item) {
    // add the item and description inside an li into the html string
    html += `<li><span class="event-name">${item.name}</span> - ${item.description} - ${item.getDate()} <br>
    ${item.searchTickets(30, 60)}</li>`;

  });
  // insert resulting html string into #event
  $('#event').html(html);
})