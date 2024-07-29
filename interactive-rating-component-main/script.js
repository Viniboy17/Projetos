var esc = document.getElementById('esc')
var form = document.getElementById('form')
var tudo1 = document.getElementById('tudo1')
var tudo2 = document.getElementById('tudo2')

function submit(){
    var selecion = form.querySelector('input[name="escolha"]:checked')
    if(selecion){
        tudo1.style.display='none'
        tudo2.style.display='block'
        esc.innerText = selecion.nextElementSibling.innerText;
    }else{
        alert('Choose one of the options')
    }
}