'use strict';

/**
* Url is the model for song urls
* @inherits from Song
* @param <String> artist
* @param <String> title
* @param <String> url
* @param <Date> createdAt
*/
Url = function (artist, title, url, createdAt) {
	this.url = url;
  this.createdAt = createdAt;
  Song.apply(this, arguments);
};