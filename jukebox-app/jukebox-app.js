Songs = new Mongo.Collection("songs");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  
  Template.body.helpers({
    songs: function () {
      return Songs.find({});  
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}
