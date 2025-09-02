var meuVideo = document.getElementById("player");
var tipoTela = 0;
function playPause() {
    if (meuVideo.paused) {
        meuVideo.play()
    } else {
        meuVideo.pause()
    }
}
function makeBig() {
    meuVideo.width = 700;
}
function makeSmall() {
    meuVideo.width = 300;
}
function makeNormal() {
    meuVideo.width = 450;
}
function telaCheia() {
    if (tipoTela == 0) {
        meuVideo.requestFullscreen();
        tipoTela = 1
    } else {
        tipoTela = 0
        document.exitFullscreen();
    }
}
function aumentarVolume() {
    meuVideo.volume += 0.1;
}
function diminuirVolume() {
    meuVideo.volume -= 0.1;
}
function mutar() {
    meuVideo.muted = true;
}
function desmutar() {
    meuVideo.muted = false;
}
window.addEventListener(
    "keydown",
    (botao) => {

        switch (botao.key) {
            case " ":
                playPause()
                break;
            case "f":
                telaCheia()
                break;
            case "ArrowUp":
                aumentarVolume()
                break;
            case "ArrowDown":
                diminuirVolume()
                break;
            case "d":
                desmutar()
                break;
            case "m":
                mutar()
                break;
             case "=":
                makeBig()
                break;
             case "-":
                makeSmall()
                break;
             case "n":
                makeNormal()
                break;
            default:
                console.log("Tecla clicada " + botao.key)
                break;
        }
    },
);