<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "robot";

$motor1 = $_POST['slider1'];
$motor2 = $_POST['slider2'];
$motor3 = $_POST['slider3'];
$motor4 = $_POST['slider4'];
$motor5 = $_POST['slider5'];
$motor6 = $_POST['slider6'];

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";



if (isset($_POST['turned'])) {
  
  $last = "SELECT * FROM powering WHERE id=(SELECT max(id) FROM powering)";

  //echo $last;
  $result = $conn->query($last);
  $row = $result->fetch_assoc();
  if ($row["Powered"] == 1) {
    $sql = "INSERT INTO powering (Powered) VALUES (0)";
  } else{
    $sql = "INSERT INTO powering (Powered) VALUES (1)";
  }
  
  if ($conn->query($sql) === TRUE) {
    echo "<br>Executed Successfully";
  } else {
    echo "Error: " . $last . "<br>" . $conn->error;
  }

} else if (isset($_POST['save'])){
  $sql = "INSERT INTO motors (Motor1,Motor2,Motor3,Motor4,Motor5,Motor6) VALUES ($motor1,$motor2,$motor3,$motor4,$motor5,$motor6)";
  if ($conn->query($sql) === TRUE) {
    echo "<br>Executed Successfully";
  } else {
    echo "Error: " . $last . "<br>" . $conn->error;
  }
}
header("Location:localhost:8080/project/index.html");
$conn->close();

?> 