const qr = document.getElementById("QRcode");
const link = document.getElementById("link");

document.getElementById("generar").addEventListener("click", () => {

    qr.innerHTML = "";
    new QRCode(qr, link.value);

});