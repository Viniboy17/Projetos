function clicou1(){
    var p1 = document.getElementById('p1')
    var img1 = document.getElementsByClassName('img1')
    if(p1.style.display=='none'){
        p1.style.display='block'
        img1.src='images/icon-minus.svg'
        
        
    } else{
        p1.style.display='none'
        img1.src='images/icon-plus.svg'
    }
}

function clicou2(){
    var p2 = document.getElementById('p2')
    var img2 = document.getElementsByClassName('img2')
    if(p2.style.display=='block'){
        p2.style.display='none'
        img2.src='images/icon-plus.svg'
    } else{
        p2.style.display='block'
        img2.src='images/icon-minus.svg'
    }
}

function clicou3(){
    var p3 = document.getElementById('p3')
    var img3 = document.getElementsByClassName('img3')
    if(p3.style.display=='block'){
        p3.style.display='none'
        img3.src='images/icon-plus.svg'
    } else{
        p3.style.display='block'
        img3.src='images/icon-minus.svg'
    }
}

function clicou4(){
    var p4 = document.getElementById('p4')
    var img4 = document.getElementsByClassName('img4')
    if(p4.style.display=='block'){
        p4.style.display='none'
        img4.src='images/icon-plus.svg'
    } else{
        p4.style.display='block'
        img4.src='images/icon-minus.svg'
    }
}

