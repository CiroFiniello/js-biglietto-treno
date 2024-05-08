let eta = prompt('Quanti anni hai?');
let km = prompt ('Quanti chilometri dovrai percorrere?');
let price = 0.276;
if (eta < 18 )
    {
    price = (21 * eta ) / 100;
}else 
if (eta > 65) {
    price = (42 * eta) / 100;
}
console.log(price);
document.getElementById("price").value=price;

