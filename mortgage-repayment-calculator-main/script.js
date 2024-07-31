
// Background color do input rad
function radio_acionado(){
    var escolha = document.getElementById('escolha')
    var irepayment = document.getElementById('irepayment')
    var interestonly = document.getElementById('interestonly')
    var escolha1 = document.getElementById('escolha1')
    var escolha2 = document.getElementById('escolha2')
    if (irepayment.checked) {
        escolha1.style.backgroundColor = 'rgb(233 237 0 / 16%)'
        escolha1.style.border='1px solid rgb(215, 218, 47)'
        escolha2.style.border=''
        escolha2.style.backgroundColor = ''
    } else if (interestonly.checked) {
        escolha2.style.backgroundColor = 'rgb(233 237 0 / 16%)'
        escolha2.style.border='1px solid rgb(215, 218, 47)'
        escolha1.style.border=''
        escolha1.style.backgroundColor = ''
    }
}

// fazendo o calculo e adicionando o resultado na tela
function clicou(){
    var P = parseFloat(document.getElementById('iamount').value)
    var anos = parseInt(document.getElementById('ianos').value)
    var taxa = parseFloat(document.getElementById('iporcentagem').value)
    
    var n = anos * 12 // Número total de pagamentos (meses)
    var r = taxa / 100 / 12 // Taxa de juros mensal
    
    //calculo do pagamento Mensal (M)
    let fator = Math.pow((1+r), n)
    let M = (P * r * fator) / (fator - 1)

    // Exibir resultados
    var valor1 = document.getElementById('valor1')
    var valor2 = document.getElementById('valor2')

    valor1.innerHTML = '£' + M.toFixed(2)
    valor2.innerHTML = '£' + (M * n).toFixed(2)

    //Ativando e desativando tela
    var p2 = document.getElementById('p2')
    var p3 = document.getElementById('p3')
    p2.style.display = 'none'
    p3.style.display = 'block'


    //Adicionando borda vermelha e ativando o span
    var iamount = document.getElementById('iamount')
    var simbolo1 = document.getElementById('isimbolo1')
    var span1 = document.getElementById('span1')
    if(iamount.value===''){
        iamount.style.border='1px solid red'
        simbolo1.style.backgroundColor='red'
        p2.style.display = 'block'
        p3.style.display = 'none'
        span1.style.display = 'block'
    }else{
        iamount.style.border=''
        simbolo1.style.backgroundColor=''
        p2.style.display = 'none'
        p3.style.display = 'block'
        span1.style.display = 'none'
    }

    var ianos = document.getElementById('ianos')
    var simbolo2 = document.getElementById('isimbolo2')
    var span2 = document.getElementById('span2')
    if(ianos.value===''){
        ianos.style.border='1px solid red'
        simbolo2.style.backgroundColor='red'
        p2.style.display = 'block'
        p3.style.display = 'none'
        span2.style.display = 'block'
    }else{
        ianos.style.border=''
        simbolo2.style.backgroundColor=''
        p2.style.display = 'none'
        p3.style.display = 'block'
        span2.style.display = 'none'
    }

    var iporcentagem = document.getElementById('iporcentagem')
    var simbolo3 = document.getElementById('isimbolo3')
    var span3 = document.getElementById('span3')
    if(iporcentagem.value===''){
        iporcentagem.style.border='1px solid red'
        simbolo3.style.backgroundColor='red'
        p2.style.display = 'block'
        p3.style.display = 'none'
        span3.style.display = 'block'
    }else{
        iporcentagem.style.border=''
        simbolo3.style.backgroundColor=''
        p2.style.display = 'none'
        p3.style.display = 'block'
        span3.style.display = 'none'
    }

    var span4 = document.getElementById('span4')
    if(irepayment.checked || interestonly.checked){
        span4.style.display = 'none'
    }else{
        span4.style.display = 'block'
    }
}

