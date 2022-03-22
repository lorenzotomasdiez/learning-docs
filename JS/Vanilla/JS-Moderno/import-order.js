//ORDEN DE LAS IMPORTACIONES
//==========================
/* 
    El orden de las importaciones importa. Si import un script en un html previo a la carga del html primero se ejectua el js y luego el html.
    Lo contrario pasa si lo importo al final del body.
    SE DEBE IMPORTAR EN HEADER O EN BODY.
*/
/* 
<body>
    <div>algo</div>
    <div>algo2</div>
    <script src="/script.js"></script>
</body> 
*/

/*  
    TAMBIEN...
    SI YO DECLARO UNA VARIABLE, EN UN ARCHIVO Y LUEGO LA LEO DE OTRO ARCHIVO, 
    LA IMPORTACION DONDE SE ENCUENTRA LA DECLARACION DEBE ESTAR PREVIA A LA DE LECTURA 
    EJEMPLO:
*/

/* 
<body>
    <div>algo</div>
    <div>algo2</div>
    <script src="/script.js"></script>  //declaracion de variable
    <script src="/script2.js"></script>  // lectura variable
</body> 
*/



