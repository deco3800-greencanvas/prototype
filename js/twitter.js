/**
 * Created by flc on 09/05/2016.
 */

var searchTerm, numOfTweets, $ul, list, url;

/*
 * TODO: (Build team): Will need to define most of these in PHP back-end since they're supposed to be secret.
 * Only defining here for demo purposes.
 * Replace API_URL with a link to whatever PHP page links to the Twitter API.
 *
 * Reference http://code.tutsplus.com/tutorials/building-with-the-twitter-api-oauth-reading-and-posting--cms-22193
 */
var API_URL, API_TOKEN, API_TOKEN_SECRET, API_KEY, API_KEY_SECRET;

API_URL = "";
API_TOKEN = "";
API_TOKEN_SECRET = "";
API_KEY = "";
API_KEY_SECRET = "";

searchTerm = 'uqartmuseum';
numOfTweets = 10;
$ul = $('#twitterDemo');
list = '';
url = API_URL + searchTerm + '&count=' + numOfTweets;

$.get(url, function (data) {

    $.each(data.statuses, function () {
        list += '<li>'+ this.text +'</li>';
    });
    $ul.html(list);
});