<?php

include 'login_con.php';

session_start();
session_unset();
session_destroy();

header("location: login");