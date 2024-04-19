<?php
// Get the URL of the code to fetch from the query parameters
$url = $_GET['url'];

// Fetch the code from the specified URL
$code = file_get_contents($url);

// Determine the content type based on the file extension
$extension = pathinfo(parse_url($url, PHP_URL_PATH), PATHINFO_EXTENSION);
if ($extension === 'html') {
    header('Content-Type: text/html');
} elseif ($extension === 'css') {
    header('Content-Type: text/css');
} elseif ($extension === 'js') {
    header('Content-Type: application/javascript');
} elseif ($extension === 'php') {
    header('Content-Type: text/plain'); // Set the content type to plain text for PHP code
}

// Return the code
echo $code;
?>
