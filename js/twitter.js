/**
 * Created by flc on 09/05/2016.
 */

var apiAction, searchTerm, numOfTweets, $ul, list, url;

/*
 * TODO: (Build team): Will need to define most of these in PHP back-end since they're supposed to be secret.
 * Only visible here for demo purposes. THESE SHOULD NOT BE VISIBLE IN THE APP OR IN ANY CLIENT SIDE CODE (i.e. JS).
 * KEEP THIS STUFF IN SERVER SIDE CODE AND OUT OF ANY REPOSITORIES FOR PRODUCTION.
 *
 * Replace API_URL with a link to whatever PHP page links to the Twitter API.
 *
 * Reference http://code.tutsplus.com/tutorials/building-with-the-twitter-api-oauth-reading-and-posting--cms-22193
 */
var API_URL, CONFIG;

API_URL = "https://api.twitter.com/1.1/";
CONFIG = {
    "consumerKey":          "knNRrL3NvT8nAcm1sZIPR2x7I",
    "consumerSecret":       "r5abHpXQYG1GqH4Q9LALlL4Tdr660z9Cl34rAd3ZpkDlFIcodH",
    "accessToken":          "383108501-Q5y7Ct6QFfMv4niQXzFz98gMfes8IqFS3wPZskVw",
    "accessTokenSecret":    "l9IwoQwigtSdPDeCEbGyAwpZRaKTauoadkaAQMX2S825y"
};   // I'm disabling the tokens after 24/5/2016 since they use my account. Production version should use @uqartmuseum.

apiAction = 'search/tweets.json';
searchTerm = 'uqartmuseum';
numOfTweets = 10;
$ul = $('#twitterDemo');
list = '';
url = API_URL + apiAction + searchTerm + '&count=' + numOfTweets;

$.get(url, function (data) {

    $.each(data.statuses, function () {
        list += '<li>'+ this.text +'</li>';
    });
    $ul.html(list);
});