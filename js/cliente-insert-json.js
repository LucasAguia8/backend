/*versão 1
document.addEventListener("submit", (e) => {
    let data = {
        codigo : document.getElementById("inCodigo").Value,
        nome   : document.getElementById("inNome").value,
        email  : document.getElementById("inEmail").value,
    };
});
*/
//versão 2
document.addEventListener("submit", (e) => {
    const form = document.querySelector("form");
    let cliente = {
        codigo: form.inCodigo.value,
        nome  : form.inNome.value,
        email : form.inEmail.value,
    };
    console.log(cliente);
    e.preventDefault();
    // os dois codigos acima são exatamente a mesma coisa.

    const req = new XMLHttpRequest();
    req.onload = function () {
        if (req.status == 200) {
            //let resp = JSON.parse(this.responseText);
            let rep = this.responseText;
        }
        else {
            alert(`Erro: ${req.status} ${req.statusText}`);
        }
    }
    req.open("POST", "cliente-insert.php");
    req.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    req.send(JSON.stringify(cliente));
});


