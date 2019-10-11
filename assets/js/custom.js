/* ----------------------------
/*  Name: Snegle ræs
    Author: Frank Kirkemann
    Version: 2.0
/* -------------------------- */


//Starter med at lave nogle variabler

// Sneglene laves som 'objekter', dvs. med flere properties/egenskaber


var snegl1 = {
    id: "a",
    navn: "Svend",
    foto: "../images/snegl1.png",
    x: -160,
    y: -80
};
var snegl2 = {
    id: "b",
    navn: "Aage",
    foto: "/Snegleraes/assets/images/snegl2.png",
    x: -160,
    y: 0
};
var snegl3 = {
    id: "c",
    navn: "Bente",
    foto: "./assets/images/snegl3.png",
    x: -160,
    y: 80
};
var snegl4 = {
    id: "d",
    navn: "Bent",
    foto: "/Snegleraes/assets/images/snegl4.png",
    x: -160,
    y: 160
};

var sek = 0;  //En tæller der skal tælle hvor lang tid ræset har varet. Starter selvfølgelig p? 0.
var minSpring = 3; //Min. antal pixels sneglene skal flytte sig pr. gang
var maxSpring = 15; // Max. antal pixels (+minSpring), som sneglene må flytte sig pr. gang
var tidsinterval = 100; // En variabel med hvor ofte sneglene skal flytte sig (100 = 100 milisekunders pause)
var finishLine = 730; // Det er sneglenes 'bagende' der m?les p?

/* hvis du ændrer i stylesheetet, skal du med stor sandsynlighed også ændre
i de forskellige variabler herover for at det hele matcher*/

window.onload = function () {
    // Finder frem til div´en med snegl1´s properties. Sneglenes properties er defineret i variablerne øverste
    var racetrack = document.getElementById("raceway");

    // Opretter ny div i raceway-div´en med snegl1´s properties. Sneglenes properties er defineret i variablerne øverste
    var s1 = document.createElement("div");
    s1.id = snegl1.id;
    s1.className = "snegle-container";
    s1.title = snegl1.navn;
    s1.style.backgroundImage = "url('" + snegl1.foto + "')";
    s1.style.top = snegl1.y + "px";
    s1.style.left = snegl1.x + "px";
    racetrack.appendChild(s1);

    var s2 = document.createElement("div");
    s2.id = snegl2.id;
    s2.className = "snegle-container";
    s2.title = snegl2.navn;
    s2.style.backgroundImage = "url('" + snegl2.foto + "')";
    s2.style.top = snegl2.y + "px";
    s2.style.left = snegl2.x + "px";
    racetrack.appendChild(s2);

    var s3 = document.createElement("div");
    s3.id = snegl3.id;
    s3.className = "snegle-container";
    s3.style.backgroundImage = "url('" + snegl3.foto + "')";
    s3.title = snegl3.navn;
    s3.style.top = snegl3.y + "px";
    s3.style.left = snegl3.x + "px";
    racetrack.appendChild(s3);

    var s4 = document.createElement("div");
    s4.id = snegl4.id;
    s4.className = "snegle-container";
    s4.style.backgroundImage = "url('" + snegl4.foto + "')";
    s4.title = snegl4.navn;
    s4.style.top = snegl4.y + "px";
    s4.style.left = snegl4.x + "px";
    racetrack.appendChild(s4);
}

// Funktionen der starter løbet. Aktiveres ved klik på knappen 'startknap'
function start() {
    document.getElementById('startknap').style.display = "none";
    document.getElementById('overskrift').style.display = "block";
    afsted();

};

// Funktion der får sneglene til at 'løbe' (eller snegle sig afsted)..
function afsted() {

    // Ny position bestemmens 
    // Sneglenes nuværende x-position øges med et tilfældig tal som laves i funktionen 'spring()'
    snegl1.x += spring();
    snegl2.x += spring();
    snegl3.x += spring();
    snegl4.x += spring();

    // Sneglene flyttes til den nye position i x-aksen
    document.getElementById(snegl1.id).style.left = snegl1.x + "px";
    document.getElementById(snegl2.id).style.left = snegl2.x + "px";
    document.getElementById(snegl3.id).style.left = snegl3.x + "px";
    document.getElementById(snegl4.id).style.left = snegl4.x + "px";

    // Spillet slutter når en eller begge snegle når i mål. Målet er angivet med variablen 'finishLine'
    if (snegl1.x >= finishLine || snegl2.x >= finishLine || snegl3.x >= finishLine || snegl4.x >= finishLine){

        // Finder ud af hvem vinderen er, ved at sammenligne deres position;
        if (snegl1.x > snegl2.x && snegl1 > snegl3.x && snegl1.x > snegl4.x) {
            setTimeout("winner('" + snegl1.navn +"'); ", 1000); // Vinderen er snegl1
        } 
        else if (snegl2.x > snegl1.x && snegl2.x > snegl3.x && snegl2.x > snegl4.x) {
            setTimeout("winner('" + snegl2.navn +"'); ", 1000); // Vinderen er snegl2   
        }
        else if (snegl3.x > snegl1.x && snegl3.x > snegl2.x && snegl3.x > snegl4.x) {
            setTimeout("winner('" + snegl3.navn +"'); ", 1000); // Vinderen er snegl3   
        }
        else if (snegl4.x > snegl3.x && snegl4.x > snegl2.x && snegl4.x > snegl1.x) {
            setTimeout("winner('" + snegl4.navn +"'); ", 1000); // Vinderen er snegl4  
        }
        else {
            setTimeout("winner(''); ", 1000); // Begge løbere kom i mål samtidig - ingen vinder.finish

        }

    }
    else {
        setTimeout(afsted, tidsinterval); // Ingen løbere har nået målet endnu, og hele denne funtion afvikles påny
        sek = sek +1; //Sekindtælleren tæller op.
    }

};

// Funktion der kører vinderen
function winner(vinderen) {

    var tid = (sek * tidsinterval) / 1000; // Beregner hvor lang tid løbet tog. Intervallet imellem hvert 'spring' regnes med

    if (vinderen == "") {
        alert("Ræset er slut - det blev uafgjort! det tog "+ tid +" sekunder.");
    }
    else {
        alert("Ræset blev vundet af " + vinderen +"! Det tog " + tid +" sekunder");
    }

    window.location.reload(); // Genindlæser siden og dermed spillet

};

//  En funktion der returnerer et tilfældigt tal. Min- og max er angivet i starten af .js filen
function spring() {
    var randomStep = Math.round(Math.random() * maxSpring) + minSpring;
    return randomStep;
};