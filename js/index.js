document.getElementById("comenzar").addEventListener("click", buscarMinotauro);

var tablero = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 6, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 8, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 8, 8, 8, 8, 8, 8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var tableroN = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 8, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 8, 8, 8, 8, 8, 8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var tableroTex = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var arrCamino = [
  []
];
var posTX = 1;
var posTY = 0;
var velocidad = 150;
var bandCam = 1;
var b_pasos_teseo = 0;
var myVar;
var b_minos_on = 0;
var vida_teseo = 1;
var cam = [
  []
];

cargar_Tableros();
document.getElementById('7-8').src = "css/Texturas/minos_arriba.gif";
document.getElementById('8-8').src = "css/Texturas/minos_abajo.gif";

function buscarMinotauro() {
  arrCamino[0] = new Array(1, 0, false);
  ubicarTeseo();
  derecha();
}

function derecha() {
  if (tablero[posTX][posTY + 1] == 0) {
    tablero[posTX][posTY] = 2;
    posTY++;
    if (posTX == mx && posTY == my) {
      //Mata a teseo
      console.log("Se encontraron!!!!!");
      vida_teseo = 0;
    }
    if (tableroN[posTX][posTY] == 9) {
      niños_obtenidos++;
      tableroN[posTX][posTY] = 2;
      var a_niño = posTX + "-" + posTY;
      document.getElementById(a_niño).src = "css/Texturas/transparente.png";
    }
    if (cam.length == 5) {
      cam.push([posTX, posTY]);
      cam.shift();
    } else {
      cam.push([posTX, posTY]);
    }
    var arrPaPush = [posTX, posTY, false];
    arrCamino.push(arrPaPush);
    window.setTimeout(verificarPuntoDec, velocidad);
  } else {
    if ((tablero[posTX][posTY + 1] == 6) && (b_minos_on == 0)) {
      matarMinotauro();
    } else {
      window.setTimeout(verificarPuntoDec, velocidad);
    }
  }
}

function izquierda() {
  if (tablero[posTX][posTY - 1] == 0) {
    tablero[posTX][posTY] = 2;
    posTY--;
    if (posTX == mx && posTY == my) {
      //Mata a teseo
      console.log("Se encontraron!!!!!");
      vida_teseo = 0;
    }
    if (tableroN[posTX][posTY] == 9) {
      niños_obtenidos++;
      tableroN[posTX][posTY] = 2;
      var a_niño = posTX + "-" + posTY;
      document.getElementById(a_niño).src = "css/Texturas/transparente.png";
    }
    if (cam.length == 5) {
      cam.push([posTX, posTY]);
      cam.shift();
    } else {
      cam.push([posTX, posTY]);
    }
    var arrPaPush = [posTX, posTY, false];
    arrCamino.push(arrPaPush);
    window.setTimeout(verificarPuntoDec, velocidad);
  } else {
    if ((tablero[posTX][posTY - 1] == 6) && (b_minos_on == 0)) {
      matarMinotauro();
    } else {
      window.setTimeout(verificarPuntoDec, velocidad);
    }
  }
}

function arriba() {
  if (tablero[posTX - 1][posTY] == 0) {
    tablero[posTX][posTY] = 2;
    posTX--;
    if (posTX == mx && posTY == my) {
      //Mata a teseo
      console.log("Se encontraron!!!!!");
      vida_teseo = 0;
    }
    if (tableroN[posTX][posTY] == 9) {
      niños_obtenidos++;
      tableroN[posTX][posTY] = 2;
      var a_niño = posTX + "-" + posTY;
      document.getElementById(a_niño).src = "css/Texturas/transparente.png";
    }
    if (cam.length == 5) {
      cam.push([posTX, posTY]);
      cam.shift();
    } else {
      cam.push([posTX, posTY]);
    }
    var arrPaPush = [posTX, posTY, false];
    arrCamino.push(arrPaPush);
    window.setTimeout(verificarPuntoDec, velocidad);
  } else {
    if ((tablero[posTX - 1][posTY] == 6) && (b_minos_on == 0)) {
      matarMinotauro();
    } else {
      window.setTimeout(verificarPuntoDec, velocidad);
    }
  }
}

