<?php
$link = new mysqli('localhost', 'php', 'php', 'abhinav');
if($link->connect_errno)
{ die ("Connection unsuccessful");
}
else
{ echo "Connection successful";
}
$value=5;
$name=$_POST['fname'];
$email=$_POST['email'];
$rating=$_POST['group1'];
$remarks=$_POST['remark'];
if($rating=="*****")
{$value=5;}
else if($rating=="****")
{$value=4;}
else if($rating=="***")
{$value=3;}
else if($rating=="**")
{$value=2;}	
else if($rating=="*")
{$value=1;}
$link->query("INSERT INTO Respond (username,email,rating,remarks) VALUES ('$name','$email','$value','$remarks')");
$link->close();
?> 	
