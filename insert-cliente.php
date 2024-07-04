<?php 
require_once("conexao-bd.php");
// essa linha de cima é como se eu esticesse carregando o arquivo conexao-bd.php aqui dentro

print_r($_REQUEST);
//nos estamos printando para ver o que tem no $_REQUEST
$request = (object) $_REQUEST;
//o $_REQUEST que é um vetor vira um objeto.

try{
    $stmt = $conn->prepare("INSERT INTO cliente (nome, email) VALUES(?,?)");
    //Aqui, estamos preparando uma consulta SQL para selecionar todos os registros da tabela “cliente”.
    //Em seguida, executamos a consulta com $stmt->execute();.
    $stmt->execute([$request->nome,$request->email]);

} catch(PDOException $e) {
    //Isso captura qualquer exceção do tipo PDOException que possa ocorrer durante a execução do código.
    //Se ocorrer um erro, a mensagem de erro associada será armazenada na variável $e.
    echo "Error: " . $e->getMessage();
    //Aqui, estamos exibindo a mensagem de erro no formato “Error: [mensagem de erro]”.
    //Isso ajuda a depurar problemas relacionados ao banco de dados.
    var_dump($e); // Exibe detalhes do objeto PDOException
    print_r($e); // Exibe detalhes do objeto PDOException em formato legível
}
$conn = null;
//Finalmente, estamos fechando a conexão com o banco de dados, definindo a variável $conn como nula.
?>