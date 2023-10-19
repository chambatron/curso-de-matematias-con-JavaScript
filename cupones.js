const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector ('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento(){
    // (P * (100 - D))/100

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    
    if (!price || !coupon){
        pResult.innerText = 'Por favor llenar el formulario';
        return;
    }

    let discount;

    switch(coupon){
        case 'descuento20':
            discount = 20;
            break;
        case 'descuento25':
            discount = 25;
            break;
        default:
            pResult.innerText = 'El cupon no es valido';
        return;
            
    }

    /*if (coupon == 'descuento20'){
        discount = 20;
    }else if (coupon == 'descuento25'){
        discount = 25;
    }else{
        pResult.innerText = 'El cupon no es valido';
        return;
    }*/


    /*if (!price || !discount){
        pResult.innerText = 'Por favor llenar el formulario';
        return;
    }*/

    if (discount > 100){
        pResult.innerText = " el descuento no puede ser mayor a 100";
        return
    }

    const newPrice = (price * (100 - discount))/ 100;

    pResult.innerText = 'el nuevo precio con descuento es $ ' + newPrice;
    return;
}