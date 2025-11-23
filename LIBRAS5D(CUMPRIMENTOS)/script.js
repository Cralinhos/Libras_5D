// Dados dos sinais de cumprimentos
const signals = [
    {
        id: 1,
        title: "BOM DIA",
        video: "CUMPRIMENTOS/1_BOM_DIA.mp4",
        alt: "Avatar fazendo o sinal de Bom Dia",
        context: "Usado para cumprimentar alguém pela manhã"
    },
    {
        id: 2,
        title: "MANHÃ",
        video: "CUMPRIMENTOS/2_MANHÃ.mp4",
        alt: "Avatar fazendo o sinal de Manhã",
        context: "Usado para se referir ao período da manhã"
    },
    {
        id: 3,
        title: "BOA TARDE",
        video: "CUMPRIMENTOS/3_BOA_TARDE.mp4",
        alt: "Avatar fazendo o sinal de Boa Tarde",
        context: "Usado para cumprimentar alguém durante a tarde"
    },
    {
        id: 4,
        title: "TARDE",
        video: "CUMPRIMENTOS/4_TARDE.mp4",
        alt: "Avatar fazendo o sinal de Tarde",
        context: "Usado para se referir ao período da tarde"
    },
    {
        id: 5,
        title: "BOA NOITE",
        video: "CUMPRIMENTOS/5_BOA_NOITE.mp4",
        alt: "Avatar fazendo o sinal de Boa Noite",
        context: "Usado para cumprimentar alguém à noite ou se despedir"
    },
    {
        id: 6,
        title: "NOITE",
        video: "CUMPRIMENTOS/6_NOITE.mp4",
        alt: "Avatar fazendo o sinal de Noite",
        context: "Usado para se referir ao período da noite"
    },
    {
        id: 7,
        title: "COM LICENÇA",
        video: "CUMPRIMENTOS/7_COM_LICENÇA.mp4",
        alt: "Avatar fazendo o sinal de Com Licença",
        context: "Usado para pedir permissão ou desculpar-se ao passar por alguém"
    },
    {
        id: 8,
        title: "DESCULPA",
        video: "CUMPRIMENTOS/8_DESCULPA.mp4",
        alt: "Avatar fazendo o sinal de Desculpa",
        context: "Usado para pedir desculpas por algo"
    },
    {
        id: 9,
        title: "DE NADA",
        video: "CUMPRIMENTOS/9_DE_NADA.mp4",
        alt: "Avatar fazendo o sinal de De Nada",
        context: "Usado como resposta quando alguém agradece"
    },
    {
        id: 10,
        title: "IDADE",
        video: "CUMPRIMENTOS/10_IDADE.mp4",
        alt: "Avatar fazendo o sinal de Idade",
        context: "Usado para perguntar ou informar a idade de alguém"
    },
    {
        id: 11,
        title: "OBRIGADA",
        video: "CUMPRIMENTOS/11_OBRIGADA.mp4",
        alt: "Avatar fazendo o sinal de Obrigada",
        context: "Usado para agradecer alguém"
    },
    {
        id: 12,
        title: "OI",
        video: "CUMPRIMENTOS/12_OI.mp4",
        alt: "Avatar fazendo o sinal de Oi",
        context: "Usado como cumprimento informal"
    },
    {
        id: 13,
        title: "TCHAU",
        video: "CUMPRIMENTOS/13_TCHAU.mp4",
        alt: "Avatar fazendo o sinal de Tchau",
        context: "Usado para se despedir de alguém"
    },
    {
        id: 14,
        title: "POR FAVOR",
        video: "CUMPRIMENTOS/14_POR_FAVOR.mp4",
        alt: "Avatar fazendo o sinal de Por Favor",
        context: "Usado para fazer um pedido de forma educada"
    }
];

// Seleção dos elementos do DOM
const nextSignalButton = document.querySelector('.next-signal-button');
const repeatButton = document.querySelector('.repeat-button');
const avatarVideo = document.querySelector('.avatar-img');
const progressBarFill = document.querySelector('.progress-bar-fill');
const levelInfo = document.querySelector('.level-info');
const titleBanner = document.querySelector('.title-banner');
const meaningText = document.querySelector('.meaning-text');

// Variáveis de estado do jogo
let currentSignalIndex = 0; // Começa no primeiro sinal (índice 0)
const totalSignals = signals.length; // Total de 14 sinais

// Função para atualizar o progresso
function updateProgress() {
    const progress = ((currentSignalIndex + 1) / totalSignals) * 100;
    progressBarFill.style.width = `${progress}%`;
}

// Função para carregar um sinal específico
function loadSignal(index) {
    if (index < 0 || index >= totalSignals) return;
    
    const signal = signals[index];
    
    // Atualiza o título
    titleBanner.textContent = signal.title;
    
    // Atualiza o vídeo
    avatarVideo.src = signal.video;
    avatarVideo.alt = signal.alt;
    avatarVideo.load(); // Recarrega o vídeo
    avatarVideo.play(); // Reproduz automaticamente
    
    // Atualiza o contexto
    meaningText.textContent = signal.context;
    
    // Atualiza o progresso
    updateProgress();
    
    // Atualiza o texto do botão se for o último sinal
    if (index === totalSignals - 1) {
        nextSignalButton.textContent = "CONCLUIR";
    } else {
        nextSignalButton.textContent = "PRÓXIMO SINAL";
    }
}

// Função para avançar o sinal/progresso
nextSignalButton.addEventListener('click', () => {
    if (currentSignalIndex < totalSignals - 1) {
        currentSignalIndex++;
        loadSignal(currentSignalIndex);
    } else {
        // Nível concluído
        alert(`Parabéns! Você completou todos os ${totalSignals} sinais de cumprimentos!`);
        // Opcional: resetar para o início ou avançar para próximo nível
        // currentSignalIndex = 0;
        // loadSignal(currentSignalIndex);
    }
});

// Função para repetir a animação do vídeo
repeatButton.addEventListener('click', () => {
    if (avatarVideo) {
        avatarVideo.currentTime = 0;
        avatarVideo.play();
    }
});

// Inicializa o primeiro sinal ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadSignal(0);
});