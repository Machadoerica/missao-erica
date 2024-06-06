const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-reultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta = [
    { //primeiro objeto da lita de perguntas
        enunciado: "pergunta1",
        alternativas: ["alternativa1", "alternativa2"]
    },
    { //segundo objeto da lita de peerguntas
        enunciado: "pergunta2",
        alternativas: ["alternativa1", "alternativa2"]
    }
];