<?php 
session_start() ;
?>

<!DOCTYPE html>
<html> 
    <head>
        
        <meta charset="utf-8" />
        
        <link href="home_style.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <script src="Untitled-1.js" type="text/javascript"></script>
       
    </head>
 <body>
            
     <header>
         <p class="logo">Gamni</p>
          <input type="image" class="searchBtn" src="images/search.png">
         <input type="text" class="searchTb" placeholder="Search">
     </header>
        
     <nav>
         <ul>
       <li> <a href="home.php" >Home</a></li>
       <li> <a href="" >categories</a>
        <ul >
                                    
                <li><a href="all.html" >mobiles</a></li>
                <li><a href="laptops/all laptops.html" >laptops</a></li>
                <li><a href="CAMERAS/all CAMERAS.html" >Cameras</a></li>
                <li><a href="others.html" >others</a></li>
            </ul>
        </li>
        <li> <a href="" >my_account</a></li>
        <li><a href="help/help.php" >help</a></li>
            <li><a href="about.html" >About us</a></li>
			 <li> <a href="admin.html" >Control_Site</a></li>
                <li> <a href="logout.php" >Log out</a> </li></ul>
     </nav>
	 <br>
	 <br>
	 
	 <fieldset class="fieldHome">
		<legend>Mobiles</legend>
		 <div class="all">
		<div class="photo">
			<img src="images/A6.jpg" >
			<div class="desc">Samsung A6 <br>6000 LE</div>
		</div>
	 </div>
	 <div class="all">
		<div class="photo">
			<img src="images/$_37.JPG" >
			<div class="desc">Huawei P9<br>4777 LE</div>
		</div>
	 </div>
	 <div class="all">
		<div class="photo">
			<img src="images/Samsung-Galaxy-J6-4.jpg" >
			<div class="desc">Samsung J6 <br>3999 LE</div>
		</div>
	 </div>
	 <div class="all">
		<div class="photo">
			<img src="images/S8-Blue-600x655.jpg" >
			<div class="desc">Samsung S8<br>11099</div>
		</div>
	 </div>
	 <div class="all">
		<div class="photo">
			<button class="more" type="button">
				<a href="all.html" >MORE</a> 
			</button>
			
		</div>
	 </div>
	 </fieldset>
	<br>
	 <fieldset class="fieldHome">
		<legend>LapTop</legend>
		 <div class="all">
		<div class="photo">
			<img src="images/dell1.jpg" >
			<div class="desc">Dell Inspiron<br>10099 LE</div>
		</div>
	 </div>
	 <div class="all">
		<div class="photo">
			<img src="images/s-l6400.jpg" >
			<div class="desc">HP pro<br>12977 LE</div>
		</div>
	 </div>
	 <div class="all">
		<div class="photo">
			<img src="images/s-l16005.jpg" >
			<div class="desc">Lenovo IdeaPad 330 <br>13999 LE</div>
		</div>
	 </div>
	 <div class="all">
		<div class="photo">
			<img src="images/s-l16080.jpg" >
			<div class="desc">Lenovo 520<br>12077</div>
		</div>
	 </div>
	 <div class="all">
		<div class="photo">
			<button class="more" type="button">
				<a href="laptops/all laptops.html" >MORE</a> 
			</button>
			
		</div>
	 </div>
	 </fieldset>
	 <br>
	 <fieldset class="fieldHome">
		<legend>Electronics</legend>
		 <div class="all">
		<div class="photo">
			<img src="images/s-l640.jpg" >
			<div class="desc">Nikon Camera<br>1099 LE</div>
		</div>
	 </div>
	 <div class="all">
		<div class="photo">
			<img src="images/s-l1600.jpg" >
			<div class="desc">Sony Camera<br>1977 LE</div>
		</div>
	 </div>
	 <div class="all">
		<div class="photo">
			<img src="images/s-l55200.jpg" >
			<div class="desc">LCD Screen <br>13999 LE</div>
		</div>
	 </div>
	 <div class="all">
		<div class="photo">
			<img src="images/s-l160000.jpg" >
			<div class="desc">X box <br>3077</div>
		</div>
	 </div>
	 <div class="all">
		<div class="photo">
			<button class="more" type="button">
				<a href="CAMERAS/all CAMERAS.html" >MORE</a> 
			</button>
			
		</div>
	 </div>
	 </fieldset>
	 
	<div class="last">
		&copy; Our Team At Fcis 2019
		<br>
		09000188
		<br>
		<a href="http://cis.asu.edu.eg/" target="blank">FCIS</a>
	</div>
	</body>
</html>
