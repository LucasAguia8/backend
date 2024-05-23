<?php
catch(PDOException $e) {
  $mensagemErro = "Erro no PDO: " . $e->getMessage() . "\n" . var_export($e, true);
  file_put_contents('error.log', $mensagemErro, FILE_APPEND);
}
?>