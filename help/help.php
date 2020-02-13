<?php
session_start() ;    //To start The Session


?>
<!DOCTYPE html>
<html>

<head>

	<title>Help</title>
	<link rel="stylesheet" type="text/css" href="help_style.css">
	<link rel="stylesheet" type="text/css" href="../css/productSlide.css">

</head>

<body>

	   <header>
         <p class="logo">Gamni</p>
          <input type="image" class="searchBtn" src="search.png">
         <input type="text" class="searchTb" placeholder="Search">
     </header>
        
     <nav> 
         <ul>
       <li> <a href="../home.php" >Home</a></li>
       <li> <a href="" >categories</a>
        <ul >
                                    
                <li><a href="../all.html" >mobiles</a></li>
                <li><a href="../all laptops.html" >laptops</a></li>
                <li><a href="../CAMERAS/all CAMERAS.html" >Cameras</a></li>
                <li><a href="../others.html" >others</a></li>
            </ul>
        </li>
        <li> <a href="" >my_account</a></li>
        <li><a href="help.php" >help</a></li>
            <li><a href="../about.html" >About us</a></li>
            <li> <a href="../admin.html" >Control_Site</a></li>
                <li> <a href="../logout.php" >Log out</a> </li></ul>
     </nav>

	
	<div class="contact-title">
		<h1>Say Hello</h1>
		<h2>We are always ready to serve you</h2>
	</div>

	<div class="contact-form">


		<form id="contact-form" action="help_dp.php" method="post">


			<h3>Enter Your Message Here</h3>

			<textarea name="message"pattern="^[a-z A-Z 0-9 _ ]{5,}$" class="form-control"  rows="4" required id="abnb"> </textarea><br>

			<input type="submit" name="" class="form-control submit" value="SEND MESSAGE"required>
			
		</form>


	</div>

</html> 