function abajo() {
  if (tablero[posTX + 1][posTY] == 0) {
    tablero[posTX][posTY] = 2;
    posTX++;
    if (posTX == mx && posTY == my) {
      //Mata a teseo
      console.log("Se encontraron!!!!!");
      vida_teseo = 0;
    }
    if (tableroN[posTX][posTY] == 9) {
      niños_obtenidos++;
      tableroN[posTX][posTY] = 2;
      var a_niño_arriba = (posTX - 1) + "-" + posTY;
      var a_niño = posTX + "-" + posTY;
      document.getElementById(a_niño).src = "css/Texturas/transparente.png";
    }
    if (cam.length == 5) {
      cam.push([posTX, posTY]);
      cam.shift();
    } else {
      cam.push([posTX, posTY]);
    }
    var arrPaPush = [posTX, posTY, false];
    arrCamino.push(arrPaPush);
    window.setTimeout(verificarPuntoDec, velocidad);
  } else {
    if ((tablero[posTX + 1][posTY] == 6) && (b_minos_on == 0)) {
      matarMinotauro();
    } else {
      window.setTimeout(verificarPuntoDec, velocidad);
    }
  }
}

function verificarPuntoDec() {
  if (posTX == 1 && posTY == 0) {
    document.getElementById("0,0").src = "css/Texturas/transparente.png";
    document.getElementById("1,0").src = "css/Texturas/transparente.png";
    alert("WIN");
  } else {
    if (vida_teseo == 1) {
      ubicarTeseo();
      var arrFun = [];
      if (tablero[posTX - 1][posTY] == 0 || tablero[posTX - 1][posTY] == 6) {
        arrFun.push("arriba()");
      }
      if (tablero[posTX + 1][posTY] == 0 || tablero[posTX + 1][posTY] == 6) {
        arrFun.push("abajo()");
      }
      if (posTY > 0) {
        if (tablero[posTX][posTY - 1] == 0 || tablero[posTX][posTY - 1] == 6) {
          arrFun.push("izquierda()");
        }
      }
      if (tablero[posTX][posTY + 1] == 0 || tablero[posTX][posTY + 1] == 6) {
        arrFun.push("derecha()");
      }
      if (arrFun.length > 0) {
        var longArrCam = arrCamino.length - 1;
        if (arrFun.length > 1) {
          arrCamino[longArrCam][2] = true;
        }
        var num = Math.floor(Math.random() * arrFun.length);
        if (arrFun[num] == "arriba()") {
          arriba();
          b_pasos_teseo++;
          verificar_pasos();
        } else {
          if (arrFun[num] == "abajo()") {
            abajo();
            b_pasos_teseo++;
            verificar_pasos();
          } else {
            if (arrFun[num] == "izquierda()") {
              izquierda();
              b_pasos_teseo++;
              verificar_pasos();
            } else {
              if (arrFun[num] == "derecha()") {
                derecha();
                b_pasos_teseo++;
                verificar_pasos();
              }
            }
          }
        }
      } else {
        window.setTimeout(ubicarTeseo, velocidad);
        bandCam = 0;
        retornarPunDec();
      }
    } else {
      //Si teseo esta muerto
      mensaje_dead();
    }
  }
}

function retornarPunDec() {
  b_pasos_teseo++;
  verificar_pasos();
  longArrCam = arrCamino.length - 1;
  var posDevX;
  var posDevY;
  if (arrCamino[longArrCam][2] == false) {
    bandCam = 1;
    posDevX = arrCamino[longArrCam][0];
    posDevY = arrCamino[longArrCam][1];
    posTX = posDevX;
    posTY = posDevY;
    if (cam.length == 5) {
      cam.push([posTX, posTY]);
      cam.shift();
    } else {
      cam.push([posTX, posTY]);
    }
    tablero[posDevX][posDevY] = 1;
    arrCamino.pop();
    window.setTimeout(verificarPuntoDec, velocidad);
  } else {
    posTX = arrCamino[longArrCam][0];
    posTY = arrCamino[longArrCam][1];
    if (cam.length == 5) {
      cam.push([posTX, posTY]);
      cam.shift();
    } else {
      cam.push([posTX, posTY]);
    }
    arrCamino[longArrCam][2] = false;
    window.setTimeout(verificarPuntoDec, velocidad);
  }
}

