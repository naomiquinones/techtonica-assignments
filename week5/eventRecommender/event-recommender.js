/*  -------------------------------------  */
/* * EVENT CLASS* */
/*  -------------------------------------  */
class Event {
  constructor(name, dateTime) {
    this.name = name;
    this.dateTime = dateTime;
  }
  getDate() {
    const FORMAT_TIME = "dddd[,] MMMM Do[,] YYYY [at] h[:]mm a";
    return moment(this.dateTime, "X").format(FORMAT_TIME);
  }
}
/*  -------------------------------------  */
/* * TICKET CLASS* */
/*  -------------------------------------  */
class Ticket {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}
/*  -------------------------------------  */
/* * USER CLASS* */
/*  -------------------------------------  */
class User {
  constructor(firstName, lastName, username) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.personalEvents = [];
  }
}
/*  -------------------------------------  */
/* *EVENT RECOMMENDER CLASS* */
/*  -------------------------------------  */
class EventRecommender {
  constructor() {
    // All main properties should go here.

    this.events = [];
    this.users = [];
  }

  addEvent(name, dateTime) {
    const event = new Event(name, dateTime);
    // Adds a new Event to the System
    this.events.push(event);
  }

  addUser(firstName, lastName, username) {
    const person = new User(firstName, lastName, username);
    // Adds a new User to the System
    this.users.push(person);
  }

  saveUserEvent(user, event) {
    //Allow users to save events to a personal Events array.
    // console.log(this.users.indexOf(user));
    this.users[
      this.users.findIndex(element => element === user)
    ].personalEvents.push(event);
  }

  deleteUser(user) {
    // Deletes a User from the system`
    this.users.splice(this.users.findIndex(person => person === user), 1);
  }

  deleteEvent(event) {
    // Deletes the Event from the system
    this.events.splice(this.events.findIndex(current => current === event), 1);
  }

  filter() {} // use this to refactor finding in the other methods
}

const recommender = new EventRecommender();

/* ****************** */
/* test the functions */
recommender.addUser("Margarita", "Yang", "myang");recommender.addUser("Anwar", "Jones", "anwar");
recommender.addEvent("Workshop", 1566048600);
recommender.addEvent("Meetup", 1566349200);
recommender.addEvent("Hackathon", 1567042200);
recommender.saveUserEvent("Linda", "test");
console.log(recommender);




/* use jQuery to add the events to the web page */
$(document).ready(function() {
  let html = "";
  let minPrice = 0;
  let maxPrice = 500;
  // loop through the event array
  $.each(event_array, function(index, item) {
    // add the item and description inside an li into the html string
    html += `<li><span class="event">${item.name} - ${
      item.description
    } </span> <br>
    <span class="date">${item.getDate()}</span> <br>
    <span class="price-search-results">${item.searchTickets(
      minPrice,
      maxPrice
    )}</span><br>
    <span class="cheap-ticket-ad">Cheapest ticket for this event is "${item.findCheapestTicket(
      "cheapest"
    )}"</span></li>`;
  });
  // insert resulting html string into #event
  $("#event").html(html);

  // make minPrice and maxPrice input elements for user
  let minPriceInput = document.createElement("input");
  minPriceInput.type = "number";
  minPriceInput.min = 0;
  minPriceInput.id = "min-price";
  minPriceInput.value = minPrice;

  let maxPriceInput = document.createElement("input");
  maxPriceInput.type = "number";
  maxPriceInput.min = 0;
  maxPriceInput.id = "max-price";
  maxPriceInput.value = maxPrice;

  // make labels for the minPrice and maxPrice elements
  let minLabel = document.createElement("label");
  let maxLabel = document.createElement("label");
  minLabel.htmlFor = "min-price";
  maxLabel.htmlFor = "max-price";
  minLabel.textContent = "Minimum price";
  maxLabel.textContent = "Maximum price";

  // insert inputs for user to specify min and max price
  $("#event").after(minLabel, minPriceInput, maxLabel, maxPriceInput);

  $( function() {
    $( "#datepicker" ).datepicker();
  } );
}); // end jquery