<?php 
$server = "localhost";
$user = "root";
$pass = "";
$dbname = "meubanco";

try {
    $conn = new PDO("mysql:host=$server;dbname=$dbname", $user, $pass);
    //Aqui, estamos criando uma instância da classe PDO para se conectar ao banco de dados.
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //Isso define o modo de tratamento de erros para exceções.
    $stmt = $conn->prepare("SELECT * FROM cliente");
    //Aqui, estamos preparando uma consulta SQL para selecionar todos os registros da tabela “cliente”.
    //Em seguida, executamos a consulta com $stmt->execute();.
    $stmt->execute();

    //foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $k=>$v) {
    //    print_r($v);
    //}

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    //A função fetchAll() é usada para buscar todos os resultados da consulta SQL que foi executada anteriormente.
    //O parâmetro PDO::FETCH_ASSOC especifica que os resultados devem ser retornados como um array associativo, onde as colunas da tabela são os índices.
    $json = json_encode($results);
    //Aqui, estamos convertendo o array associativo de resultados em uma string JSON.
    //A função json_encode() transforma os dados em um formato JSON legível.
    print($json);
    //Isso imprime a string JSON na saída (normalmente no navegador ou no console).

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