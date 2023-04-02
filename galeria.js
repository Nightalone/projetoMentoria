function modoEscuro(){
    if(document.querySelector("#dark").innerHTML == 'Dark'){
       document.querySelector("#dark").innerHTML = 'Light'
       document.querySelector("body").style.transition = '1s'
       document.querySelector("body").style.backgroundColor = '#000'
     
    }else if(document.querySelector("#dark").innerHTML == "Light"){
        document.querySelector("#dark").innerHTML = 'Dark'
        document.querySelector("body").style.transition = '1s'
        document.querySelector("body").style.backgroundColor = '#fff'
    
    }
}

function colocarMouse(){
    document.querySelector(".galeria").style.transition = '1s'
    document.querySelector(".galeria").style.boxShadow = "1px 1px 1px"
    document.querySelector('.galeria').style.backgroundColor = '#ccc'
}

function tirarMouse(){
    document.querySelector(".galeria").style.transition = '1s'
    document.querySelector(".galeria").style.boxShadow = "0px 0px 0px"
    document.querySelector('.galeria').style.backgroundColor = '#fff'
}