const elementoChute = document.getElementById("chute"); 

// Api da SpeechRecognition
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

//                 pegar tudo em result, exibir tudo que estou falando no console
recognition.addEventListener('result', onSpeak )

function onSpeak(e) {
    // pegando somente o resultado do que foi falo, passeando pelo console log para achar (dentro de results)
    chute = e.results [0] [0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = ` 
    <div> Você disse</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());