


// DESCRIZIONE:
//  Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanennti)
// Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti

// Contatori
var contgreen = 0;
var contred = 0;

$( document ).ready(function() {

  $(".green").click(function() {
    $(this).css("background","lightgreen");

    contgreen ++;

    $(this).off();

    console.log('VERDE', contgreen)
    $("#verde").text(contgreen)

    // var green = true;
    //
    // if (green == true) {
    //   contgreen = +1;
    //   }
      // else {
      // contred = +1;
      // }

//       Nikolas Mosca:boolean: 4:40 PM
// ciao! ho visto il ticket e ho visto il codice :wink: attenzione a dove dichiari le variabili di contatore e a come le incrementi :wink: ti do questo piccolo indizio, se hai bisogno possiamo cmq vederlo assieme su zoom :slightly_smiling_face: dimmi tu ok?

  });


  $(".red").click(function() {
    $(this).css("background","red");

    contred++;

    $(this).off();

    console.log('ROSSO', contred)

    $("#rosso").text(contred)

  });






});


// var contgreen = 0;
// var contred = 0;
// $( document ).ready(function() {
//   $(".square").click(function() {
//     $(this).css("background","lightgreen");
//     contgreen++;
//     console.log('contatore verde', contgreen)
//   });
//   $(".red").click(function() {
//     $(this).css("background","red");
//     contred++;
//     console.log('contatore rosso', contred)
//   });
// });
