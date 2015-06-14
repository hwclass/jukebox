'use strict';

/**
* Url is the model for song urls
* @param <String> artist
* @param <String> title
* @param <String> url
* @param <Date> createdAt
*/
Url = function (artist, title, url, createdAt) {
  return {
    artist : artist,
    title : title,
    url : url,
    createdAt : createdAt
  }
};