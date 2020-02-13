<?php

session_start();

		$email		= $_POST["email"] ;
		$password   = $_POST["password"] ;

	
		$conn =  mysqli_connect('localhost' ,'root' ,'123456' );

		mysqli_select_db($conn , 'useraccounts'); 

		$s = "select * from users where email = '$email' and password= '$password' " ;

		$result = mysqli_query($conn , $s) ;

		$num = mysqli_num_rows($result) ;
		
 		
		
		 
		if($num>0) 
		{
			header('location:home.php') ;//Here IF the email was put previously , the home page would open		
		}
		else
		{
			header('location:login.php') ;
		}
		
		
	
	
?>