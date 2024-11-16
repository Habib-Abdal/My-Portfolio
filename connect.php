<?php
// Define variables to store form data
$fullName = "";
$lastName = "";
$email = "";
$phone = "";
$message = "";

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $fullName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['Email'];
    $phone = $_POST['Phone'];
    $message = $_POST['messages'];
    
    // Database connection code sql301.infinityfree.com
    $hostname = 'sql310.infinityfree.com';
    $username = 'if0_36135538';
    $password = 'oX4BPwrT77q'; // Or 'root' if you've set it during installation
    $database = 'if0_36135538_portfolioform';

    $connect = new mysqli($hostname, $username, $password, $database);
    $stmt = $connect->prepare("INSERT INTO form (firstName, lastName, Email, Phone, Messages) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $fullName, $lastName, $email, $phone, $message);
    
    // Execute the query
    if ($stmt->execute()) {
        echo "Data inserted successfully"; // Add this line for verification
        echo "<script>alert('Message Successfully Sent, For Response check your Email.');</script>";
    } else {
        echo "Error: " . $stmt->error; // This line already handles error reporting
    }
    
    // Close statement and connection
    $stmt->close();
    $connect->close();
}
?>