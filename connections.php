<?php 
session_start();

if(!isset($_SESSION['admin_name'])){
    header('location: login');
}

// user config
$sys_user = $_SESSION['admin_name'];

// database config
$con = mysqli_connect ("localhost", "root", "", "imsdatabase");
if (mysqli_connect_errno()) {
    echo "<script>alert('Failed Database Connection: " . mysqli_connect_error() . "');</script>";
}

// date config
$query_date = "SELECT DATE_FORMAT(NOW(), '%m/%d/%Y') AS date_now";
$date_result = $con->query($query_date);
if ($date_result->num_rows > 0) {
    $cur_date = $date_result->fetch_assoc();
    $sys_date = $cur_date['date_now'];
} else {
    $sys_date = "WARNING: current date cannot be fetched";
}
?>


<head>
    <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="node_modules/sweetalert2/dist/sweetalert2.min.css">    
    <script src="node_modules/sweetalert2/dist/sweetalert2.min.js"></script>
    <script src="./js/chart.js"></script>
    <link rel="stylesheet" href="style.css">
    <script defer src="./js/time.js"></script>   
</head>