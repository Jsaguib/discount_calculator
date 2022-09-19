const inputPrice = document.getElementById("price");
const inputDiscount = document.getElementById("discount");
const btn = document.querySelector('#calculate');
const priceResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // Fórmula para calcular descuentos: precio * (100 - descuento) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value); 

    if (!price || !discount) {
        priceResult.innerText = `Debes llenar los campos para continuar`;
        return;
    }

    if (discount >= 100) {
        priceResult.innerText = `Debes insertar un valor entre 1 y 99 en el campo de descuento`;
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    priceResult.innerText = `El precio con descuento es de: $` + newPrice;
}