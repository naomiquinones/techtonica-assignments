
/*  -------------------------------------  */
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.personalEvents = [];
  }
}

class EventRecommender {
  constructor() {
    // All main properties should go here.

    this.events = [];
    this.users = [];
  }

  addEvent(name, description, dateTime) {
    const event = new Event(name, description, dateTime);
    // Adds a new Event to the System
    this.events.push(event);
  }

  addUser(firstName,lastName) {
    const person = new User(firstName,lastName);
    // Adds a new User to the System
    this.users.push(person);
  }

  saveUserEvent(user, event) {
    //Allow users to save events to a personal Events array.
    this.users[indexOf(user)].personalEvents.push(this.events[indexOf(event)]);
  }

  deleteUser(user) {
    // Deletes a User from the system
    this.users.splice(indexOf(user), 1);
  }

  deleteEvent() {
    // Deletes the Event from the system
  }

  filter() {}
}

const recommender = new EventRecommender();

recommender.addUser('Linda','Yoshida');
console.log(recommender);