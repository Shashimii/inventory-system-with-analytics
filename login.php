<?php 

include 'connections.php';

session_start();

//redirect Query if there is already a active session

// Admin
if (isset($_SESSION['admin_name'])) {
    // Redirect to the main page or dashboard if a session is already active
    header("location: dashboard");
    exit; // Ensure the script stops executing after the header redirect
} 
// User
else if (isset($_SESSION['user_name'])) {
    // Redirect to the main page or dashboard if a session is already active
    header("location: location: dashboard");
    exit; // Ensure the script stops executing after the header redirect
}
// Inventory User
else if (isset($_SESSION['inventory'])) {
    // Redirect to the main page or dashboard for inventory users
    header("location: location: dashboard");
    exit; // Ensure the script stops executing after the header redirect
}


//login query
if(isset($_POST['submit'])){
    $user = mysqli_real_escape_string($connections, $_POST['user']);
    $pass = ($_POST['password']);

    $select = "SELECT * FROM users WHERE user_name = '$user' && user_password = '$pass'";
    $result = mysqli_query($connections, $select);

    if(mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_array($result);

        // Admin login
        if($row['user_type'] == 'Admin'){
            $_SESSION['admin_name'] = $row['user_name'];
            header('Location: dashboard');

        // User login
        } else if ($row['user_type'] == 'Inventory User'){
            $_SESSION['user_name'] = $row['user_name'];
            header('Location: dashboard');

        // Inventory login
        } else if ($row['user_type'] == 'Inventory Staff'){
            $_SESSION['inventory_name'] = $row['user_name'];
            header('Location: dashboard'); 

        } else {
            $err[] = 'Incorrect username or pin';
        }
    } else {
        $err[] = 'Incorrect username or pin';
    }
}

//Error handling echo on alert script
if(isset($err)){
    echo '<script>';
    foreach($err as $error){
        echo 'Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "' . $error . '"
          });';
    };
    echo '</script>';
}


?>

<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="font6/css/all.css">
        <script defer src="js/bootstrap.bundle.min.js"></script>
        <script defer src="js/jquery-3.7.0.js"></script>
        <link rel="stylesheet" href="style.css">
        <title>Login</title>
    </head>

    <body style=" margin: 0; padding: 0; background-color: #111315; color: black;">
    
    <!--- grid container --->
    <div class="register-container">
    <!--- left side --->
        <div class="side">
            <div class="overlay">
                <div class="side-content">
                </div>
            </div>
        </div>
    <!--- right side --->
        <div class="form">
            <div class="form-content">
                <div class="content-header-login">
                    <div class="logo-container">
                        <img src="assets/logo.jpg" class="logo">
                    </div>
                    <h4>Inventory Management System</h4>
                </div>
                <div class="content-main">
                </div>
                <center>
                <form action ="" method="post">
                    <div class="mb-1">
                    <input class="form-control" type="text" name="user" required placeholder="Username" pattern="[a-zA-Z0-9]+" title="Enter correct Name">
                    </div>
                    <div class="mb-3">
                        <div class="password-field">
                            <input class="form-control" type="password" name="password" id="password-input" pattern="[0-9]{8}" title="Enter correct PIN" required placeholder="PIN">
                        </div>
                    </div>
                    <div class="mb-1">
                    <button type="submit" name="submit" class="btn btn-success">Login</button>
                    </div>
                </form>
                
                <div class="mb-1">
                    <p>Accounts can be only created by the Company Admin contact the company for more info</p>
                </div>
                </center>
                </div>
            </div>
        </div>
    </div>
    </body>

</html>

<style>

body {
    font-family: 'Font1', sans-serif;
}

.i {
    vertical-align: middle;
    line-height: 1px;
    font-size: 35px;
}


/*=== Modal Window Colors ===*/
.modal-content {
    background-color: #263043;
}

input[type="text"] {
    color: black;
}

input[type="number"] {
    color: black;
}

select[name="ad_name"] option {
    color: black;
}

select[name="target_name"] option {
    color: black;
}

select[name="p_quality"] option {
    color: black;
}

.register-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
    "side form";

    height: 100vh;
}

.side {
    grid-area: side;
    background-image: url('assets/client.jpg');
    background-size: cover; 
    background-position: center;
    height: 100vh;
}

.overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
}

.logo-container {
    width: 40%; 
    height: 80%;
    border-radius: 50%; 
    overflow: hidden; 
}

.logo-container img {
    width: 100%;
    height: 100%;
}

.form {
    grid-area: form;
    display: flex;
    justify-content: center;  
    align-items: center;      
    background-color: #F6F1EE;
    max-width: 100%; 

}

.password-field {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 10px; 
}

.form-content {
    display: grid;
    grid-template-rows: 1fr;
    justify-content: center;
    padding: 1px 20px 5px 30px;
    background-color: #F6F1EE;
    width: 390px;

}

.content-header-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


/* Adjustments for smaller screens */
@media screen and (max-width: 600px) {
    .register-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: 
        "form";
    
        height: 100vh;
    }

    .side {
        display: none;
    }

    .form {
        max-width: none;
    }
}

@media screen and (max-width: 400px) {

    .form {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

}



</style>
