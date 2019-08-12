// make a print function so I don't have to type console.log
const print = thing => console.log(thing);

class Event {
  constructor(name, description, dateTime) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
    this.dateTime = dateTime;
  }
  addAvailableTickets(ticket) {
    // const ticket = new Ticket(ticketType, ticketPrice);
    this.availableTickets.push(ticket);
  }
  searchTickets(minPrice, maxPrice) {
    // make message variable to hold string
    let message = "Eligible tickets: ";

    // if there are no tickets exit and say it's sold out
    if (this.availableTickets.length === 0) {
      return "This event is sold out.";
      // check if negative numbers were input
    } else if (minPrice < 0) {
      return "Please make your minimum price zero or greater.";
    } else if (maxPrice < 0) {
      return "Please make your maximum price zero or greater.";

      // check if maximum and minimum are in wrong order
    } else if (maxPrice < minPrice) {
      return "Please list the minimum price before the maximum price";
    }

    // reset message because there should be at least one ticket to check
    // message = "Eligible tickets: ";
    // // set a counter to track how many tickets match
    let counter = 0;
    // loop through available tickets
    for (let i = 0; i < this.availableTickets.length; i++) {
      // if the ticket price is in the range defined by min and max
      if (
        this.availableTickets[i].ticketPrice >= minPrice &&
        this.availableTickets[i].ticketPrice <= maxPrice
      ) {
        // add the ticket info to the message
        message += i + 1 + ". " + this.availableTickets[i].ticketType + " ";
        counter++;
      }
    }
    if (counter === 0) {
      // counter at 0 means no tickets in the range
      message = "No tickets available in this price range";
    }

    return message;
  }

  getDate() {
    const FORMAT_TIME = "dddd[,] MMMM Do[,] YYYY [at] h[:]mm a";
    return moment(this.dateTime, "X").format(FORMAT_TIME);

    // let strTime = `${day}, ${month} ${date}, ${year} at ${hours}:${minutes} ${ampm}`;
    // let day = this.date.getDay();
    // let month = this.date.getMonth();
    // let date = this.date.getDate();
    // let year = this.date.getFullYear();
    // let hours = this.date.getHours();
    // let minutes = this.date.getMinutes();
    // let ampm = hours >= 12 ? "pm" : "am";
    // hours = hours % 12;
    // hours = hours ? hours : 12; // the hour '0' should be '12'
    // minutes = minutes < 10 ? "0" + minutes : minutes;

    // day = 0
    //   ? "Sunday"
    //   : 1
    //   ? "Monday"
    //   : 2
    //   ? "Tuesday"
    //   : 3
    //   ? "Wednesday"
    //   : 4
    //   ? "Thursday"
    //   : 5
    //   ? "Friday"
    //   : "Saturday";

    // month = 0
    //   ? "January"
    //   : 1
    //   ? "February"
    //   : 2
    //   ? "March"
    //   : 3
    //   ? "April"
    //   : 4
    //   ? "May"
    //   : 5
    //   ? "June"
    //   : 6
    //   ? "July"
    //   : 7
    //   ? "August"
    //   : 8
    //   ? "September"
    //   : 9
    //   ? "October"
    //   : 10
    //   ? "November"
    //   : "December";
    // let strTime = `${day}, ${month} ${date}, ${year} at ${hours}:${minutes} ${ampm}`;
    // return strTime;
  }
  findCheapestTicket() {
    let available = this.availableTickets;
    let numTickets = available.length;
    
    // set cheapest ticket info to first ticket in event
    let startingTicket = available[0];
    // console.log(startingTicket);
    // separate name and price so can add them to formatted string later
    let cheapestTicketName = startingTicket.ticketType;
    let cheapestTicketPrice = startingTicket.ticketPrice;

    // starting with second ticket, loop through available tickets array
    for (let i = 1; i < numTickets; i++) {
      // set name and price info of current ticket
      let currentTicket = available[i];
      let currentTicketName = currentTicket[0];
      let currentTicketPrice = currentTicket[1];

      // if the current ticket is cheaper than the cheapest
      if (currentTicketPrice <= cheapestTicketPrice) {
        // set the cheapest to this current ticket
        cheapestTicketPrice = currentTicketPrice;
        cheapestTicketName = currentTicketName;
      }
    }
    // return it formatted
    return `${cheapestTicketName} : $${cheapestTicketPrice}`;
  }
}

