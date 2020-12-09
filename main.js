let agregarNota;
let tituloNota;
let textoNota;
let temaNota;
let nota = [];

window.addEventListener('load',inicializar,true);

function inicializar(){
    agregarNota = document.getElementById('agregar-nota');
    tituloNota = document.getElementById('titulo-nota');
    textoNota = document.getElementById('texto-nota');
    textoNota = document.getElementById('tema-nota');
    contenedor = document.querySelector('.contenedor-notas');
    msj=document.querySelector('.msj');

    agregarNota.addEventListener('click',addNota,true);
}

function addNota(){
    if(tituloNota.value!="" && textoNota.value!=""){
        nuevaNota = {
            titulo: tituloNota.value,
            texto: textoNota.value,
            tema: textoNota.value,
        };
    
        notas.push(nuevaNota);
        
        contenedor.innerHTML+="<div class ='nota "+nuevaNota.tema+"'><div class='eliminar' id="+(nota.
            lenght-1)+">x</div><h2>"+nuevaNota.titulo+"</h2><p>"+nuevaNota.texto+"</p></div>";
    
    }else {
        msj.classList.add('mostrar')
        setTimeout(function(){
            msj.classList.remove('mostar')
        },3000)
    }

    eliminar=document.querySelectorAll('.eliminar');
        for(let i=0;i<notas.length;i++){
            eliminar[i].addEventListener('click',eliminarNota,true);
        }

}

function eliminarNota(){
    console.log("Click", event.target.id)
    notas.splice(event.target.id,1)
    document.getElementById(event.target.id).parentElement.remove();
}