class EventRecommender {
  constructor() {
    // All main properties should go here.

    this.events = [];
    this.users = [];
  }

  addEvent(event) {
    // Adds a new Event to the System
    this.events.push(event);
  }

  addUser(user) {
    // Adds a new User to the System
    this.users.push(user);
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

class User {
  constructor(firstName, lastName, personalEvents) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.personalEvents = personalEvents;
  }
}
