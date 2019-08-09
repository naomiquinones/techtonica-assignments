class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = []
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
    }
      // make message variable to hold string
      let message = '';
    // if there are no tickets exit now with message
    if (this.availableTickets.length === 0) {
      console.log('no available tickets: ', this.availableTickets.length);
      message = 'This event is sold out.';
    } else {
      // reset message because there should be at least one ticket to check
      message = 'Eligible tickets: ';
      // set a counter to track how many tickets match
      let counter = 0;
      // loop through available tickets
      for (let i = 0; i < this.availableTickets.length; i++) {
        // if the ticket price is in the range defined by min and max
        if (this.availableTickets[i][1] >= minPrice && this.availableTickets[i][1] <= maxPrice) {
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
}
class Ticket {
  constructor(ticketType, ticketPrice) {
    this.ticketType = ticketType;
    this.ticketPrice = ticketPrice;
  }
}
const workshop1 = new Event('Workshop', 'Saturday coding');
const meetup1 = new Event('Meetup', 'An evening with other techies');
const hackathon1 = new Event('Hackathon', 'A whole weekend of coding');

/* add tickets */
workshop1.addAvailableTickets('free', 0);
workshop1.addAvailableTickets('donor', 120);

meetup1.addAvailableTickets('single', 30);
meetup1.addAvailableTickets('couple', 55);

hackathon1.addAvailableTickets('early-bird', 100);
hackathon1.addAvailableTickets('regular', 150);

const event_array = new Array();

event_array.push(workshop1, meetup1, hackathon1);

console.log(event_array);

$(document).ready(function () {
  let html = '';
  // loop through the array
  $.each(event_array, function (index, item) {
    // add the item and description inside an li into the html string
    html += `<li>${item.name} - ${item.description} - ${item.searchTickets(0, 0)}</li>`;
  });

  // insert resulting html string into #event
  $('#event').html(html);
})