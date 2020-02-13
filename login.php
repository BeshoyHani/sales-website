<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

<body>

    <div class="loginbox">
        
        <img src="log.png" class="log">
        <h1>Login Here</h1>
         
        <form action="validation.php" method="post">
            <p>E-mail</p>
            <input type="text"  name="email" placeholder="Enter Your Email" required>

            <p>Password</p>
            <input type="password"name="password" placeholder="Enter Password"required>

            <input type="submit" name="" value="Login"><br>
            <br>Don't have an account?<br>
            <a href="Register.php">Sign Up</a>
        </form>

         
    </div>

  

</body>

</html>