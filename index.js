function alterarCor(){
    const primeiroPost = document.getElementsByClassName("post")[0]
    primeiroPost.style.backgroundColor = "coral"
}


function aumentarTexto(){
    const segundoPost = document.getElementsByClassName("texto-post")[0]
    segundoPost.classList.add("fonte-aumentada")

}


function marcarGenero(genero){
    const radioMasculino = document.getElementById("masculino")
    const radioFeminino = document.getElementById("feminino")
    
    if(genero === 'M'){
        radioMasculino.checked = true;
    }else if(genero === 'F'){
        radioFeminino.checked = true;
    }

}


//OBS
/*
    ----- Foi Aprendido ----

    - Alterar propriedade de estilo no JS
    - Adicionar uma nova classe a um Elemento no JS
    - Exemplo de Alterar propriedade/atributo de um Elemento HTML no JS

*/

