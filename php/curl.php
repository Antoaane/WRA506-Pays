<?php

$url = 'https://restcountries.com/v3.1/all';

$curl = curl_init($url);

curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($curl);
if (curl_error($curl)) {
    curl_error($curl);
}

curl_close($curl);

file_put_contents("../countries.json", $result);