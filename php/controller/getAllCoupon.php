<?php

require("../model/database.php");

$database = new Database();

$result = $database->getByTable('discount');

print_r(json_encode($result));