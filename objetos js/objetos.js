//son colecciones de datos los datos se guardan por referencias o claves 
//se representan por{}
//se accedenn a los datos por medio de punto .
//crear objetos 
/*
var verduras = {
    "v1":"tomate",
     v2:"cebolla",
     1:"Ajo",
    "v3":"Zanahoria"
}
//mostrar los datos del objeto
document.write("dato : " +verduras.v1+ "<br>");
document.write("dato : " +verduras[1]+ "<br>");
document.write("dato : " +verduras.v2+ "<br>");
document.write("dato : " +verduras.v3+ "<br>");
*/
/*
var varios ={
    "v1":"hola",
    "v2":1234,
    v3:function saludo(){
        alert("hola tu nombre")
    },
    v4: ["papa",345,"arroz"],
    v5:{
        "f1":"cilantro",
        "f2":"perejil",
        "f3":["Maggi", "comino",030303]
    }
}
document.write("dato: "+varios.v2 +"<br>");
document.write("dato: "+varios.v3() +"<br>");
document.write("dato: "+varios.v4[2] +"<br>");
document.write("dato: "+varios.v5.f1 +"<br>");
document.write("dato: "+varios.v5.f2 +"<br>");
document.write("dato: "+varios.v5.f3 +"<br>");
document.write("dato: "+varios.v5.f3[0] +"<br>");
*/
/*
var partescasa={
    1:function saludo(){
        alert("Las partes de la casa son: ")
    },
    v1:"Baño",
    v2:"cocina",
    v3:["cuchara", "licuadora", "nevera", "batidora", "sarten"],
    v4:"habitacion",
    v5:{
        o1:"Cama",
        o2:"Tocador",
        o3:"closet",
        o4:"joyero"
    }
}
document.write("Dato : "+partescasa[1]()+"<br>");
document.write("Dato : "+partescasa.v1+"<br>");
document.write("Dato : "+partescasa.v2+ " y sus utencilios son :"+ "<br>");
document.write("Dato : "+partescasa.v3+"<br>");
document.write("Dato : Mi utencilio favorito es: "+partescasa.v3[4]+"<br>");
document.write("Dato : "+partescasa.v4+ " y sus accesorios son :"+"<br>");
document.write("Dato : "+partescasa.v5.o1+"<br>");
document.write("Dato : "+partescasa.v5.o2+"<br>");
document.write("Dato : "+partescasa.v5.o3+"<br>");
document.write("Dato : "+partescasa.v5.o4+"<br>");
*/
//lenar un objeto vacio con el ciclo for-in 
//lenar de manera estatica 
/*
var profesiones = {
    "nombre":"",
    "profesion":"",
    "salario":""
}
profesiones.nombre="nancy";
profesiones.profesion="desarrolladora";
profesiones.salario=3200000;
document.write("nombre : "+ profesiones.nombre+"<br>");
document.write("profesion  : "+profesiones.profesion +"<br>");
document.write("salario : "+ profesiones.salario+"<br>");
//FORMA DINAMICA 
var profes = {
    "nombre":"",
    "profesion":"",
    "salrio":""
}
for(var key in profes){
    var valores = prompt("Digite " +key);
    profes[key]=valores;
}
//mostrar datos del objeto 
for(var k in profes){
    document.write(k+" : "+profes[k]+"<br>");
}*/
//forma dinamica con varios datos
var empleados = {
    "nombre":[],
    "departamento":[],
    "salario":[]
} 
var numEmpleados =parseInt(prompt("Digite el # de empleados "));
for(var x=0;x < numEmpleados;x++){
    for(var llave in empleados){
        empleados[llave][x]=prompt("digite "+llave);
    }
}
for (var y =0;y <numEmpleados;y++){
    for(var keys in empleados){
        document.write(empleados[keys][y]+"<br>");
    }
}