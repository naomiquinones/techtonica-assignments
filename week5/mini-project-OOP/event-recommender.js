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
  this.users.push(user)
  }

  saveUserEvent(){
  //Allow users to save events to a personal Events array.
  }

  deleteUser() {
  // Deletes a User from the system
  }
 
  deleteEvent() {
  // Deletes the Event from the system
  }

  filter(){
  }
}