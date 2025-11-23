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
const nextSignalButton = document.getElementById('nextSignalButton');
const prevSignalButton = document.getElementById('prevSignalButton');
const repeatButton = document.getElementById('repeatButton');
const playPauseButton = document.getElementById('playPauseButton');
const speedButton = document.getElementById('speedButton');
const avatarVideo = document.getElementById('avatarVideo');
const progressBarFill = document.getElementById('progressBarFill');
const progressPercentage = document.getElementById('progressPercentage');
const signalCounter = document.getElementById('signalCounter');
const levelInfo = document.querySelector('.level-info');
const titleBanner = document.getElementById('titleBanner');
const meaningText = document.getElementById('meaningText');
const card = document.getElementById('card');
const container = document.querySelector('.container');

// Elementos do menu lateral
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.querySelector('.sidebar-close');
const signalsList = document.getElementById('signalsList');
const randomModeButton = document.getElementById('randomModeButton');

// Elementos do modal
const completionModal = document.getElementById('completionModal');
const totalSignalsCompleted = document.getElementById('totalSignalsCompleted');
const restartButton = document.getElementById('restartButton');
const randomPracticeButton = document.getElementById('randomPracticeButton');
const closeModalButton = document.getElementById('closeModalButton');

// Variáveis de estado
let currentSignalIndex = 0;
const totalSignals = signals.length;
let isRandomMode = false;
let randomHistory = [];
let videoPlaybackRate = 1;
let isPlaying = true;

// Velocidades disponíveis
const playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 2];
let currentPlaybackRateIndex = 2; // Começa em 1x

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadSignal(0);
    populateSignalsList();
    setupEventListeners();
    setupKeyboardShortcuts();
    updateVideoControls();
});

// Função para popular a lista de sinais no menu lateral
function populateSignalsList() {
    signalsList.innerHTML = '';
    signals.forEach((signal, index) => {
        const li = document.createElement('li');
        li.textContent = `${signal.id}. ${signal.title}`;
        li.setAttribute('role', 'listitem');
        li.setAttribute('tabindex', '0');
        li.setAttribute('aria-label', `Ir para ${signal.title}`);
        
        if (index === currentSignalIndex) {
            li.classList.add('active');
        }
        
        li.addEventListener('click', () => {
            loadSignal(index);
            closeSidebar();
        });
        
        li.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                loadSignal(index);
                closeSidebar();
            }
        });
        
        signalsList.appendChild(li);
    });
}

// Função para atualizar a lista destacando o sinal ativo
function updateSignalsList() {
    const items = signalsList.querySelectorAll('li');
    items.forEach((item, index) => {
        if (index === currentSignalIndex) {
            item.classList.add('active');
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            item.classList.remove('active');
        }
    });
}

// Função para abrir o menu lateral
function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Função para fechar o menu lateral
function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners do menu
menuToggle.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Função para atualizar o progresso
function updateProgress() {
    const progress = ((currentSignalIndex + 1) / totalSignals) * 100;
    progressBarFill.style.width = `${progress}%`;
    progressPercentage.textContent = `${Math.round(progress)}%`;
    signalCounter.textContent = `Sinal ${currentSignalIndex + 1} de ${totalSignals}`;
}

// Função para carregar um sinal específico com animação
function loadSignal(index, skipAnimation = false) {
    if (index < 0 || index >= totalSignals) return;
    
    // Animação de fade out
    if (!skipAnimation) {
        card.style.opacity = '0.5';
        card.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            updateSignalContent(index);
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150);
    } else {
        updateSignalContent(index);
    }
}

// Função para atualizar o conteúdo do sinal
function updateSignalContent(index) {
    currentSignalIndex = index;
    const signal = signals[index];
    
    // Atualiza o título
    titleBanner.textContent = signal.title;
    
    // Atualiza o vídeo
    avatarVideo.src = signal.video;
    avatarVideo.alt = signal.alt;
    avatarVideo.load();
    avatarVideo.playbackRate = videoPlaybackRate;
    
    // Aguarda o vídeo carregar antes de reproduzir
    avatarVideo.addEventListener('loadeddata', () => {
        if (isPlaying) {
            avatarVideo.play();
        }
    }, { once: true });
    
    // Atualiza o contexto
    meaningText.textContent = signal.context;
    
    // Atualiza o progresso
    updateProgress();
    
    // Atualiza os botões
    updateNavigationButtons();
    updateSignalsList();
    
    // Atualiza o texto do botão se for o último sinal
    if (index === totalSignals - 1) {
        nextSignalButton.textContent = "CONCLUIR →";
    } else {
        nextSignalButton.textContent = "PRÓXIMO SINAL →";
    }
}

// Função para atualizar os botões de navegação
function updateNavigationButtons() {
    prevSignalButton.disabled = currentSignalIndex === 0;
    
    if (currentSignalIndex === 0) {
        prevSignalButton.style.opacity = '0.5';
        prevSignalButton.style.cursor = 'not-allowed';
    } else {
        prevSignalButton.style.opacity = '1';
        prevSignalButton.style.cursor = 'pointer';
    }
}

// Função para avançar o sinal
function nextSignal() {
    if (isRandomMode) {
        loadRandomSignal();
    } else if (currentSignalIndex < totalSignals - 1) {
        loadSignal(currentSignalIndex + 1);
    } else {
        showCompletionModal();
    }
}

