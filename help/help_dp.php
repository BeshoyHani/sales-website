<?php

session_start();

	
		$message = $_POST["message"] ;

	
		$conn =  mysqli_connect('localhost' ,'root' ,'123456' );

		mysqli_select_db($conn , 'useraccounts'); 

		$reg = "insert into users (name,phone,email,password,message) values ('$name','$phone','$email','$password','$message')";
		mysqli_query($conn , $reg);
		
		echo "DONE";
?>