class Ticket {
  constructor(ticketType, ticketPrice) {
    this.ticketType = ticketType;
    this.ticketPrice = ticketPrice;
  }
}

/* create events */
const workshop1 = new Event("Workshop", "Saturday coding", 1566048600);
const meetup1 = new Event(
  "Meetup",
  "An evening with other techies",
  1566349200
);
const hackathon1 = new Event(
  "Hackathon",
  "A whole weekend of coding",
  1567267200
);

/* create tickets */
const workshopFreeTicket = new Ticket("free", 0);
const workshopDonorTicket = new Ticket("donor", 120);

const meetupSingleTicket = new Ticket("single", 30);
const meetupCoupleTicket = new Ticket("couple", 55);

const hackathonEarlyBirdTicket = new Ticket("early-bird", 100);
const hackathonRegularTicket = new Ticket("regular", 150);

/* add tickets to events*/
workshop1.addAvailableTickets(workshopFreeTicket);
workshop1.addAvailableTickets(workshopDonorTicket);

meetup1.addAvailableTickets(meetupSingleTicket);
meetup1.addAvailableTickets(meetupCoupleTicket);

hackathon1.addAvailableTickets(hackathonEarlyBirdTicket);
hackathon1.addAvailableTickets(hackathonRegularTicket);

/* create an array to hold the events */
const event_array = new Array();
/* add the events to the events array */
event_array.push(workshop1, meetup1, hackathon1);

// print(event_array);

/* use jQuery to add the events to the web page */
$(document).ready(function() {
  let html = "";
  let minPrice = 0;
  let maxPrice = 500;
  // loop through the event array
  $.each(event_array, function(index, item) {
    // add the item and description inside an li into the html string
    html += `<li><span class="event">${item.name} - ${ item.description } </span> <br>
    <span class="date">${item.getDate()}</span> <br>
    <span class="price-search-results">${item.searchTickets(minPrice, maxPrice)}</span><br>
    <span class="cheap-ticket-ad">Cheapest ticket for this event is "${item.findCheapestTicket(
      "cheapest"
    )}"</span></li>`;
  });
  // insert resulting html string into #event
  $("#event").html(html);

  // make minPrice and maxPrice input elements for user
  let minPriceInput = document.createElement('input');
  minPriceInput.type = 'number';
  minPriceInput.min = 0;
  minPriceInput.id = 'min-price';
  minPriceInput.value = minPrice;

  let maxPriceInput = document.createElement('input');
  maxPriceInput.type = 'number';
  maxPriceInput.min = 0;
  maxPriceInput.id = 'max-price';
  maxPriceInput.value = maxPrice;

  // make labels for the minPrice and maxPrice elements
  let minLabel = document.createElement('label');
  let maxLabel = document.createElement('label');
  minLabel.htmlFor = 'min-price';
  maxLabel.htmlFor = 'max-price';
  minLabel.textContent = 'Minimum price';
  maxLabel.textContent = 'Maximum price';
  
  // insert inputs for user to specify min and max price
  $("#event").after(minLabel,minPriceInput, maxLabel,maxPriceInput);

  // update search based on changed input values
  // needs fixing
  $('#min-price').on('keydown', () => {
    $('.price-search-results').empty();
  }).on('change', () => {
    // console.log('min price change')
    let newSearchHtml = '';
    $.each(event_array,function(index,item) {
      console.log($('#min-price').value)//doesn't retrieve value
      newSearchHtml = `${item.searchTickets($('#min-price').value,$('#max-price').value)}`;
      $('.price-search-results').html(newSearchHtml)
    });
  });
  $('#max-price').on('keydown', () => {
    $('.price-search-results').empty();
  }).on('change', () => {
    // console.log('max price change')
    let newSearchHtml = '';
     $.each(event_array,function(index,item) {
       newSearchHtml = `${item.searchTickets($('#min-price').value,$('#max-price').value)}`;
       $('.price-search-results').html(newSearchHtml)
      });
  });
}); // end jquery
