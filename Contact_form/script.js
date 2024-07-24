// Background color do input radio
function radio_acionado(){
    var igeneral = document.getElementById('igeneral');
    var isupport = document.getElementById('isupport');
    var query1 = document.getElementById('query1');
    var query2 = document.getElementById('query2');
    if (igeneral.checked) {
        query1.style.backgroundColor = 'hsl(148, 38%, 91%)';
        query2.style.backgroundColor = '';
    } else if (isupport.checked) {
        query2.style.backgroundColor = 'hsl(148, 38%, 91%)';
        query1.style.backgroundColor = '';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário e redirecionamento
        em_branco(); // Chama a função de validação
    });});


//Borda Vermelha e nome vermelho do campo em branco
function em_branco(){
var inome1 = document.getElementById('inome1')
var inome2 = document.getElementById('inome2')
var iemail = document.getElementById('iemail')
var imsg = document.getElementById('imsg')
var iconsent = document.getElementById('iconsent')
var capocompleto = true


inome1.addEventListener('mouseout',saiu)
inome2.addEventListener('mouseout',saiu)
iemail.addEventListener('mouseout',saiu)
imsg.addEventListener('mouseout',saiu)
iconsent.addEventListener('click', clicado)
igeneral.addEventListener('click',clicado)
isupport.addEventListener('click',clicado)

//First Name
if(inome1.value==''){
    inome1.style.border='1px solid hsl(0, 66%, 54%)'
    document.getElementById('error-inome1').innerText = 'This field is required';
    capocompleto = false  
} 

//Last Name
if(inome2.value==''){
    inome2.style.border='1px solid hsl(0, 66%, 54%)'
    document.getElementById('error-inome2').innerText = 'This field is required';
    capocompleto = false
}

//Email Address 

if (iemail.value === '') {
    iemail.style.border = '1px solid hsl(0, 66%, 54%)';
    document.getElementById('error-iemail').innerText = 'This field is required';
    capocompleto = false;
} 

else if (iemail.value === '@gmail.com') {
    iemail.style.border = '1px solid hsl(0, 66%, 54%)';
    document.getElementById('error-iemail').innerText = 'Need the full email';
    capocompleto = false;
} 

else if (!iemail.value.includes('@gmail.com')) {
    iemail.style.border = '1px solid hsl(0, 66%, 54%)';
    document.getElementById('error-iemail').innerText = 'Email must contain @gmail.com';
    capocompleto = false;
} 

else {
    iemail.style.border = '1px solid black';
    document.getElementById('error-iemail').innerText = '';
}

//Query Type
if(!igeneral.checked && !isupport.checked){
    query1.style.border = '1px solid hsl(0, 66%, 54%)'
    query2.style.border = '1px solid hsl(0, 66%, 54%)'
    document.getElementById('error-querytype').innerText = 'This field is required';
}

//Message
if(imsg.value==''){
    imsg.style.border='1px solid hsl(0, 66%, 54%)'
    document.getElementById('error-imsg').innerText = 'This field is required';
    capocompleto = false
} 

//checkbox
if(!iconsent.checked){
    document.getElementById('error-iconsent').innerText = 'This field is required';
    capocompleto = false
}

//alert
if(capocompleto == true){
alert('Thanks for completing the form. Well be in touch soon!')}

if (capocompleto != true) {
    event.preventDefault();
}

//mouseout pelos intens
function saiu(){

        //mauseout First Name
        if(inome1.value!=''){
            inome1.style.border='1px solid black'
            document.getElementById('error-inome1').innerText = ''; } 
        else{inome1.style.border='1px solid hsl(0, 66%, 54%)'
            document.getElementById('error-inome1').innerText = 'This field is required';
            capocompleto = false}
        
        //mauseout Last Name
        if(inome2.value!=''){
            inome2.style.border='1px solid black'
            document.getElementById('error-inome2').innerText = ''; } 

        else{
            inome2.style.border='1px solid hsl(0, 66%, 54%)'
            document.getElementById('error-inome2').innerText = 'This field is required';
            capocompleto = false}

        //mauseout Email Address
        if (iemail.value !== '') {

            if (iemail.value === '@gmail.com') {
                iemail.style.border = '1px solid hsl(0, 66%, 54%)';
                document.getElementById('error-iemail').innerText = 'Need the full email';
                capocompleto = false;
            } 
            
            else if (!iemail.value.includes('@gmail.com')) {
                iemail.style.border = '1px solid hsl(0, 66%, 54%)';
                document.getElementById('error-iemail').innerText = 'Email must contain @gmail.com';
                capocompleto = false;
            }
            
            else {
                iemail.style.border = '1px solid black';
                document.getElementById('error-iemail').innerText = '';
            }
        } 
        
        else {
            iemail.style.border = '1px solid hsl(0, 66%, 54%)';
            document.getElementById('error-iemail').innerText = 'This field is required';
            capocompleto = false;
        }

        //mauseout Message
        if(imsg.value!=''){
        imsg.style.border='1px solid black'
        document.getElementById('error-imsg').innerText = ''; } 

        else{
            imsg.style.border='1px solid hsl(0, 66%, 54%)'
            document.getElementById('error-imsg').innerText = 'This field is required';
            capocompleto = false}

        }

        //click no intens
        function clicado(){

            //click checkbox
            if(iconsent.checked){
                iconsent.style.border='1px solid black'
                document.getElementById('error-iconsent').innerText = ''; } 

            else{
                iconsent.style.border='1px solid hsl(0, 66%, 54%)'
                document.getElementById('error-iconsent').innerText = 'This field is required';
                capocompleto = false}

            //click Query Type
            if(igeneral.checked || isupport.checked){
                query1.style.border='1px solid black'
                query2.style.border='1px solid black'
                document.getElementById('error-querytype').innerText = ''; } 

            else{
                query1.style.border = '1px solid hsl(0, 66%, 54%)'
                query2.style.border = '1px solid hsl(0, 66%, 54%)'
                document.getElementById('error-querytype').innerText = 'This field is required';
                capocompleto = false}
            }
}