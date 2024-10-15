let textArea = document.getElementById("text");
let speakButton = document.getElementById("speak-button");

speakButton.addEventListener("click", () => {
    let text = textArea.value;

    let utterance = new SpeechSynthesisUtterance();

    if (text === "") {
        alert("Por favor, Digite algum Texto para Falar.");
    }

    utterance.text = text
    utterance.voice = window.speechSynthesis.getVoices()[20];

    window.speechSynthesis.speak(utterance);

});