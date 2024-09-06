<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hensworth Furniture - Contact Us</title>
    <link rel="stylesheet" href="ContactCSS.css">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="top-bar">
            <div class="logo">
                <img src="logo.png" alt="Hensworth Logo">
            </div>
                <div>
                    <nav>
                        <ul>
                            <li><a href="Home.html"> Home</a></li>
                            <li><a href="#"> Shop</a></li>
                            <li><a href="#"> New Arrival</a></li>
                            <li><a href="#"> Sale</a></li>
                            <li><a href="Contact.php"> Contact Us</a></li>
                            <li><a href="About.html"> About Us</a></li>
                            <li><a href="#"> Account</a></li>
                        </ul>
                    </nav>
                </div>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Contact Us Section -->
        <section class="contact-us">
            <h1>CONTACT US</h1>
            <div class="contact-form">
                <form action="#" method="post">
                    <div>
                        <label for="name">Nama</label>
                        <br>
                        <input type="text" id="name" name="name" required>
                        <br>
                        <br>

                        <label for="email">Email</label>
                        <br>
                        <input type="email" id="email" name="email" required>
                        <br>
                        <br>

                        <label for="contact-number">Contact Number</label>
                        <br>
                        <input type="text" id="contact-number" name="contact-number" required>
                        <br>
                        <br>
                        <button type="submit" name="send">Send</button>
                    </div>

                    <div>
                        <label for="message">Message</label>
                    <br>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                </form>
            </div>
        </section>
    </main>

    <?php
    if (isset($_POST['send'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $contact_number = $_POST['contact-number'];
        $message = $_POST['message'];

        include_once("connect.php");

        $results = mysqli_query($conn, "INSERT INTO contact(name,	email,	contact_number,	message	) values ('$name', '$email', '$contact_number', '$message')");
    
    }
        

    ?>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-left">
                <p>HENWORTH COMPANY COPYRIGHT 2020</p>
            </div>
            <div class="footer-right">
                <div class="social-icons">
                    <a href="#">INSTAGRAM  </a>
                    <a href="#">FACEBOOK</a>
                    <a href="#">TWITTER</a>
                </div>
                <p>CONTACT US: XXXXXXXXX</p>
            </div>
        </div>
    </footer>
</body>
</html>
