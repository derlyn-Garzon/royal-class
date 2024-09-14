var lisNexttImaOb = document.getElementById('nextIma');
            var lisprevttImaOb = document.getElementById('backima');
            
            var actualIma = 1;
            var ultimaIma = 10;
            function avanzarIma(actualIm){  
                if(actualIma<=ultimaIma){
                    if(actualIma>=1){
                        lisprevttImaOb.src='view/images/prev-button.png';
                    }
                    var lima = 'Lima'+actualIm; 
                    var listIma = document.getElementById(lima);
                    listIma.style.display = 'none';
                    var nextIma = actualIm+1;
                    var listNextLima = 'Lima'+ nextIma
                    var lisNexttIma = document.getElementById(listNextLima);
                    lisNexttIma.style.display = 'block';
                    actualIma = actualIma+1;//global var
                    //view/images/next-button.png
                }

                if(actualIma==ultimaIma){
                    actualIma = 0;//no more iamges on las image
                    lisNexttImaOb.src='view/images/next-buttoninhab.png';
                }
            }

            
            function devolverIma(actualIm){
                if(actualIm==0){
                    actualIm=ultimaIma; 
                    actualIma=ultimaIma;
                }
                if(actualIma==1){
                    lisprevttImaOb.src='view/images/prev-buttonihab.png';
                }


                if(actualIma<=ultimaIma && actualIma>=2){
                    var lima = 'Lima'+actualIm; 
                    var listIma = document.getElementById(lima);
                    listIma.style.display = 'none';
                    var prevIma = actualIm-1;
                    var listPrevLima = 'Lima'+ prevIma
                    var lisPrevIma = document.getElementById(listPrevLima);
                    lisPrevIma.style.display = 'block';
                    actualIma = actualIma-1;//global var
                    lisNexttImaOb.src='view/images/next-button.png';
                }
                
            }
        

            
            var avanzar = document.getElementById('dv3');
            var devolver = document.getElementById('dv1');
            avanzar.addEventListener("click", function(){avanzarIma(actualIma)});
            devolver.addEventListener("click", function(){devolverIma(actualIma)});