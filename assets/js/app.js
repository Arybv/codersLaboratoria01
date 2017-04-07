window.addEventListener("load",function(){
    var promo = document.getElementById("promociones");
    var fotos = document.getElementsByClassName('foto');
    var chile_04 = document.getElementById("chile04");
    var lima_05 = document.getElementById("lima05");
    var lima_06 = document.getElementById("lima06");
    var selecciona = document.getElementById("select");
    console.log(selecciona);
    select.onchange = function (){
        if(select.value == "chile04"){
            chile_04.style.display = "block";
            lima_05.style.display = "none";
            lima_06.style.display = "none";
        }else if(select.value == "lima05"){
            chile_04.style.display = "none";
            lima_05.style.display = "block";
            lima_06.style.display = "none";
        }else if (select.value == "lima06"){
            chile_04.style.display = "none";
            lima_05.style.display = "none";
            lima_06.style.display = "block";
        }else {
            chile_04.style.display = "none";
            lima_05.style.display = "none";
            lima_06style.display = "none";
        }
    }
});
