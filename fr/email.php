<!-- <?php

if(isset($_POST['submit'])){
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$emailFrom = $_POST['email'];
$subject = $_POST['subject'];

    if(empty($firstname) || empty($lastname) || empty($emailFrom) || empty($subject)){
    header("Location: index.php?error=emptyinput#CONTACT ");
    exit();
    }
    elseif (!filter_var($email, FILTER_SANITIZE_EMAIL) ) {
    header("Location: index.php?error=emailnc");
    exit();
    }
    else{
        $emailTo = "asfyit@gmail.com";
        $sus = "Email From asfyit.com website";
        $header = "From this user in asfyit.com website ".$emailFrom;
        $txt = "You have received an e-mail from " .$firstname ." ".$lastname. ".\n\n".$subject;

        mail($emailTo, $sus, $txt, $header);
        header("Location : index.php?mailsend");
    }

}
else{
    header("Location: index.php?nop");
}

?>