<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hens";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Mengecek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


    // Mengambil data dari databse
    $result = mysqli_query($conn, "SELECT * FROM contact ORDER BY id DESC");

?>

<html>
    <head>
        <title>Homepage</title>
    </head>

    <body>
        <a href="Contact.php">kembali ke halaman Contact</a> 
        
        <table width='88%' border="1">
            <tr>
                <th>Name</th> <th>Email</th> <th>Contact Number</th> <th>Message</th>
            </tr>

            <?php
                while($user_data = mysqli_fetch_array($result)){
                    echo "<tr>";
                    echo "<td>" . $user_data['name'] . "</td>";
                    echo "<td>" . $user_data['email'] . "</td>";
                    echo "<td>" . $user_data['contact_number'] . "</td>";
                    echo "<td>" . $user_data['message'] . "</td>";
                

                }

            ?>     

        </table>

    </body>

</html>