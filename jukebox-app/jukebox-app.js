Songs = new Mongo.Collection("songs");

if (Meteor.isClient) {
  Template.body.helpers({
    songs: function () {
      return Songs.find({}, {sort: {createdAt: -1}});
    }
  });

  Url = function (artist, title, url, createdAt) {
    return {
      artist : artist,
      title : title,
      url : url,
      createdAt : createdAt
    }
  }

  Template.body.events({
    "click #new-song-button": function (event) {      
      var currentUrl = $(event.target.previousElementSibling)[0].value;
      var url = new Url('', '', currentUrl.split('v=')[1], new Date());
      Songs.insert(url);
      songList.push(url);
      $(event.target.previousElementSibling)[0].value = "";
      return false;
    }
  });

  if (typeof Session.set('songList') === 'undefined') {
    window.songList = [];
    Session.set('songList', songList);
  }

}