function calcularPromedio(lista){
    //sumar todos los elemmentos del array y dividir entre la cantidad de elemantos
let sumaLista = 0;

    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    const promedio = sumaLista/ lista.length;
    console.log(promedio);
    return promedio;
}