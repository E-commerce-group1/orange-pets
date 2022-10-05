<?php

require_once("../model/database.php");

$database = new Database();

$id = $_POST['id'];

$result = $database->getAllProductById((int)$id, 'order_details');

print_r(json_encode($result));
