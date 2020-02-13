<?php

session_start(); //1To create a temporary file on the server when registered


		//Here I'll be connected with the database
		//mysqli_connect opens a new connection to the MySQL server
		//parameters : server name , username , password 
		$conn =  mysqli_connect('localhost' ,'root' ,'123456' );

		//To select which database u want to use and takes 2 parameters connection and dpname
		mysqli_select_db($conn , 'useraccounts');

		//Here I defined 4 variables to recieve the data and store it in those variables
		$name 		= $_POST["name"] ;
		$phone		= $_POST["phone"] ;
		$email		= $_POST["email"] ;
		$password   = $_POST["password"] ;

		//To Determine if the emeail is exited previously or not ==========
		$s = "select * from users where email = '$email'  " ;

		//To perform a query against the database and it takes 2 parameters :connection and query
		$result = mysqli_query($conn , $s) ;

		//To return The number of times that the email appeared in the database 
		$num = mysqli_num_rows($result) ;
		
	
	if($num==1) //if the email enterd is existed in the database 
		{
			
 			echo "The Email is already taken";
 			//echo '<script type="text/javascript">alert("The Email is already taken!");</script>';
    		 
		}
		else
		{
			//Here I'll insert all the data into the table of the database 
		$reg = "insert into users (name,phone,email,password) values ('$name','$phone','$email','$password')";
		mysqli_query($conn , $reg);

		header('location:home.php') ; 
		}

	
?>