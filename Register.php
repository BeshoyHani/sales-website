<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>

    <div class="loginbox">

        <img src="log.png" class="log">
        <h1>Register Here</h1>

        <form action="form.php" method="post">
            <p><br></p>               
            <input type="text" pattern="^[a-z A-Z 0-9 _ ]{5,}$"  name="name" placeholder="Enter Your Name"required>
            
            <p><br></p>
            <input type="text"  pattern="^[ 0-9 _ ]{11,}$" name="phone" placeholder="Enter Phone Number"required>

            <p><br></p>
            <input type="text" pattern="^[a-z A-Z 0-9  _  ]+@+[a-z]+[.]+[a-z]+$" name="email" placeholder="Enter Your Email"required>

            <p><br></p>
            <input type="password"  pattern="^[a-z A-Z 0-9 _ ]{5,}$" name="password" placeholder="Enter Password"required>

            <input type="submit" name="create" value="Register"><br>

        </form>



</body>

</html>