function cargar_Tableros() {
  document.getElementById("tablero_3").innerHTML = document.getElementById("tablero_3").innerHTML + '<img id="fff" src="css/transparente_fondo.png">';
  for (var i = 0; i < tableroTex.length; i++) {
    for (var j = 0; j < tableroTex[i].length; j++) {
      if (tableroTex[i][j] == 1) {
        document.getElementById("tablero").innerHTML = document.getElementById("tablero").innerHTML + '<img id="' + i + "," + j + '" src="css/Texturas/transparente.png">';
        document.getElementById("tablero_2").innerHTML = document.getElementById("tablero_2").innerHTML + '<img id="' + i + "-" + j + '" src="css/Texturas/transparente.png">';
      }
      if (tableroTex[i][j] == 0) {
        document.getElementById("tablero").innerHTML = document.getElementById("tablero").innerHTML + '<img id="' + i + "," + j + '" src="css/Texturas/transparente.png">';
        document.getElementById("tablero_2").innerHTML = document.getElementById("tablero_2").innerHTML + '<img id="' + i + "-" + j + '" src="css/Texturas/transparente.png">';
      }
    }
    document.getElementById("tablero").innerHTML = document.getElementById("tablero").innerHTML + "<br>";
    document.getElementById("tablero_2").innerHTML = document.getElementById("tablero_2").innerHTML + "<br>";
  }
}

//Ubica a teseo
function ubicarTeseo() {
  var colArCam = arrCamino.length - 1;
  var actPosX = arrCamino[colArCam][0];
  var actPosY = arrCamino[colArCam][1];

  var val1 = (actPosX - 1) + "," + (actPosY);
  var val2 = (actPosX) + "," + (actPosY);
  document.getElementById(val1).src = "css/Texturas/Soldado_arriba.gif";
  document.getElementById(val2).src = "css/Texturas/Soldado_abajo.gif";

  if (colArCam > 0) {
    var izY = actPosY - 1;
    var derY = actPosY + 1;
    var abaX = actPosX + 1;
    var upX = actPosX - 1;

    if (actPosX - 2 >= 0) {
      var upX2 = actPosX - 2;
      var borrUp = (upX2) + "," + (actPosY);
      document.getElementById(borrUp).src = "css/Texturas/transparente.png";
    }

    var borrIz = (actPosX) + "," + (izY);
    var borrDer = (actPosX) + "," + (derY);
    var borrAba = (abaX) + "," + (actPosY);
    var borrUL = (upX) + "," + (izY);
    var borrUR = (upX) + "," + (derY);

    document.getElementById(borrIz).src = "css/Texturas/transparente.png";
    document.getElementById(borrDer).src = "css/Texturas/transparente.png";
    document.getElementById(borrAba).src = "css/Texturas/transparente.png";
    document.getElementById(borrUL).src = "css/Texturas/transparente.png";
    document.getElementById(borrUR).src = "css/Texturas/transparente.png";
    if (niños_obtenidos > 0) {
      seguir_teseo();
    }
  }
}

function matarMinotauro() {
  console.log("LO ENCUENTRA");
  vida_minos = 0;
  tablero[8][8] = 2;
  document.getElementById('7-8').src = "css/Texturas/espada_minos_arriba.gif";
  document.getElementById('8-8').src = "css/Texturas/espada_minos_abajo.gif";
  colocar_niños();
  retornarPunDec();
}

var vida_minos = 1;

function verificar_pasos() {
  if ((b_pasos_teseo > 150) && ((b_pasos_teseo % 4) == 0) && (vida_minos == 1)) {
    mover_minotauro();
  }
}

