<?php $server = "localhost";
$user = "root";
$pass = "";
$dbname = "meubanco";

try {
    $conn = new PDO("mysql:host=$server;dbname=$dbname", $user, $pass);
    //Aqui, estamos criando uma instância da classe PDO para se conectar ao banco de dados.
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //Isso define o modo de tratamento de erros para exceções.
} catch(PDOException $e) {
    //Isso captura qualquer exceção do tipo PDOException que possa ocorrer durante a execução do código.
    //Se ocorrer um erro, a mensagem de erro associada será armazenada na variável $e.
    echo "Error: " . $e->getMessage();
    //Aqui, estamos exibindo a mensagem de erro no formato “Error: [mensagem de erro]”.
    //Isso ajuda a depurar problemas relacionados ao banco de dados.
}
?>