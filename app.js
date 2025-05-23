const BTNenviar = document.getElementById('enviar')
const produtoMercado = document.getElementById('produto')
const produtoPreco = document.getElementById('preco')
const lista = document.getElementById('lista')
const selecao = document.getElementById('categoria')
const avisos = document.getElementById('avisos')

function BTNClK() {
    BTNenviar.addEventListener('click', function (event) {
        event.preventDefault();
        let preCO = produtoPreco.value
        let categ = selecao.value
        let product = produtoMercado.value
        if (preCO == '' || product == '') {
            let aviso = document.createElement("div")
            aviso.innerHTML = `
            <h1 id='avisado'> NEM UM CAMPO PODE ESTAR VAZIO! </h1>
            `
            avisos.append(aviso)
        }
        else {
            let listaItens = document.createElement("div")
            listaItens.innerHTML = `
        <li> produto: ${product} , preço: $ ${preCO}, categoria: ${categ} </li>
        `
            lista.append(listaItens)
        }
    })
}

BTNClK()