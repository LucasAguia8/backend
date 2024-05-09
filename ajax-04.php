<?php
$filename = "txt/clientes2.csv";

//tenta abrir o arquivo
$file = fopen($filename, "r");

// verifica se o arquivo foi aberto
if ($file) {
   // criar array "clientes" vazio
   $aClientes = [];
    // cria cabeçalho vazio
    $header = null;
   // processa as linhas do arquivo
   while (($data = fgetcsv($file,1000,";")) !== FALSE) {
        //cria o header a partir da primeira linha do arquivo CSV
        if($header==null){
            $header = $data;
            continue;
        }
        //cria um array associativo para cada linha
        $newdata = [];
        for ($i=0; $i<sizeof($data); $i++) {
            $newdata[$header[$i]]=$data[$i];
        }
        // adicionar $data ao array "clientes"
        array_push($aClientes, $newdata);
   }
   // transforma o array associativo em JSON
   $json = json_encode($aClientes);
   // mandar o JSON para quem fez a requisição
   print($json);
   //fechar arquivo
   fclose($file);
}
?>