document.getElementById('iname').addEventListener('input', function() {
    document.getElementById('nomepessoa').innerHTML = this.value;
});

document.getElementById('inumerocard').addEventListener('input', function() {
    var valor = this.value.replace(/\s+/g, '');
    var valorFormatado = valor.match(/.{1,4}/g)?.join(' ') || '';
    this.value = valorFormatado;
    document.getElementById('numero').innerHTML = valorFormatado;
});

document.getElementById('imes').addEventListener('input', function() {
    document.getElementById('mes').innerHTML = this.value;
});

document.getElementById('iano').addEventListener('input', function() {
    document.getElementById('ano').innerHTML = this.value;
});

document.getElementById('icvc').addEventListener('input', function() {
    document.getElementById('codigocvc').innerHTML = this.value;
});

function submitForm() {
    var iname = document.getElementById('iname');
    var inumerocard = document.getElementById('inumerocard');
    var imes = document.getElementById('imes');
    var iano = document.getElementById('iano');
    var icvc = document.getElementById('icvc');
    var erro = document.getElementById('erro')

    var campos = [iname, inumerocard, imes, iano, icvc];
    var formValido = true;

    campos.forEach(function(campo) {
        if (campo.value === '') {
            campo.classList.add('error-border');
            erro.style.display='block'
            formValido = false;
        } else {
            campo.classList.remove('error-border');
        }
    });

    
}
