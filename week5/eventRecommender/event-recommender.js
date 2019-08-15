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




