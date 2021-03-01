//usuario,nombre , dificultat i enviar. creem el formulari

function formulariUsuari (){

    var nomUsuari = document.getElementById("nomUsuari").value;
    var contraUsuari = document.getElementById("contra").value;
    var dificultat = document.getElementById("dificultat").value;

    alert("hola"+nomUsuari+ "contra"+contraUsuari+ "dificultat"+ dificultat);

    localStorage.setItem("nomUsuari", nomUsuari);
    localStorage.setItem("contra", contraUsuari);
    localStorage.setItem("dificultat", dificultat);
}