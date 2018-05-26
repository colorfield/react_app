#!/usr/local/bin/php
<?php

$test = shell_exec('yarn run build --color=always');
echo $test;
$js = shell_exec('ls build/static/js/');
$css = shell_exec('ls build/static/css/');

$js = explode("\n", $js)[0];
$css = explode("\n", $css)[0];

echo "\n$js\n$css\n\n";

shell_exec("mv build/static/js/{$js} ../dist/react_app.js");
shell_exec("mv build/static/css/{$css} ../../css/dist/react_app.css");