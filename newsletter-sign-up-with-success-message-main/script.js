document.getElementById('botao').addEventListener('click', function (params) {
    var iemail = document.getElementById('iemail').value

    if(iemail===''){
        document.getElementsByClassName('p0')[0].style.display='flex'
        document.getElementsByClassName('p3')[0].style.display='none'
        document.getElementsByClassName('span')[0].style.display='block'
        document.getElementById('iemail').style.cssText='border:1px solid red; background-color: rgba(255, 0, 0, 0.137)'
        document.getElementsByClassName('span')[0].innerHTML='Required field'

    }else if(iemail !=='' && !iemail.includes("@gmail.com")){
        document.getElementsByClassName('p0')[0].style.display='flex'
        document.getElementsByClassName('p3')[0].style.display='none'
        document.getElementsByClassName('span')[0].style.display='block'
        document.getElementById('iemail').style.cssText='border:1px solid red; background-color: rgba(255, 0, 0, 0.137)'
        document.getElementsByClassName('span')[0].innerHTML='Email must contain @gmail.com'
        
    }else if(iemail==='@gmail.com'){
        document.getElementsByClassName('p0')[0].style.display='flex'
        document.getElementsByClassName('p3')[0].style.display='none'
        document.getElementById('iemail').style.cssText='border:1px solid red; background-color: rgba(255, 0, 0, 0.137)'
        document.getElementsByClassName('span')[0].style.display='block'
        document.getElementsByClassName('span')[0].innerHTML='Need the full email'
    }
    else{
        document.getElementsByClassName('p0')[0].style.display='none'
        document.getElementsByClassName('p3')[0].style.display='flex'
        document.getElementById('resu').innerHTML=iemail
}
})

document.getElementsByClassName('botao2')[0].addEventListener('click',function(){
        location.reload()
})