//Variables de minos
var pos_Mx = 8;
var pos_My = 8;
var mx = 0;
var my = 0;
//Mover el minotauro aleatoriamente
function mover_minotauro() {
  b_minos_on = 1;
  mx = Math.floor(Math.random() * 19);
  my = Math.floor(Math.random() * 21);
  if (tablero[mx][my] == 0) {

    //Revisa si teso esta en la misma ubicacion
    if (posTX == mx && posTY == my) {
      //Mata a teseo
      vida_teseo = 0;
    } else {
      //Borrar anterior minos
      var a_ubic_min_arriba = (pos_Mx - 1) + "-" + pos_My;
      var a_ubic_min_abajo = pos_Mx + "-" + pos_My;
      document.getElementById(a_ubic_min_arriba).src = "css/Texturas/transparente.png";
      document.getElementById(a_ubic_min_abajo).src = "css/Texturas/transparente.png";
      //Ubica a minos
      var ubic_min_arriba = (mx - 1) + "-" + my;
      var ubic_min_abajo = mx + "-" + my;
      document.getElementById(ubic_min_arriba).src = "css/Texturas/minos_arriba.gif";
      document.getElementById(ubic_min_abajo).src = "css/Texturas/minos_abajo.gif";
      //valor minos en tablero
      tablero[pos_Mx][pos_My] = 0;
      //gurada la posicion actual de minos
      pos_Mx = mx;
      pos_My = my;
    }
  } else {
    mover_minotauro();
  }
}

//Mesaje matar a minos
function mensaje_dead() {
  document.getElementById("6,6").src = "css/Texturas/die/die_1.gif";
  document.getElementById("7,6").src = "css/Texturas/die/die_2.gif";
  document.getElementById("8,6").src = "css/Texturas/die/die_3.gif";
  document.getElementById("9,6").src = "css/Texturas/die/die_4.gif";
  document.getElementById("10,6").src = "css/Texturas/die/die_5.gif";

  document.getElementById("6,7").src = "css/Texturas/die/die_6.gif";
  document.getElementById("7,7").src = "css/Texturas/die/die_7.gif";
  document.getElementById("8,7").src = "css/Texturas/die/die_8.gif";
  document.getElementById("9,7").src = "css/Texturas/die/die_9.gif";
  document.getElementById("10,7").src = "css/Texturas/die/die_10.gif";


  document.getElementById("6,8").src = "css/Texturas/die/die_11.gif";
  document.getElementById("7,8").src = "css/Texturas/die/die_12.gif";
  document.getElementById("8,8").src = "css/Texturas/die/die_13.gif";
  document.getElementById("9,8").src = "css/Texturas/die/die_14.gif";
  document.getElementById("10,8").src = "css/Texturas/die/die_15.gif";


  document.getElementById("6,9").src = "css/Texturas/die/die_16.gif";
  document.getElementById("7,9").src = "css/Texturas/die/die_17.gif";
  document.getElementById("8,9").src = "css/Texturas/die/die_18.gif";
  document.getElementById("9,9").src = "css/Texturas/die/die_19.gif";
  document.getElementById("10,9").src = "css/Texturas/die/die_20.gif";


  document.getElementById("6,10").src = "css/Texturas/die/die_21.gif";
  document.getElementById("7,10").src = "css/Texturas/die/die_22.gif";
  document.getElementById("8,10").src = "css/Texturas/die/die_23.gif";
  document.getElementById("9,10").src = "css/Texturas/die/die_24.gif";
  document.getElementById("10,10").src = "css/Texturas/die/die_25.gif";


  document.getElementById("6,11").src = "css/Texturas/die/die_26.gif";
  document.getElementById("7,11").src = "css/Texturas/die/die_27.gif";
  document.getElementById("8,11").src = "css/Texturas/die/die_28.gif";
  document.getElementById("9,11").src = "css/Texturas/die/die_29.gif";
  document.getElementById("10,11").src = "css/Texturas/die/die_30.gif";

  document.getElementById("6,12").src = "css/Texturas/die/die_31.gif";
  document.getElementById("7,12").src = "css/Texturas/die/die_32.gif";
  document.getElementById("8,12").src = "css/Texturas/die/die_33.gif";
  document.getElementById("9,12").src = "css/Texturas/die/die_34.gif";
  document.getElementById("10,12").src = "css/Texturas/die/die_35.gif";

  document.getElementById("6,13").src = "css/Texturas/die/die_36.gif";
  document.getElementById("7,13").src = "css/Texturas/die/die_37.gif";
  document.getElementById("8,13").src = "css/Texturas/die/die_38.gif";
  document.getElementById("9,13").src = "css/Texturas/die/die_39.gif";
  document.getElementById("10,13").src = "css/Texturas/die/die_40.gif";

  document.getElementById("6,14").src = "css/Texturas/die/die_41.gif";
  document.getElementById("7,14").src = "css/Texturas/die/die_42.gif";
  document.getElementById("8,14").src = "css/Texturas/die/die_43.gif";
  document.getElementById("9,14").src = "css/Texturas/die/die_44.gif";
  document.getElementById("10,14").src = "css/Texturas/die/die_45.gif";
}

