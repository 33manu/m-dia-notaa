document.getElementByld('formulario').addEventListener('submit',function(event){
    event.preventDefault();

    //Obter as notas inseridas pelo usuário
    let nota1 = parseFloat(document.getElementByid('nota1').value);
    let nota2 = parseFloat(document.getElementByid('nota2').value);
    let nota3 = parseFloat(document.getElementByid('nota3').value);

    //Calcular a média
    let media =( nota1 + nota2 + nota3) /3;

    //Exibir a mensagem de resultado
    let resultadoDiv = document.getElementByid('resultado')
    if (media>=6.0) {
        resultadoDiv.innerHTML = `<p class="aprovado">Aprovado! Sua média foi;${media.toFixed(2)}</p>`; 
    } else{resultadoDiv.innerHTML = `<p class="recuperação">Recuperação! Sua média foi;${media.toFixed(2)}</p>`;  
}

});
