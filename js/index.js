const arti = document.getElementById("arti");
const azalt = document.getElementById("azalt");
const sifirla = document.getElementById("sifirla");

const sayi = document.getElementById("sayi");

let sayac = 0;

sayi.addEventListener("change", function () {
    sayac = parseInt(sayi.value);
})

arti.addEventListener("click", function () {
    sayac++;
    sayi.value = sayac;
})
azalt.addEventListener("click", function () {
    sayac--;
    sayi.value = sayac;
})
sifirla.addEventListener("click", function () {
    sayac = 0;
    sayi.value = sayac;
})