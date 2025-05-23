const BTNenviar = document.getElementById('enviar')
const produtoMercado = document.getElementById('produto')
const produtoPreco = document.getElementById('preco')
const lista = document.getElementById('lista')
const selecao = document.getElementById('categoria')
const avisos = document.getElementById('avisos')
const form = document.getElementById('forms')

function BTNClK() {
    BTNenviar.addEventListener('click', function (event) {
        event.preventDefault();
        let preCO = produtoPreco.value
        let categ = selecao.value
        let product = produtoMercado.value
        let list = lista.value
        if (list === 'Alimentos' && categ === 'Alimentos') {
            avisos.remove()
            let listaItens = document.createElement("div")
            listaItens.innerHTML = `
        <li id='${categoria}'> produto: ${product} - preço: $ ${preCO} - categoria: ${categ} </li>
        `
            let alimento = document.getElementById('alimentos')
            alimento.style.propriedade(`#lista {
                background-color: yellow;
              }`)
        }

        if (preCO < 1) {
            let invalido = document.createElement('div')
            invalido.innerHTML = `
                <h1> o produto não pode ser igual a zero!!</h1>
                `
            avisos.append(invalido)
        }

        if (product == '' || preCO == '') {
            let aviso = document.createElement("div")
            aviso.innerHTML = `
            <h1 id='avisado'> NEM UM CAMPO PODE ESTAR VAZIO! </h1>
            `
            avisos.append(aviso)
        }
        else if (preCO != 0) {
            avisos.remove()
            let listaItens = document.createElement("div")
            listaItens.innerHTML = `
        <li id ='${categ}'> produto: ${product} - preço: $ ${preCO} - categoria: ${categ} </li>
        `
            lista.append(listaItens)
        }
        form.reset()
    })

}

BTNClK()