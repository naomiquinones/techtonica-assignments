/*  -------------------------------------  */
/* * EVENT CLASS* */
/*  -------------------------------------  */
class Event {
  constructor(name, dateTime) {
    (this.name = name), (this.dateTime = dateTime);
  }
}
/*  -------------------------------------  */
/* * TICKET CLASS* */
/*  -------------------------------------  */
class Ticket {
  constructor(type, price) {
    (this.type = type), (this.price = price);
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

  addUser(firstName, lastName) {
    const person = new User(firstName, lastName);
    // Adds a new User to the System
    this.users.push(person);
  }

  saveUserEvent(user, event) {
    //Allow users to save events to a personal Events array.
    console.log(this.users.indexOf(user));

    this.users[this.users.findIndex(element => element === user)].personalEvents.push(event);

    
  }

  deleteUser(user) {
    // Deletes a User from the system`
    this.users.splice(this.users.findIndex(person => person === user), 1);
  }

  deleteEvent(event) {
    // Deletes the Event from the system
    this.events.splice(this.events.findIndex(current => current === event), 1);
  }

  filter() {}
}

const recommender = new EventRecommender();

recommender.addUser("Linda", "Yoshida");
recommender.addEvent("Hackathon", 1567042200);
recommender.saveUserEvent("Linda", "test");
console.log(recommender);
