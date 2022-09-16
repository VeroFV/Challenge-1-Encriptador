var clave = ['ai', 'enter', 'imes', 'ober', 'ufat'];
var vocales = ['a', 'e', 'i', 'o', 'u'];
var resultado;

function pedirmensaje(){
    var output = document.querySelector(".salida");

    var caja = document.createElement('div');
    caja.setAttribute('class', 'cajasinmensaje');
    output.appendChild(caja);

    var sticker = document.createElement("img");
    sticker.setAttribute("class", "perrin");
    sticker.setAttribute("src", "https://i.imgur.com/xwRIZ0c.gif");
    sticker.setAttribute("alt", "Buscando mensaje");
    caja.appendChild(sticker);

    var h2 = document.createElement("h2");
    h2.textContent = "Ningún mensaje fue encontrado.";
    caja.appendChild(h2);

    var h3 = document.createElement("h3");
    h3.textContent = "Ingrese el texto que desee encriptar o desencriptar.";
    caja.appendChild(h3);
};

function encriptar(){
    var text = document.getElementById("mensaje").value;
    resultado = text.replace(/[aeiou]/g, function (x) {
        for (var indice = 0; indice < vocales.length; indice++){
            if (x == vocales[indice]) {
                x = clave[indice];
                break;
            };
        };

        return x;
    });
};

function desencriptar(){
    var text =document.getElementById("mensaje").value;
    resultado = text.replace(/(ai|enter|imes|ober|ufat)/g, function(x){
        for (var indice = 0; indice < clave.length; indice++){
            if (x == clave[indice]){
                x = vocales[indice];
                break;
            };
        };
        return x;
    });
};

function limpiar(){
    var output = document.querySelector(".salida");
    var borrame = document.querySelector(".salida div");
    output.removeChild(borrame);
}

function mostrarresultado(){
    var output = document.querySelector(".salida");
    var caja = document.createElement("div");
    caja.setAttribute('class', 'cajaconmensaje');
    output.appendChild(caja);
    
    var panel = document.createElement('p');
    panel.setAttribute('class', 'mensajedesalida');
    panel.setAttribute('id', 'copiame');
    panel.textContent = resultado;
    caja.appendChild(panel);

    var botoncopiar = document.createElement("button");
    botoncopiar.setAttribute("class", "botontransparente");
    botoncopiar.setAttribute('onclick', 'copiar()');
    botoncopiar.textContent = "Copiar";
    caja.appendChild(botoncopiar);
};

function copiar(){
    navigator.clipboard.writeText(resultado);
};

function usarencriptacion(){
    var text = document.getElementById("mensaje").value;
    limpiar();
    if (/\S/.test(text)){
        encriptar();
        mostrarresultado();
    } else {
        pedirmensaje();
    };
};

function usardesencriptacion(){
    var text =document.getElementById("mensaje").value;
    limpiar();
    if (/\S/.test(text)){
        desencriptar();
        mostrarresultado();
    } else {
        pedirmensaje();
    };
};