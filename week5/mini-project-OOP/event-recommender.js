class EventRecommender {
  constructor() {
  // All main properties should go here.
  
  this.events = [];
  this.users = [];
  
  }

  addEvent(eventName, eventDescription, eventDate) {
  // Adds a new Event to the System
  this.events.push([eventName,eventDescription,eventDate]);
  }

  addUser(userName, userId) {
  // Adds a new User to the System
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