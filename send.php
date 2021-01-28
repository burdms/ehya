<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$formName = $_POST['formName'];
$email = $_POST['email'];
$login = $_POST['login'];
$password = $_POST['password'];

if($formName == "subscribe") {
    $title = "New subscription Ehya";
    $body = "
    <h2>New subscription</h2>
    <b>E-mail:</b> $email
    ";
}elseif($formName == "login") {
    $title = "New login Ehya";
    $body = "
    <h2>New login</h2><br><br>
    <b>Login:</b> $login<br>
    <b>Password:</b> $password
    ";
}

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
// $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'mail@gmail.com'; // Логин на почте
    $mail->Password   = 'password'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mail@gmail.com', 'Sender Name'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('mail@yandex.ru');  
    // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header ('Location: thankyoupage.html');