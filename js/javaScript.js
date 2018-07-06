estudiantes=[
    {"codigo" : "202021", "nombre": "Marcelo", "nota" : 6.8},
    {"codigo" : "223010", "nombre": "Carlos", "nota" : 8.3},
    {"codigo" : "212051", "nombre": "Alejandro", "nota" : 4.3},
    {"codigo" : "201140", "nombre": "Jessica", "nota" : 7.7},
    {"codigo" : "232012", "nombre": "Cesar", "nota" : 9.7},
    {"codigo" : "251201", "nombre": "Pablo", "nota" : 2.9},
    {"codigo" : "202320", "nombre": "Marcelo S.", "nota" : 5.1},
    {"codigo" : "222120", "nombre": "Luis A.", "nota" : 6.5},
    {"codigo" : "262871", "nombre": "Marcos A.", "nota" : 6.1},
    {"codigo" : "212698", "nombre": "Rene S.", "nota" : 2.3}
    ];

    //fx() Mostrar estudiantes
    function mostrarEstudiantes(){
        var out="";
        var i;
        
        for(i = 0;i < estudiantes.length;i++){
            out += "Codigo: " + estudiantes[i].codigo + " - " +
            "Nombre: " + estudiantes[i].nombre + " - " +
            "Nota: " + estudiantes[i].nota + "<br>";
        }
        document.getElementById("st1").innerHTML=out;
    }


     //fx() Mostrar Promedio
     function mostrarPromedio(){
         var promedio=0;
         var sumaDeNotas=0;

         for (i=0; i < estudiantes.length; i++){
            sumaDeNotas += estudiantes[i].nota;
            promedio = sumaDeNotas/estudiantes.length;
            }
            document.getElementById("st1").innerHTML="El Promedio de los estudiantes es de: " + promedio;
     }

     //fx() Mostrar Nota mas Alta
     function mostrarAlta(){
         var notaAlta=0;


         for (i=0; i < estudiantes.length; i++){
            if(notaAlta < estudiantes[i].nota){
                notaAlta = estudiantes[i].nota;
            }
         }
         document.getElementById("st1").innerHTML="La nota mas alta es: " + notaAlta;
     }

    //fx() Mostrar Nota mas Baja
    function mostrarBaja(){
        var notaBaja=6.8;


        for (i=0; i < estudiantes.length; i++){
           if(notaBaja > estudiantes[i].nota){
            notaBaja = Math.min(estudiantes[i].nota);
        }
    }
    document.getElementById("st1").innerHTML="La nota mas baja es: " + notaBaja;
}