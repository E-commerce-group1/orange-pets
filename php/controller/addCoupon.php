<?php
require_once("../model/database.php");

$database = new Database();

$name = $_POST['name'];
$discountPercent = $_POST['discountPercent'];
$active = $_POST['active'];

$result = $database->insertIntoDiscountTable($name, (int) $discountPercent,  $active);

print_r(json_encode($result));