<?php 

include 'script_con.php';

$query_date = "SELECT DATE_FORMAT(NOW(), '%d/%m/%Y') AS date_now";
$date_result = $con->query($query_date);
if ($date_result->num_rows > 0) {
    $cur_date = $date_result->fetch_assoc();
    $sys_date = $cur_date['date_now'];
} else {
    $sys_date = "WARNING: current date cannot be fetched";
}

$query_time = "SELECT TIME_FORMAT(NOW(), '%h:%i %p') AS time_now";
$time_result = $con->query($query_time);
if ($time_result->num_rows > 0) {
    $cur_time = $time_result->fetch_assoc();
    $sys_time = $cur_time['time_now'];
} else {
    $sys_time = "WARNING: current time connot be fetched";
}

