const t_area1 = document.querySelector(".t_area1");
const t_area2 = document.querySelector(".t_area2");

function borraImagen(){
    t_area1.style.backgroundImage = "none";
}

function copiar(){
    let texto = document.getElementById("t_area2");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
    t_area2.value ="";
  }

function btnEncriptar(){
    const textoEncriptado = encriptar(t_area1.value);
    t_area2.value = textoEncriptado;
    t_area1.value = "";
    t_area2.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btndDesencriptar(){
    const textoEncriptado = desEncriptar(t_area1.value);
    t_area2.value = textoEncriptado;
    t_area1.value = "";
}

function desEncriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}