// Função para voltar o sinal
function prevSignal() {
    if (currentSignalIndex > 0) {
        loadSignal(currentSignalIndex - 1);
    }
}

// Função para carregar um sinal aleatório
function loadRandomSignal() {
    let randomIndex;
    
    // Evita repetir o mesmo sinal imediatamente
    do {
        randomIndex = Math.floor(Math.random() * totalSignals);
    } while (randomIndex === currentSignalIndex && totalSignals > 1);
    
    loadSignal(randomIndex);
}

// Função para alternar modo aleatório
function toggleRandomMode() {
    isRandomMode = !isRandomMode;
    randomModeButton.classList.toggle('active', isRandomMode);
    
    if (isRandomMode) {
        randomModeButton.textContent = '🎲 Modo Aleatório (Ativo)';
        nextSignalButton.textContent = "PRÓXIMO ALEATÓRIO →";
    } else {
        randomModeButton.textContent = '🎲 Modo Aleatório';
        if (currentSignalIndex === totalSignals - 1) {
            nextSignalButton.textContent = "CONCLUIR →";
        } else {
            nextSignalButton.textContent = "PRÓXIMO SINAL →";
        }
    }
}

// Função para mostrar modal de conclusão
function showCompletionModal() {
    totalSignalsCompleted.textContent = totalSignals;
    completionModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Função para fechar modal
function closeModal() {
    completionModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Função para reiniciar
function restart() {
    closeModal();
    currentSignalIndex = 0;
    isRandomMode = false;
    randomModeButton.classList.remove('active');
    randomModeButton.textContent = '🎲 Modo Aleatório';
    loadSignal(0, true);
}

// Função para iniciar prática aleatória
function startRandomPractice() {
    closeModal();
    toggleRandomMode();
    loadRandomSignal();
}

// Função para repetir o vídeo
function repeatVideo() {
    if (avatarVideo) {
        avatarVideo.currentTime = 0;
        avatarVideo.play();
        isPlaying = true;
        updatePlayPauseButton();
    }
}

// Função para alternar play/pause
function togglePlayPause() {
    if (avatarVideo.paused) {
        avatarVideo.play();
        isPlaying = true;
    } else {
        avatarVideo.pause();
        isPlaying = false;
    }
    updatePlayPauseButton();
}

// Função para atualizar o botão play/pause
function updatePlayPauseButton() {
    if (isPlaying && !avatarVideo.paused) {
        playPauseButton.textContent = '⏸';
        playPauseButton.setAttribute('aria-label', 'Pausar vídeo');
        playPauseButton.setAttribute('title', 'Pausar (Espaço)');
    } else {
        playPauseButton.textContent = '▶';
        playPauseButton.setAttribute('aria-label', 'Reproduzir vídeo');
        playPauseButton.setAttribute('title', 'Reproduzir (Espaço)');
    }
}

// Função para alterar velocidade do vídeo
function changePlaybackSpeed() {
    currentPlaybackRateIndex = (currentPlaybackRateIndex + 1) % playbackRates.length;
    videoPlaybackRate = playbackRates[currentPlaybackRateIndex];
    avatarVideo.playbackRate = videoPlaybackRate;
    speedButton.textContent = `${videoPlaybackRate}x`;
}

// Função para atualizar controles de vídeo
function updateVideoControls() {
    speedButton.textContent = `${videoPlaybackRate}x`;
    updatePlayPauseButton();
    
    // Listener para quando o vídeo pausar/play automaticamente
    avatarVideo.addEventListener('play', () => {
        isPlaying = true;
        updatePlayPauseButton();
    });
    
    avatarVideo.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayPauseButton();
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Navegação
    nextSignalButton.addEventListener('click', nextSignal);
    prevSignalButton.addEventListener('click', prevSignal);
    
    // Controles de vídeo
    repeatButton.addEventListener('click', repeatVideo);
    playPauseButton.addEventListener('click', togglePlayPause);
    speedButton.addEventListener('click', changePlaybackSpeed);
    
    // Menu lateral
    randomModeButton.addEventListener('click', toggleRandomMode);
    
    // Modal
    restartButton.addEventListener('click', restart);
    randomPracticeButton.addEventListener('click', startRandomPractice);
    closeModalButton.addEventListener('click', closeModal);
    completionModal.addEventListener('click', (e) => {
        if (e.target === completionModal) {
            closeModal();
        }
    });
}

// Configurar atalhos de teclado
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ignorar se estiver digitando em um input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(e.key) {
            case 'ArrowRight':
            case 'Enter':
                e.preventDefault();
                nextSignal();
                break;
                
            case 'ArrowLeft':
                e.preventDefault();
                prevSignal();
                break;
                
            case ' ':
                e.preventDefault();
                if (e.target === avatarVideo) {
                    togglePlayPause();
                } else {
                    repeatVideo();
                }
                break;
                
            case 'r':
            case 'R':
                e.preventDefault();
                repeatVideo();
                break;
                
            case 'm':
            case 'M':
                e.preventDefault();
                if (sidebar.classList.contains('open')) {
                    closeSidebar();
                } else {
                    openSidebar();
                }
                break;
                
            case 'Escape':
                if (sidebar.classList.contains('open')) {
                    closeSidebar();
                }
                if (completionModal.classList.contains('active')) {
                    closeModal();
                }
                break;
        }
    });
}

// Inicializa o primeiro sinal
loadSignal(0, true);
