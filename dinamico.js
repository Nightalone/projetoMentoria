function modoEscuro(){
    if(document.querySelector("#dark").innerHTML == 'Dark'){
       document.querySelector("#dark").innerHTML = 'Light'
       document.querySelector("body").style.transition = '1s'
       document.querySelector("body").style.backgroundColor = '#000'
       document.querySelector("body").style.color = '#fff'
    }else if(document.querySelector("#dark").innerHTML == "Light"){
        document.querySelector("#dark").innerHTML = 'Dark'
        document.querySelector("body").style.transition = '1s'
        document.querySelector("body").style.backgroundColor = '#fff'
        document.querySelector("body").style.color = '#000'
    }
}