/*
function prueba() {
  myVar = setInterval(function() {
    mover_minotauro()
  }, 2000);
}
*/

//Variables de los niños
var num_ninos = 3;
var xn1 = 0;
var yn1 = 0;
var xn2 = 0;
var yn2 = 0;
var xn3 = 0;
var yn3 = 0;
var ban = 0;
var ny = 0;
var nx = 0;

function colocar_niños() {
  nx = Math.floor(Math.random() * 19);
  ny = Math.floor(Math.random() * 21);

  if (tablero[nx][ny] == 0) {
    if (ban == 0) {
      xn1 = nx;
      yn1 = ny;
      //Ubica a joven
      var ubic_min = nx + "-" + ny;
      document.getElementById(ubic_min).src = "css/Texturas/joven.gif";
      tableroN[xn1][yn1] = 9;
      ban++;
      colocar_niños();
    } else {
      if (ban == 1) {
        if (nx != xn1 && ny != yn1) {
          xn2 = nx;
          yn2 = ny;
          //Ubica a joven
          var ubic_min = nx + "-" + ny;
          document.getElementById(ubic_min).src = "css/Texturas/joven.gif";
          tableroN[xn2][yn2] = 9;
          ban++;
          colocar_niños();
        } else {
          colocar_niños();
        }
      } else {
        if (ban == 2) {
          if (nx != xn1 && ny != yn1 && nx != xn2 && ny != yn2) {
            xn3 = nx;
            yn3 = ny;
            //Ubica a joven
            var ubic_min = nx + "-" + ny;
            document.getElementById(ubic_min).src = "css/Texturas/joven.gif";
            tableroN[xn3][yn3] = 9;
            ban++;
            colocar_niños();
          } else {
            colocar_niños();
          }
        }
      }
    }
  } else {
    colocar_niños();
  }
}

var niños_obtenidos = 0;

function seguir_teseo() {
  if (niños_obtenidos == 1) {
    //Borrar anterior
    var ubic_niñ_an = cam[2][0] + "-" + cam[2][1];
    document.getElementById(ubic_niñ_an).src = "css/Texturas/transparente.png";
    //ubicar actual
    var ubic_niñ = cam[3][0] + "-" + cam[3][1];
    document.getElementById(ubic_niñ).src = "css/Texturas/joven.gif";
  } else {
    if (niños_obtenidos == 2) {
      //Borrar anterior
      var ubic_niñ_an = cam[1][0] + "-" + cam[1][1];
      document.getElementById(ubic_niñ_an).src = "css/Texturas/transparente.png";
      //Borrar anterior2
      var ubic_niñ_an2 = cam[0][0] + "-" + cam[0][1];
      document.getElementById(ubic_niñ_an2).src = "css/Texturas/transparente.png";
      //ubicar actual1
      var ubic_niñ = cam[3][0] + "-" + cam[3][1];
      document.getElementById(ubic_niñ).src = "css/Texturas/joven.gif";
      //ubicar actual 2
      var ubic_niñ2 = cam[2][0] + "-" + cam[2][1];
      document.getElementById(ubic_niñ2).src = "css/Texturas/joven.gif";
    } else {
      if (niños_obtenidos == 3) {
        //Borrar anterior
        var ubic_niñ_an = cam[0][0] + "-" + cam[0][1];
        document.getElementById(ubic_niñ_an).src = "css/Texturas/transparente.png";
        //ubicar actual1
        var ubic_niñ = cam[3][0] + "-" + cam[3][1];
        document.getElementById(ubic_niñ).src = "css/Texturas/joven.gif";
        //ubicar actual 2
        var ubic_niñ2 = cam[2][0] + "-" + cam[2][1];
        document.getElementById(ubic_niñ2).src = "css/Texturas/joven.gif";
        //ubicar actual 2
        var ubic_niñ2 = cam[1][0] + "-" + cam[1][1];
        document.getElementById(ubic_niñ2).src = "css/Texturas/joven.gif";
      }
    }
  }
}
