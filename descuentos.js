const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector ('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento(){
    // (P * (100 - D))/100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);
    if (!price || !discount){
        pResult.innerText = 'Por favor llenar el formulario';
        return;
    }

    if (discount > 100){
        pResult.innerText = " el descuento no puede ser mayor a 100";
        return
    }

    const newPrice = (price * (100 - discount))/ 100;

    pResult.innerText = 'el nuevo precio con descuento es $ ' + newPrice;
}