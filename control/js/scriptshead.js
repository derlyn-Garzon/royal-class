
var indiceActual = 0;

function imagenDescription(indice){
    indiceActual = indice;
    //image
    var LIimage = 'imad'+indice;
    var liImageOb = document.getElementById(LIimage);
    liImageOb.style.paddingLeft = '0px';


    //container
    var liContent ='contentima'+indice;
    var liContentOb = document.getElementById(liContent);
    liContentOb.style.display = 'inline-flex';
    //text
    var descIma = 'text'+indice; 
    var descImaOb = document.getElementById(descIma);
    descImaOb.style.display='block';
    
    //VOLVER
    var volverOb = document.getElementById('volver');
    volverOb.style.display = 'block'

    //devolveer
    var devolverOb = document.getElementById('dv1');
    devolverOb.style.display = 'none';

    //avanzar
    var avanzarOb = document.getElementById('dv3');
    avanzarOb.style.display = 'none';

    //content
    var contentObj = document.getElementById('content');
    //contentObj.style.marginLeft = '10%';
    contentObj.style.paddingLeft = '10%';
    



}


function volver(){
    //valores por defecto
    indice=indiceActual;
    if(indice>0){
        //image
        var LIimage = 'imad'+indice;
        var liImageOb = document.getElementById(LIimage);
        liImageOb.style.paddingLeft = '25%';

        
        //container
        var liContent ='contentima'+indice;
        var liContentOb = document.getElementById(liContent);
        liContentOb.style.display = 'inherit';

        //text
        var descIma = 'text'+indice; 
        var descImaOb = document.getElementById(descIma);
        descImaOb.style.display='none';
    
        
        //VOLVER
        var volverOb = document.getElementById('volver');
        volverOb.style.display = 'none'


        //devolveer
        var devolverOb = document.getElementById('dv1');
        devolverOb.style.display = 'block';

        //avanzar
        var avanzarOb = document.getElementById('dv3');
        avanzarOb.style.display = 'block';
        
        //content
        var contentObj = document.getElementById('content');
         //contentObj.style.marginLeft = '10%';
        contentObj.style.paddingLeft = '0px';        
    }
}
