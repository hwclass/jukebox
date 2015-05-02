/*Collections*/
Songs = new Mongo.Collection("songs");

/*Meteor Client-Side*/
if (Meteor.isClient) {
  
  Template.body.helpers({
    songList: function () {
      return Songs.find({}, {sort: {createdAt: -1}});  
    }
  });

  Template.body.events({
    'submit .new-song': function (event) {
      var url = event.target.text.value;
      Songs.insert({
        url: url,
        createdAt: new Date()
      });
      event.target.text.value = "";
      return false;
    }
  });
}

/*Meteor Server-Side*/
if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}
