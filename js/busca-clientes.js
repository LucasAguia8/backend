const btn = document.getElementById("btn");
const btnIncluirCliente = document.getElementById("btnIncluirCliente");
const btnIncluir = document.getElementById("btnIncluir");
const content = document.getElementById("content");

btnIncluirCliente.addEventListener("click", (e) => {
   const frmIncluirCliente = document.getElementById("frmIncluirCliente");
   frmIncluirCliente.style.setProperty("display", "block");
});

btnIncluir.addEventListener("click", (e) => {
   const xhr = new XMLHttpRequest();
   let cliente = new FormData(document.getElementById("frmIncluirCliente"));
   xhr.onload = function () {
      if (xhr.status == 200) {
         alert(xhr.responseText);
         alert("Inclussão Ok!");
         buscaClientes();
         const frmIncluirCliente = document.getElementById("frmIncluirCliente");
         frmIncluirCliente.style.setProperty("display", "none");
         frmIncluirCliente.reset();
      } else {
         alert("Erro na Inclussão");
      }
   }
   xhr.open("POST", "insert-cliente.php");
   // o metodo POST é o metodo para incluir alguma coisa com uma url especifica
   xhr.send(cliente);
   e.preventDefault();
});

btn.addEventListener("click", buscaClientes);
document.addEventListener("DOMContentLoaded", buscaClientes);

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
         //console.log(vetorClientes);
         //console.log(typeof (vetorClientes));
         // buscar registros de clientes
         for (let cliente of vetorClientes) {
            html += "<tr>";
            html += `<td>${cliente.codigo}</td>`;
            html += `<td>${cliente.nome}</td>`;
            html += `<td>${cliente.email}</td>`;
            html += `<td>`;
            html += `<button class="btn btn-info" onClick="showClienteUpdForm(${cliente.codigo})"><i class="fa-solid fa-pencil"></i></button>`;
            html += `<button class="btn btn-danger" onClick="delCliente(${cliente.codigo})"><i class="fa-solid fa-trash-can"></i></button>`;
            html += `</td>`;
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

function delCliente(id){
   if(confirm("Confirma a exclusão do registro?") == true){
      let data = new FormData();
      data.append("id", id);
      for (let [k,v] of data) {
         console.log(`${k}:${v}`)
      }
      let xhr = new XMLHttpRequest();
      xhr.onload = function(){
         if(xhr.status == 200){
            //alert(xhr.responseText);
            buscaClientes();
         }
         else{
            alert(`Erro: ${xhr.status} ${xhr.statusText}`);
         }
      }
      xhr.open("POST","cliente-delete.php");
      xhr.send(data);
   }
};