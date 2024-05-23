const btn = document.getElementById("btn");
const content = document.getElementById("content");

btn.addEventListener("click", buscaClientes());
document.addEventListener("load", buscaClientes());

function buscaClientes() {
   const req = new XMLHttpRequest();
   req.onload = function () {
      if (req.status == 200) {
         //Verifica se o status da requisição é 200 (OK).
         //Se for, o código dentro deste bloco será executado.
         let html = "<table class='table table-bordered table-hover table-sm'>";
         //Cria uma string HTML que representa o início de uma tabela.
         //A classe CSS “table-bordered” adiciona bordas à tabela, e “table-hover” torna as linhas interativas.
         html += "<tr><th>Cod</th><th>Nome</th><th>Email</th></tr>";
         //Adiciona uma linha de cabeçalho à tabela com as colunas “Cod”, “Nome” e “Email”.
         const vetorClientes = JSON.parse(this.responseText);
         //Converte a resposta da requisição (provavelmente em formato JSON) para um objeto JavaScript.
         //O objeto resultante contém informações sobre os clientes.
         console.log(vetorClientes);
         console.log(typeof(vetorClientes));
         // buscar registros de clientes
         for (let cliente of vetorClientes) {
            html += "<tr>";
            html += `<td>${cliente.codigo}</td>`;
            html += `<td>${cliente.nome}</td>`;
            html += `<td>${cliente.email}</td>`;            
            html += "</tr>";
         }
         //Esse trecho de código está criando linhas para uma tabela HTML com informações de clientes
         html += "</table>";
         //Isso fecha a tabela HTML, adicionando a tag de fechamento </table>.
         content.innerHTML = html;
         //Aqui, estamos definindo o conteúdo do elemento com o identificador “content” como a string HTML que construímos.
      }
      else {
         alert(`Erro: ${req.status} ${req.statusText}`);
      }
      //Se o status da requisição não for 200 (OK), ele exibirá um alerta com informações sobre o erro, incluindo o código de status e o texto associado.
   }
   req.open("GET", "busca-clientes.php");
   req.send();
   //esse código está solicitando informações do arquivo “busca-clientes.php” no servidor. 
}
