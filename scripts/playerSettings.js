//usuario,nombre , dificultat i enviar. creem el formulari

function formulariUsuari (){

    let nomUsuari = document.getElementById("nomUsuari").value;
    let contraUsuari = document.getElementById("contra").value;
    let dificultat = document.getElementById("dificultat").value;



    if(nomUsuari != "" && contraUsuari != "" ){
        alert("Usuari creat!");
        localStorage.setItem("nomUsuari", nomUsuari);
        localStorage.setItem("contra", contraUsuari);
        localStorage.setItem("dificultat", dificultat);
    }else {
        alert("Has de introduir totes les dades del formulari!!!!");
    }
}