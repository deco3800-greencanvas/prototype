<?php
/**
 * Author: flc
 */
// Blocks other sites from using this code remotely; may need to drop if it's causing problems
header('Access-Control-Allow-Origin: uq.edu.au');
header('Content-Type: application/json');

require_once('TwitterAPIExchange.php');

$settings = array(
    'oauth_access_token'        => "383108501-Q5y7Ct6QFfMv4niQXzFz98gMfes8IqFS3wPZskVw",
    'oauth_access_token_secret' => "l9IwoQwigtSdPDeCEbGyAwpZRaKTauoadkaAQMX2S825y",
    'consumer_key'              => "knNRrL3NvT8nAcm1sZIPR2x7I",
    'consumer_secret'           => "r5abHpXQYG1GqH4Q9LALlL4Tdr660z9Cl34rAd3ZpkDlFIcodH"
);

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
$api_response = $twitter->setGetfield('?' . $_SERVER['QUERY_STRING']) // NEEDS TO BE SANITISED IN PRODUCTION VERSION
    ->buildOauth($url, $requestMethod)
    ->performRequest(); 

