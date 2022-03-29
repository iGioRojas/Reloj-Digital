const horaContainer = document.querySelector('.hora')
const minutosContainer = document.querySelector('.minuto')
const segundosContainer = document.querySelector('.segundo')
const color = document.getElementById('color');

const actualizarHora = setInterval(function(){
    const date = new Date()
    let segundos = date.getSeconds();
    if(segundos<10){
        segundosContainer.innerHTML = `0${segundos}`;    
    }
    //REFACTORIZADO
    horaContainer.innerHTML = `${date.getHours()}`;
    minutosContainer.innerHTML = `${date.getMinutes()}`;
    segundosContainer.innerHTML = `${segundos}`;
},1000)

color.addEventListener("change",cambiarFondo,false);

function cambiarFondo(event){
    document.querySelector("body").style.backgroundColor = event.target.value;
}

