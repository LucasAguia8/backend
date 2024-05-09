<?php
//recebe dados da requisicao   print(file_get_contents('php://input'));
$cliente = json_decode(file_get_contents('php://input'));

//nome do arquivo CSV
$filename = "txt/clientes2.csv";

//tenta abrir o arquivo no modo "append" (incluir no final)
$file = fopen($filename, "a");

//verifica se o arquivo foi aberto
if ($file) {
    $linha = "$cliente->codigo;$cliente->nome;$cliente->email\n";
    fwrite($file,$linha);
    fclose($file);
}
?>