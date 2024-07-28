/* Conectando os dados do form#dados com o as divs dos .cardfrent e .cardatras */


//Vinculando #iname com #nomepessoa
var iname = document.getElementById('iname')

iname.addEventListener('input', function(){
    var nomepessoa = document.getElementById('nomepessoa')
    nomepessoa.innerHTML = iname.value
})

//Vinculando #inumerocard com #numero
var inumerocard = document.getElementById('inumerocard')
inumerocard.addEventListener('input', function(){

    var valor = this.value.replace(/\s+/g, '');
    var valorFormatado = valor.match(/.{1,4}/g)?.join(' ') || ''

    this.value = valorFormatado

    var numero = document.getElementById('numero')
    numero.innerHTML = valorFormatado
})

//Vinculando #imes com #mes*/
var imes = document.getElementById('imes')
imes.addEventListener('input', function(){
    var mes = document.getElementById('mes')
    mes.innerHTML = imes.value
})

//Vinculando #iano com #ano
var iano = document.getElementById('iano')
iano.addEventListener('input', function(){
    var ano = document.getElementById('ano')
    ano.innerHTML = iano.value
})

//Vinculando #icvc com #codigocvc
var icvc = document.getElementById('icvc')
icvc.addEventListener('input', function(){
    var codigocvc = document.getElementById('codigocvc')
    codigocvc.innerHTML = icvc.value
}) 


/* Adicionando as bordas vermelhas e mensagem de erro */
function submitForm() {
    
    var campocompleto = true
    var letras = /[a-zA-Z]/
    var erronumero1 = letras.test(inumerocard.value)
    var erronumero2 = letras.test(iano.value)
    var erronumero3 = letras.test(imes.value)
    var erronumero4 = letras.test(icvc.value)

    //Nome da pessoa
    if (iname.value==''){
        iname.style.border='1px solid hsl(0, 66%, 54%)'
        campocompleto = false
        document.getElementById('erro1').style.display='block'
    } else{
        iname.style.border=''
        document.getElementById('erro1').style.display = 'none'
    }

    //Numero Cartão
    if (inumerocard.value == '') {
        inumerocard.style.border = '1px solid hsl(0, 66%, 54%)'
        campocompleto = false
        document.getElementById('erro2').style.display = 'block'
    } else {
        inumerocard.style.border = ''
        document.getElementById('erro2').style.display = 'none'
    }

    if (erronumero1 == true) {
        inumerocard.style.border = '1px solid hsl(0, 66%, 54%)'
        campocompleto = false
        document.getElementById('erro2i').style.display = 'block'
    } else {
        document.getElementById('erro2i').style.display = 'none'
    } 

    //mes
    if(imes.value==''){
        imes.style.border='1px solid hsl(0, 66%, 54%)'
        campocompleto = false
        document.getElementById('erro3').style.display='block'}
    else{
        imes.style.border=''
        document.getElementById('erro3').style.display = 'none'
    }

    if (erronumero3 == true) {
        imes.style.border = '1px solid hsl(0, 66%, 54%)'
        document.getElementById('erro3i').style.display = 'block'
        campocompleto = false
    } else {
        document.getElementById('erro3i').style.display = 'none'
    }  

    //Ano
    if(iano.value==''){
        iano.style.border='1px solid hsl(0, 66%, 54%)'
        campocompleto = false
        document.getElementById('erro3').style.display='block'}
    else{
        iano.style.border=''
        document.getElementById('erro3').style.display = 'none'
    }

    if (erronumero2 == true) {
        iano.style.border = '1px solid hsl(0, 66%, 54%)'
        document.getElementById('erro3ii').style.display = 'block'
        campocompleto = false
    } else {
        document.getElementById('erro3ii').style.display = 'none'
    } 

    //CVC
    if (icvc.value==''){
        icvc.style.border='1px solid hsl(0, 66%, 54%)'
        campocompleto = false
        document.getElementById('erro4').style.display='block'
    } else{
        icvc.style.border=''
        document.getElementById('erro4').style.display = 'none'
    }

    if (erronumero4 == true) {
        icvc.style.border = '1px solid hsl(0, 66%, 54%)'
        document.getElementById('erro4i').style.display = 'block'
        campocompleto = false
    } else {
        document.getElementById('erro4i').style.display = 'none'
    } 

    //Garantir que a pagina nao atualize
    if (!campocompleto) {
        event.preventDefault()
    }

    //Mostrar o campo de completo quando os dados estiverem completados
    if(campocompleto){
        document.getElementById('dados').style.display='none'
        document.getElementById('completed').style.display='flex'
    }else{
         document.getElementById('dados').style.display='flex'
        document.getElementById('completed').style.display='none'
    }
}
