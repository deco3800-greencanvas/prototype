/**
 * Created by flc on 09/05/2016.
 */

var searchTerm, numOfTweets, $ul, list, url;

/*
 * TODO: (Build team): Will need to define most of these in PHP back-end since they're supposed to be secret.
 * Only visible here for demo purposes. THESE SHOULD NOT BE VISIBLE IN THE APP OR IN ANY CLIENT SIDE CODE (i.e. JS).
 * KEEP THIS STUFF IN SERVER SIDE CODE AND OUT OF ANY REPOSITORIES FOR PRODUCTION.
 *
 * Replace API_URL with a link to whatever PHP page links to the Twitter API.
 *
 * Reference http://code.tutsplus.com/tutorials/building-with-the-twitter-api-oauth-reading-and-posting--cms-22193
 */

searchTerm = 'uqartmuseum';
numOfTweets = 10;
$ul = $('#twitterDemo');
list = '';
url = 'http://localhost/index.php?q=' + searchTerm + '&count=' + numOfTweets;

$.get(url, function (data) {

    $.each(data.statuses, function () {
        list += '<li>'+ this.text +'</li>';
    });
    $ul.html(list);
});