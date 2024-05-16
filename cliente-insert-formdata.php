<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    print_r($_POST);
    // opção 1
    $cliente = new stdClass();
    foreach($_POST as $key => $value) {
        $cliente->$key = $value;
    }
    var_dump($cliente);

    $filename = "txt/clientes.csv";
    $file = fopen($filename, "a"); // abre arquivo modo append
    if ($file) {
        // opção 1 - precisa da linhas 4 a 7 acima
        $linha = "$cliente->codigo;$cliente->nome;$cliente->email\n";
        // opção 2
        //$linha = implode(";",$_POST); 
        fwrite($file,$linha);
        fclose($file);
    }
}
?>