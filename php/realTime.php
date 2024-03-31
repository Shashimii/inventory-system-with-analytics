<?php 
$con = mysqli_connect ("localhost", "root", "", "imsdatabase");
if (mysqli_connect_errno()) {
    echo "<script>alert('Failed Database Connection: " . mysqli_connect_error() . "');</script>";
}

// time config
$query_time = "SELECT TIME_FORMAT(NOW(), '%h:%i %p') AS time_now";
$time_result = $con->query($query_time);
if ($time_result->num_rows > 0) {
    $cur_time = $time_result->fetch_assoc();
    $sys_time = $cur_time['time_now'];
    echo $sys_time;
} else {
    $sys_time = "WARNING: current time connot be fetched";
}