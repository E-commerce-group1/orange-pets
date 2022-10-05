<?php

require("../model/database.php");

$database = new Database();

$result = $database->getByTable('order_details');

print_r(json_encode($result));