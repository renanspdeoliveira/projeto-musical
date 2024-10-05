// Obtenha referências ao botão e ao elemento de áudio
const botao = document.getElementById('botaoSom');
const audio = document.getElementById('meuSom');
const botao2 = document.getElementById('botaoSom2');
const audio2 = document.getElementById('meuSom2');
const botao3 = document.getElementById('botaoSom3');
const audio3 = document.getElementById('meuSom3')

const botao4 = document.getElementById('botaoSom4');
const audio4 = document.getElementById('meuSom4')

const botao5 = document.getElementById('botaoSom5');
const audio5 = document.getElementById('meuSom5')

const botao6 = document.getElementById('botaoSom6');
const audio6 = document.getElementById('meuSom6')





// Adicione um evento de clique ao botão
botao.onclick = function () {
    // Reproduza o som
    audio.play();

    // Pare o som após 3 segundos (3000 milissegundos)
    setTimeout(() => {
        audio.pause(); // Pause o som
        audio.currentTime = 0; // Reinicie o som para o início
    }, 2000);
};

botao2.onclick = function () {
    // Reproduza o som
    audio2.play();

    // Pare o som após 3 segundos (3000 milissegundos)
    setTimeout(() => {
        audio2.pause(); // Pause o som
        audio2.currentTime = 0; // Reinicie o som para o início
    }, 2000);
};


botao3.onclick = function () {
    audio3.play();

    setTimeout(() => {
        audio3.pause();
        audio3.currentTime = 0
    }, 2000);
}



botao4.onclick = function () {
    audio4.play();

    setTimeout(() => {
        audio4.pause();
        audio4.currentTime = 0
    }, 2000);
}

botao5.onclick = function () {
    audio5.play();

    setTimeout(() => {
        audio5.pause();
        audio5.currentTime = 0
    }, 2000);
}

botao6.onclick = function () {
    audio6.play();

    setTimeout(() => {
        audio6.pause();
        audio6.currentTime = 0
    }, 2000);
}
