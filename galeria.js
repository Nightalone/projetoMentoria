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

function colocarMouse(galeria){

   if(galeria == 'galeria1'){
        document.querySelector("#galeria1").style.transition = '1s'
        document.querySelector("#galeria1").style.backgroundColor = '#ccc'
    }else if(galeria == 'galeria2'){
        document.querySelector("#galeria2").style.transition = '1s'
        document.querySelector("#galeria2").style.backgroundColor = '#ccc'
    }else{
        document.querySelector("#galeria3").style.transition = '1s'
        document.querySelector("#galeria3").style.backgroundColor = '#ccc'
    }

}

function tirarMouse(galeria){

    if(galeria == 'galeria1'){
        document.querySelector("#galeria1").style.transition = '1s'
        document.querySelector("#galeria1").style.backgroundColor = '#fff'
    }else if(galeria == 'galeria2'){
        document.querySelector("#galeria2").style.transition = '1s'
        document.querySelector("#galeria2").style.backgroundColor = '#fff'
    }else{
        document.querySelector("#galeria3").style.transition = '1s'
        document.querySelector("#galeria3").style.backgroundColor = '#fff'
    } 
    
}