


// DESCRIZIONE:
//  Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanennti)
// Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti


$( document ).ready(function() {

  $(".square").click(function() {
    $(this).css("background","lightgreen")

    var contgreen = 0;
    var contred = 0;
    // var green = true;

    // if (green == true) {
      contgreen = +1;
      // } else {
      contred = +1;

    console.log("red ",contred, "green ",contred);

  });


  $(".red").click(function() {
    $(this).css("background","red");
  });



















});
