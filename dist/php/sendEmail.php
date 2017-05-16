<?php
if(isset($_POST['submit'])) {
    $ver = floatval(phpversion());

    $name = HTMLSPECIALCHARS($_POST['name']);
    $msg = HTMLSPECIALCHARS($_POST['user_msg']);
    $FromEmail = HTMLSPECIALCHARS($_POST['email']);
    $subject = HTMLSPECIALCHARS($_POST['subject']);
    
    $headers = '';
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .="From: $From <$FromEmail>\n";
    $headers .="Reply-To: <$FromEmail>\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .="Return-Path: <$FromEmail> \n";
    $headers .="X-Sender: <$FromEmail>\n";
    $headers .="X-Mailer: PHP-$ver \n";
    $headers .="X-Priority: 3\n"; //1 UrgentMessage, 3 Normal    

    $message = '<html> 
       <head> 
          <title>Message</title> 
       </head>
       <body>
          <p><strong>Full name:</strong> ' . $name . '</p>
          <p><strong>E-mail:</strong> ' . $FromEmail . '</p>
      <p><strong>Subject:</strong> ' . $subject . '</p>
          <p><strong>Message:</strong> ' . $msg . '</p>
       </body>
       </html>';
    if (@mail("sljboo@gmail.com", "Private Message", $message, $headers))
        echo 'success';
    else
        echo 'fail';
}
?>
