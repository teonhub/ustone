<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "phpmailer/src/exception.php";
    require "phpmailer/src/phpmailer.php";

    $mail = new PHPMailer(true);
	
    $mail->CharSet = "UTF-8";
    $mail->IsHTML(true);

    $name = $_POST["name"];
	$phone = $_POST["phone"];
    $email = $_POST["email"];
    $commodity = $_POST["commodity-name"];
	$email_template = "sender-tpl.html";

    $body = file_get_contents($email_template);
	$body = str_replace('%name%', $name, $body);
	$body = str_replace('%phone%', $phone, $body);
    $body = str_replace('%email%', $email, $body);
    $body = str_replace('%commodity-name%', $commodity, $body);

    $mail->addAddress("under-stone@yandex.ru");
	$mail->setFrom("order@under-stone.ru");
    $mail->Subject = "Understone: заявка с сайта";
    $mail->MsgHTML($body);

    if (!$mail->send()) {
        $message = "Ошибка отправки";
    } else {
        $message = "Заявка отправлена";
    }
	
	$response = ["message" => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>