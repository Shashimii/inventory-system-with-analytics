<?php 
$connection = mysqli_connect('localhost', 'root', '', 'imsdatabase');

if (mysqli_connect_errno()) {
    echo "Database Connection Fail" . mysqli_connect_error();
}
