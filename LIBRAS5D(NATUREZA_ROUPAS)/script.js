/* ============================================
   DOCUMENTAÇÃO: DADOS DOS SINAIS
   - Array com todos os sinais de natureza/roupas
   - Cada sinal tem: id, título, vídeo, alt, contexto
   ============================================ */
const signals = [
    { id: 1, title: "TEMPO/CLIMA", video: "NATUREZA_ROUPAS/1_TEMPO_CLIMA.mp4", alt: "Avatar fazendo o sinal de Tempo/Clima", context: "Usado para se referir ao tempo ou clima" },
    { id: 2, title: "CALOR", video: "NATUREZA_ROUPAS/2_CALOR.mp4", alt: "Avatar fazendo o sinal de Calor", context: "Usado para indicar calor" },
    { id: 3, title: "FRIO", video: "NATUREZA_ROUPAS/3_FRIO.mp4", alt: "Avatar fazendo o sinal de Frio", context: "Usado para indicar frio" },
    { id: 4, title: "CHUVA", video: "NATUREZA_ROUPAS/4_CHUVA.mp4", alt: "Avatar fazendo o sinal de Chuva", context: "Usado para indicar chuva" },
    { id: 5, title: "VENTO", video: "NATUREZA_ROUPAS/5_VENTO.mp4", alt: "Avatar fazendo o sinal de Vento", context: "Usado para indicar vento" },
    { id: 6, title: "FLOR", video: "NATUREZA_ROUPAS/6_FLOR.mp4", alt: "Avatar fazendo o sinal de Flor", context: "Usado para se referir à flor" },
    { id: 7, title: "ÁRVORE", video: "NATUREZA_ROUPAS/7_ÁRVORE.mp4", alt: "Avatar fazendo o sinal de Árvore", context: "Usado para se referir à árvore" },
    { id: 8, title: "TERRA", video: "NATUREZA_ROUPAS/8_TERRA.mp4", alt: "Avatar fazendo o sinal de Terra", context: "Usado para se referir à terra" },
    { id: 9, title: "SOL", video: "NATUREZA_ROUPAS/9_SOL.mp4", alt: "Avatar fazendo o sinal de Sol", context: "Usado para se referir ao sol" },
    { id: 10, title: "ÁGUA", video: "NATUREZA_ROUPAS/10_ÁGUA.mp4", alt: "Avatar fazendo o sinal de Água", context: "Usado para se referir à água" },
    { id: 11, title: "RIO", video: "NATUREZA_ROUPAS/11_RIO.mp4", alt: "Avatar fazendo o sinal de Rio", context: "Usado para se referir ao rio" },
    { id: 12, title: "MAR", video: "NATUREZA_ROUPAS/12_MAR.mp4", alt: "Avatar fazendo o sinal de Mar", context: "Usado para se referir ao mar" },
    { id: 13, title: "LUA", video: "NATUREZA_ROUPAS/13_LUA.mp4", alt: "Avatar fazendo o sinal de Lua", context: "Usado para se referir à lua" },
    { id: 14, title: "ESTRELA", video: "NATUREZA_ROUPAS/14_ESTRELA.mp4", alt: "Avatar fazendo o sinal de Estrela", context: "Usado para se referir à estrela" },
    { id: 15, title: "GRAMA", video: "NATUREZA_ROUPAS/15_GRAMA.mp4", alt: "Avatar fazendo o sinal de Grama", context: "Usado para se referir à grama" },
    { id: 16, title: "VIAGEM/VIAJAR", video: "NATUREZA_ROUPAS/16_VIAGEM_VIAJAR.mp4", alt: "Avatar fazendo o sinal de Viagem/Viajar", context: "Usado para indicar viagem" },
    { id: 17, title: "ROUPAS", video: "NATUREZA_ROUPAS/17_ROUPAS.mp4", alt: "Avatar fazendo o sinal de Roupas", context: "Usado para se referir a roupas" },
    { id: 18, title: "CAMISETA", video: "NATUREZA_ROUPAS/18_CAMISETA.mp4", alt: "Avatar fazendo o sinal de Camiseta", context: "Usado para se referir à camiseta" },
    { id: 19, title: "SAIA", video: "NATUREZA_ROUPAS/19_SAIA.mp4", alt: "Avatar fazendo o sinal de Saia", context: "Usado para se referir à saia" },
    { id: 20, title: "VESTIDO", video: "NATUREZA_ROUPAS/20_VESTIDO.mp4", alt: "Avatar fazendo o sinal de Vestido", context: "Usado para se referir ao vestido" },
    { id: 21, title: "SAPATO", video: "NATUREZA_ROUPAS/21_SAPATO.mp4", alt: "Avatar fazendo o sinal de Sapato", context: "Usado para se referir ao sapato" },
    { id: 22, title: "CALÇA", video: "NATUREZA_ROUPAS/22_CALÇA.mp4", alt: "Avatar fazendo o sinal de Calça", context: "Usado para se referir à calça" },
    { id: 23, title: "BERMUDA", video: "NATUREZA_ROUPAS/23_BERMUDA.mp4", alt: "Avatar fazendo o sinal de Bermuda", context: "Usado para se referir à bermuda" },
    { id: 24, title: "DÚVIDA", video: "NATUREZA_ROUPAS/24_DÚVIDA.mp4", alt: "Avatar fazendo o sinal de Dúvida", context: "Usado para indicar dúvida" },
    { id: 25, title: "PACIÊNCIA", video: "NATUREZA_ROUPAS/25_PACIÊNCIA.mp4", alt: "Avatar fazendo o sinal de Paciência", context: "Usado para indicar paciência" },
    { id: 26, title: "VERDADE", video: "NATUREZA_ROUPAS/26_VERDADE.mp4", alt: "Avatar fazendo o sinal de Verdade", context: "Usado para indicar verdade" },
    { id: 27, title: "MENTIRA", video: "NATUREZA_ROUPAS/27_MENTIRA.mp4", alt: "Avatar fazendo o sinal de Mentira", context: "Usado para indicar mentira" },
    { id: 28, title: "CALMA", video: "NATUREZA_ROUPAS/28_CALMA.mp4", alt: "Avatar fazendo o sinal de Calma", context: "Usado para indicar calma" },
    { id: 29, title: "NERVOSO", video: "NATUREZA_ROUPAS/29_NERVOSO.mp4", alt: "Avatar fazendo o sinal de Nervoso", context: "Usado para indicar nervosismo" },
    { id: 30, title: "PREOCUPAR", video: "NATUREZA_ROUPAS/30_PREOCUPAR.mp4", alt: "Avatar fazendo o sinal de Preocupar", context: "Usado para indicar preocupação" },
    { id: 31, title: "LEVAR", video: "NATUREZA_ROUPAS/31_LEVAR.mp4", alt: "Avatar fazendo o sinal de Levar", context: "Usado para indicar ação de levar" },
    { id: 32, title: "SAIR/IR", video: "NATUREZA_ROUPAS/32_SAIR_IR.mp4", alt: "Avatar fazendo o sinal de Sair/Ir", context: "Usado para indicar ação de sair ou ir" },
    { id: 33, title: "CHEGAR", video: "NATUREZA_ROUPAS/33_CHEGAR.mp4", alt: "Avatar fazendo o sinal de Chegar", context: "Usado para indicar chegada" },
    { id: 34, title: "SUMIR", video: "NATUREZA_ROUPAS/34_SUMIR.mp4", alt: "Avatar fazendo o sinal de Sumir", context: "Usado para indicar desaparecimento" },
    { id: 35, title: "COMEÇAR", video: "NATUREZA_ROUPAS/35_COMEÇAR.mp4", alt: "Avatar fazendo o sinal de Começar", context: "Usado para indicar início" },
    { id: 36, title: "TERMINAR", video: "NATUREZA_ROUPAS/36_TERMINAR.mp4", alt: "Avatar fazendo o sinal de Terminar", context: "Usado para indicar término" },
    { id: 37, title: "ESCOLHER", video: "NATUREZA_ROUPAS/37_ESCOLHER.mp4", alt: "Avatar fazendo o sinal de Escolher", context: "Usado para indicar escolha" },
    { id: 38, title: "ESPERAR", video: "NATUREZA_ROUPAS/38_ESPERAR.mp4", alt: "Avatar fazendo o sinal de Esperar", context: "Usado para indicar espera" }
];

/* ============================================
   DOCUMENTAÇÃO: SELEÇÃO DE ELEMENTOS DOM
   - Referências para todos os elementos principais
   - Organizado por seção para facilitar manutenção
   ============================================ */
const nextSignalButton = document.getElementById('nextSignalButton');
const prevSignalButton = document.getElementById('prevSignalButton');
const repeatButton = document.getElementById('repeatButton');
const playPauseButton = document.getElementById('playPauseButton');
const speedButton = document.getElementById('speedButton');
const avatarVideo = document.getElementById('avatarVideo');
const progressBarFill = document.getElementById('progressBarFill');
const progressPercentage = document.getElementById('progressPercentage');
const progressText = document.getElementById('progressText');
const pointsDisplay = document.getElementById('pointsDisplay');
const signalCounter = document.getElementById('signalCounter');
const titleBanner = document.getElementById('titleBanner');
const meaningText = document.getElementById('meaningText');
const meaningTextInline = document.getElementById('meaningTextInline');
const card = document.getElementById('card');
const badgeNumber = document.getElementById('badgeNumber');
const progressDots = document.getElementById('progressDots');
const toastContainer = document.getElementById('toastContainer');
const finalPoints = document.getElementById('finalPoints');

// Elementos do menu lateral
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.querySelector('.sidebar-close');
const signalsList = document.getElementById('signalsList');
const randomModeButton = document.getElementById('randomModeButton');
const gameModeButton = document.getElementById('gameModeButton');

// Elementos do jogo
const gameSection = document.getElementById('gameSection');
const closeGameButton = document.getElementById('closeGameButton');
const gameVideo = document.getElementById('gameVideo');
const gameOptions = document.getElementById('gameOptions');
const gameFeedback = document.getElementById('gameFeedback');
const feedbackContent = document.getElementById('feedbackContent');
const nextQuestionButton = document.getElementById('nextQuestionButton');
const gameProgressFill = document.getElementById('gameProgressFill');
const gameProgressText = document.getElementById('gameProgressText');
const gameScoreText = document.getElementById('gameScoreText');
const gameCard = document.getElementById('gameCard');
const gameLevel1 = document.getElementById('gameLevel1');
const gameLevel2 = document.getElementById('gameLevel2');
const gameVideosContainer = document.getElementById('gameVideosContainer');
const level2Question = document.getElementById('level2Question');
const level2SignalName = document.getElementById('level2SignalName');
const levelSelectorModal = document.getElementById('levelSelectorModal');
const closeLevelSelectorButton = document.getElementById('closeLevelSelectorButton');
const currentLevelBadge = document.getElementById('currentLevelBadge');

// Elementos do modal
const completionModal = document.getElementById('completionModal');
const totalSignalsCompleted = document.getElementById('totalSignalsCompleted');
const restartButton = document.getElementById('restartButton');
const randomPracticeButton = document.getElementById('randomPracticeButton');
const closeModalButton = document.getElementById('closeModalButton');

/* ============================================
   DOCUMENTAÇÃO: VARIÁVEIS DE ESTADO DO JOGO
   - Controla o estado atual da aplicação
   - Sistema de pontos e progresso
   ============================================ */
let currentSignalIndex = 0;
const totalSignals = signals.length;
let isRandomMode = false;
let videoPlaybackRate = 1;
let isPlaying = true;
let points = 0;
let completedSignals = new Set(); // Armazena quais sinais foram completados
let isNavigating = false; // Flag para prevenir múltiplas navegações simultâneas
let lastKeyPress = {}; // Rastreia última tecla pressionada para prevenir spam

// Variáveis do jogo
let gameMode = false;
let currentGameQuestion = 0;
let gameScore = 0;
let gameQuestions = []; // Array com ordem das perguntas
let currentCorrectAnswer = null;
let gameAnswered = false;
let currentGameLevel = 1; // 1 = 4 alternativas, 2 = 2 vídeos

// Velocidades disponíveis para o vídeo
const playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 2];
let currentPlaybackRateIndex = 2; // Começa em 1x

/* ============================================
   DOCUMENTAÇÃO: SISTEMA DE PONTOS
   - Adiciona pontos ao completar sinais
   - Feedback visual com animação
   ============================================ */
// Variável para rastrear última adição de pontos (proteção extra)
let lastPointsAddition = {
    signalIndex: null,
    timestamp: 0,
    amount: 0
};

// Set para rastrear quais sinais já receberam pontos nesta sessão
let pointsGivenForSignals = new Set();

function addPoints(amount, signalIndex = null) {
    // Usa o índice do sinal atual se não fornecido
    const targetIndex = signalIndex !== null ? signalIndex : currentSignalIndex;

    // PROTEÇÃO MÚLTIPLA:
    // 1. Verifica se pontos já foram dados para este sinal específico
    const pointsKey = `signal_${targetIndex}_${amount}`;
    if (pointsGivenForSignals.has(pointsKey)) {
        console.log('Pontos já foram adicionados para este sinal');
        return;
    }

    // 2. Verifica timestamp (proteção contra chamadas muito rápidas)
    const now = Date.now();
    if (lastPointsAddition.signalIndex === targetIndex &&
        lastPointsAddition.amount === amount &&
        (now - lastPointsAddition.timestamp) < 2000) {
        console.log('Pontos já foram adicionados recentemente');
        return;
    }

    // Marca que pontos foram dados para este sinal
    pointsGivenForSignals.add(pointsKey);

    // Atualiza registro
    lastPointsAddition.signalIndex = targetIndex;
    lastPointsAddition.amount = amount;
    lastPointsAddition.timestamp = now;

    // Adiciona pontos
    points += amount;

    updatePointsDisplay();
    showToast(`+${amount} pontos!`, 'success');

    // Animação de conquista no display de pontos
    const pointsDisplayElement = document.querySelector('.stat-item-vertical.points-display');
    if (pointsDisplayElement) {
        pointsDisplayElement.classList.add('achievement');
        setTimeout(() => {
            pointsDisplayElement.classList.remove('achievement');
        }, 600);
    }
}

function updatePointsDisplay() {
    pointsDisplay.textContent = points;
    // Animação de pulso ao atualizar
    pointsDisplay.parentElement.style.animation = 'none';
    setTimeout(() => {
        pointsDisplay.parentElement.style.animation = 'pulse 0.5s ease';
    }, 10);
}

/* ============================================
   DOCUMENTAÇÃO: SISTEMA DE NOTIFICAÇÕES TOAST
   - Feedback visual para ações do usuário
   - Animações suaves de entrada/saída
   ============================================ */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: '✅',
        info: 'ℹ️',
        warning: '⚠️'
    };

    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Remove após 3 segundos
    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Adiciona animação de saída
const style = document.createElement('style');
style.textContent = `
    @keyframes toastSlideOut {
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

/* ============================================
   DOCUMENTAÇÃO: INDICADORES DE PROGRESSO (BOLINHAS)
   - Cria bolinhas para cada sinal
   - Atualiza visualmente o progresso
   ============================================ */
function createProgressDots() {
    progressDots.innerHTML = '';
    signals.forEach((signal, index) => {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (completedSignals.has(index)) {
            dot.classList.add('completed');
        }
        if (index === currentSignalIndex) {
            dot.classList.add('active');
        }
        progressDots.appendChild(dot);
    });
}

function updateProgressDots() {
    const dots = progressDots.querySelectorAll('.progress-dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (completedSignals.has(index)) {
            dot.classList.add('completed');
        }
        if (index === currentSignalIndex) {
            dot.classList.add('active');
        }
    });
}

/* ============================================
   DOCUMENTAÇÃO: ATUALIZAÇÃO DE PROGRESSO
   - Calcula e atualiza barra de progresso
   - Atualiza porcentagem e contador
   ============================================ */
function updateProgress() {
    const progress = ((currentSignalIndex + 1) / totalSignals) * 100;
    progressBarFill.style.width = `${progress}%`;
    progressPercentage.textContent = `${Math.round(progress)}%`;
    progressText.textContent = `${currentSignalIndex + 1}/${totalSignals}`;
    badgeNumber.textContent = currentSignalIndex + 1;
}

/* ============================================
   DOCUMENTAÇÃO: CARREGAMENTO DE SINAL
   - Carrega um sinal específico com animação
   - Atualiza todos os elementos visuais
   ============================================ */
function loadSignal(index, skipAnimation = false) {
    if (index < 0 || index >= totalSignals) {
        // Libera flag se índice inválido
        isNavigating = false;
        return;
    }

    if (!skipAnimation) {
        // Animação de transição
        card.style.opacity = '0.5';
        card.style.transform = 'translateY(20px) scale(0.98)';

        setTimeout(() => {
            updateSignalContent(index);
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';

            // Libera flag após a transição completar (400ms da animação + pequena margem)
            // Reduzido para permitir navegação mais rápida, mas ainda previne spam
            setTimeout(() => {
                isNavigating = false;
            }, 400);
        }, 100);
    } else {
        updateSignalContent(index);
        // Libera flag imediatamente se não houver animação
        isNavigating = false;
    }
}

function updateSignalContent(index) {
    currentSignalIndex = index;
    const signal = signals[index];

    // Não reseta a proteção - mantém o histórico para prevenir duplicação

    // Atualiza título com animação
    titleBanner.textContent = signal.title;

    // Atualiza vídeo
    avatarVideo.src = signal.video;
    avatarVideo.alt = signal.alt;
    avatarVideo.load();
    avatarVideo.playbackRate = videoPlaybackRate;

    avatarVideo.addEventListener('loadeddata', () => {
        if (isPlaying) {
            avatarVideo.play();
        }
    }, { once: true });

    // Atualiza contexto
    const meaningTextInline = document.getElementById('meaningTextInline');
    if (meaningTextInline) {
        meaningTextInline.textContent = signal.context;
    }
    if (meaningText) {
        meaningText.textContent = signal.context;
    }

    // Atualiza progresso
    updateProgress();
    updateProgressDots();

    // Atualiza botões
    updateNavigationButtons();
    updateSignalsList();

    // Atualiza texto do botão
    if (index === totalSignals - 1) {
        nextSignalButton.innerHTML = '<span class="btn-text">Concluir</span><span class="btn-icon">✓</span>';
    } else {
        nextSignalButton.innerHTML = '<span class="btn-text">Próximo</span><span class="btn-icon">→</span>';
    }
}

/* ============================================
   DOCUMENTAÇÃO: NAVEGAÇÃO ENTRE SINAIS
   - Avança ou retrocede entre sinais
   - Adiciona pontos ao completar
   - Proteção robusta contra spam de teclas
   ============================================ */
function nextSignal() {
    // PROTEÇÃO 1: Previne múltiplas chamadas simultâneas (apenas durante transição)
    if (isNavigating) {
        return;
    }

    // PROTEÇÃO 2: Marca imediatamente como navegando
    isNavigating = true;

    // PROTEÇÃO 3: Salva o índice atual ANTES de qualquer operação
    const signalIndexToComplete = currentSignalIndex;

    // PROTEÇÃO 4: Verifica se o sinal já foi completado ANTES de processar
    const alreadyCompleted = completedSignals.has(signalIndexToComplete);

    if (!alreadyCompleted) {
        // Marca como completo IMEDIATAMENTE (antes de adicionar pontos)
        completedSignals.add(signalIndexToComplete);

        // Adiciona pontos com o índice específico para garantir unicidade
        addPoints(10, signalIndexToComplete);
        updateProgressDots();
    }

    // Navega para o próximo sinal
    if (isRandomMode) {
        loadRandomSignal();
    } else if (currentSignalIndex < totalSignals - 1) {
        loadSignal(currentSignalIndex + 1);
    } else {
        // Bônus por completar todos os sinais (verificação adicional)
        const allCompleted = completedSignals.size === totalSignals;
        const bonusKey = 'bonus_final';
        if (allCompleted && !pointsGivenForSignals.has(bonusKey)) {
            pointsGivenForSignals.add(bonusKey);
            addPoints(50, 'bonus'); // Bônus de 50 pontos
        }
        showCompletionModal();
        // Libera flag imediatamente se for modal (não precisa esperar transição)
        isNavigating = false;
    }
}

function prevSignal() {
    // Previne múltiplas chamadas simultâneas
    if (isNavigating) {
        return;
    }

    if (currentSignalIndex > 0) {
        isNavigating = true;
        loadSignal(currentSignalIndex - 1);
        // Flag será liberada quando loadSignal completar (no updateSignalContent)
    }
}

function updateNavigationButtons() {
    prevSignalButton.disabled = currentSignalIndex === 0;
    prevSignalButton.style.opacity = currentSignalIndex === 0 ? '0.5' : '1';
    prevSignalButton.style.cursor = currentSignalIndex === 0 ? 'not-allowed' : 'pointer';
}

/* ============================================
   DOCUMENTAÇÃO: MODO ALEATÓRIO
   - Carrega sinais aleatórios para prática
   - Evita repetir o mesmo sinal consecutivamente
   ============================================ */
function loadRandomSignal() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * totalSignals);
    } while (randomIndex === currentSignalIndex && totalSignals > 1);

    loadSignal(randomIndex);
}

function toggleRandomMode() {
    isRandomMode = !isRandomMode;
    randomModeButton.classList.toggle('active', isRandomMode);

    if (isRandomMode) {
        randomModeButton.innerHTML = '<span class="button-icon">🎲</span><span>Modo Aleatório (Ativo)</span>';
        nextSignalButton.innerHTML = '<span class="btn-text">Aleatório</span><span class="btn-icon">🎲</span>';
        showToast('Modo aleatório ativado!', 'info');
    } else {
        randomModeButton.innerHTML = '<span class="button-icon">🎲</span><span>Modo Aleatório</span>';
        if (currentSignalIndex === totalSignals - 1) {
            nextSignalButton.innerHTML = '<span class="btn-text">Concluir</span><span class="btn-icon">✓</span>';
        } else {
            nextSignalButton.innerHTML = '<span class="btn-text">Próximo</span><span class="btn-icon">→</span>';
        }
    }
}

/* ============================================
   DOCUMENTAÇÃO: CONTROLES DE VÍDEO
   - Play/pause, repetir, velocidade
   - Feedback visual
   ============================================ */
function repeatVideo() {
    if (avatarVideo) {
        avatarVideo.currentTime = 0;
        avatarVideo.play();
        isPlaying = true;
        updatePlayPauseButton();
        showToast('Vídeo reiniciado', 'info');
    }
}

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

function updatePlayPauseButton() {
    if (isPlaying && !avatarVideo.paused) {
        playPauseButton.innerHTML = '<span>⏸</span>';
        playPauseButton.setAttribute('aria-label', 'Pausar vídeo');
    } else {
        playPauseButton.innerHTML = '<span>▶</span>';
        playPauseButton.setAttribute('aria-label', 'Reproduzir vídeo');
    }
}

function changePlaybackSpeed() {
    currentPlaybackRateIndex = (currentPlaybackRateIndex + 1) % playbackRates.length;
    videoPlaybackRate = playbackRates[currentPlaybackRateIndex];
    avatarVideo.playbackRate = videoPlaybackRate;
    speedButton.innerHTML = `<span>${videoPlaybackRate}x</span>`;
    showToast(`Velocidade: ${videoPlaybackRate}x`, 'info');
}

function updateVideoControls() {
    speedButton.innerHTML = `<span>${videoPlaybackRate}x</span>`;
    updatePlayPauseButton();

    avatarVideo.addEventListener('play', () => {
        isPlaying = true;
        updatePlayPauseButton();
    });

    avatarVideo.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayPauseButton();
    });
}

/* ============================================
   DOCUMENTAÇÃO: MENU LATERAL
   - Lista de sinais com indicadores
   - Navegação rápida
   ============================================ */
function populateSignalsList() {
    signalsList.innerHTML = '';
    signals.forEach((signal, index) => {
        const li = document.createElement('li');
        const isCompleted = completedSignals.has(index);
        const isActive = index === currentSignalIndex;

        li.innerHTML = `
            <span>${signal.id}. ${signal.title}</span>
            ${isCompleted ? '<span class="signal-completed">✓</span>' : ''}
        `;

        li.setAttribute('role', 'listitem');
        li.setAttribute('tabindex', '0');
        li.setAttribute('aria-label', `Ir para ${signal.title}`);

        if (isActive) {
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

function updateSignalsList() {
    const items = signalsList.querySelectorAll('li');
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentSignalIndex) {
            item.classList.add('active');
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Atualiza indicador de conclusão
        const checkmark = item.querySelector('.signal-completed');
        if (completedSignals.has(index) && !checkmark) {
            item.innerHTML = `
                <span>${signals[index].id}. ${signals[index].title}</span>
                <span class="signal-completed">✓</span>
            `;
        }
    });
}

function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

/* ============================================
   DOCUMENTAÇÃO: MODAL DE CONCLUSÃO
   - Exibe estatísticas finais
   - Opções de ação
   ============================================ */
function showCompletionModal() {
    totalSignalsCompleted.textContent = totalSignals;
    finalPoints.textContent = points;
    completionModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    showToast('Parabéns! Você completou todos os sinais!', 'success');
}

function closeModal() {
    completionModal.classList.remove('active');
    document.body.style.overflow = '';
}

function restart() {
    closeModal();
    currentSignalIndex = 0;
    isRandomMode = false;
    points = 0;
    completedSignals.clear();
    pointsGivenForSignals.clear(); // Limpa histórico de pontos
    lastPointsAddition = { signalIndex: null, timestamp: 0, amount: 0 }; // Reseta registro
    isNavigating = false; // Reseta flag de navegação
    randomModeButton.classList.remove('active');
    randomModeButton.innerHTML = '<span class="button-icon">🎲</span><span>Modo Aleatório</span>';
    updatePointsDisplay();
    createProgressDots();
    loadSignal(0, true);
    showToast('Jogo reiniciado!', 'info');
}

function startRandomPractice() {
    closeModal();
    if (!isRandomMode) {
        toggleRandomMode();
    }
    loadRandomSignal();
}

/* ============================================
   DOCUMENTAÇÃO: ATALHOS DE TECLADO
   - Navegação rápida
   - Controles de vídeo
   - Menu
   - Proteção contra spam de teclas (key repeat)
   ============================================ */
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        // Previne key repeat (tecla mantida pressionada)
        const key = e.key;
        const now = Date.now();

        // Se a mesma tecla foi pressionada há menos de 300ms, ignora (key repeat)
        if (lastKeyPress[key] && (now - lastKeyPress[key]) < 300) {
            e.preventDefault();
            return;
        }

        lastKeyPress[key] = now;

        switch (key) {
            case 'ArrowRight':
            case 'Enter':
                e.preventDefault();
                e.stopPropagation(); // Para propagação do evento
                // Verifica se não está navegando antes de chamar
                if (!isNavigating) {
                    nextSignal();
                }
                break;

            case 'ArrowLeft':
                e.preventDefault();
                // Verifica se não está navegando antes de chamar
                if (!isNavigating) {
                    prevSignal();
                }
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

    // Limpa o registro quando a tecla é solta
    document.addEventListener('keyup', (e) => {
        delete lastKeyPress[e.key];
    });
}

/* ============================================
   DOCUMENTAÇÃO: SISTEMA DE JOGO
   - Gera perguntas com 4 alternativas
   - Verifica respostas
   - Controla progresso e pontuação
   ============================================ */
function startGame() {
    // Mostra o seletor de nível
    levelSelectorModal.style.display = 'flex';
}

function startGameWithLevel(level) {
    currentGameLevel = level;
    gameMode = true;
    currentGameQuestion = 0;
    gameScore = 0;
    gameAnswered = false;

    // Cria array com todos os sinais em ordem aleatória
    gameQuestions = [...Array(signals.length).keys()];
    shuffleArray(gameQuestions);

    // Esconde o seletor de nível e a seção principal, mostra o jogo
    levelSelectorModal.style.display = 'none';
    document.querySelector('.game-wrapper').style.display = 'none';
    document.querySelector('.compact-progress').style.display = 'none';
    document.querySelector('.progress-dots').style.display = 'none';
    gameSection.style.display = 'block';

    // Atualiza badge do nível
    if (currentLevelBadge) {
        currentLevelBadge.textContent = `Nível ${level}`;
    }

    // Mostra/esconde os níveis apropriados
    if (level === 1) {
        gameLevel1.style.display = 'block';
        gameLevel2.style.display = 'none';
    } else {
        gameLevel1.style.display = 'none';
        gameLevel2.style.display = 'block';
    }

    // Fecha o menu lateral se estiver aberto
    closeSidebar();

    // Restaura o botão de próxima pergunta original
    const gameActions = document.querySelector('.game-actions');
    gameActions.innerHTML = '<button class="game-action-btn next-question-btn" id="nextQuestionButton" style="display: none;"><span>Próxima Pergunta →</span></button>';

    // Reconecta o event listener ao botão recriado
    const restoredNextButton = document.getElementById('nextQuestionButton');
    if (restoredNextButton) {
        restoredNextButton.addEventListener('click', nextGameQuestion);
    }

    // Carrega a primeira pergunta
    loadGameQuestion();
    updateGameScore();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadGameQuestion() {
    if (currentGameQuestion >= gameQuestions.length) {
        endGame();
        return;
    }

    gameAnswered = false;

    if (currentGameLevel === 1) {
        loadLevel1Question();
    } else {
        loadLevel2Question();
    }

    // Atualiza progresso
    updateGameProgress();

    // Esconde feedback e botão de próxima pergunta
    gameFeedback.style.display = 'none';
    const nextBtn = document.getElementById('nextQuestionButton');
    if (nextBtn) {
        nextBtn.style.display = 'none';
        nextBtn.innerHTML = '<span>Próxima Pergunta →</span>';
    }
}

function loadLevel1Question() {
    const questionIndex = gameQuestions[currentGameQuestion];
    const correctSignal = signals[questionIndex];

    // Define a resposta correta
    currentCorrectAnswer = questionIndex;

    // Carrega o vídeo
    gameVideo.src = correctSignal.video;
    gameVideo.load();
    gameVideo.play();

    // Gera as alternativas
    generateGameOptions(questionIndex);

    // Habilita os botões de opção e remove classes de estado
    const optionButtons = gameOptions.querySelectorAll('.game-option-btn');
    optionButtons.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect', 'wrong-gray', 'correct-animated');
    });
}

function loadLevel2Question() {
    const questionIndex = gameQuestions[currentGameQuestion];
    const correctSignal = signals[questionIndex];

    // Define a resposta correta
    currentCorrectAnswer = questionIndex;

    // Atualiza a pergunta
    level2SignalName.textContent = correctSignal.title;

    // Gera os 2 vídeos (1 correto + 1 incorreto)
    generateLevel2Videos(questionIndex);
}

function generateGameOptions(correctIndex) {
    // Cria array com índices de todos os sinais exceto o correto
    const otherIndices = signals
        .map((_, index) => index)
        .filter(index => index !== correctIndex);

    // Seleciona 3 aleatórios
    const wrongOptions = [];
    while (wrongOptions.length < 3 && otherIndices.length > 0) {
        const randomIndex = Math.floor(Math.random() * otherIndices.length);
        wrongOptions.push(otherIndices.splice(randomIndex, 1)[0]);
    }

    // Cria array com todas as opções (correta + 3 incorretas)
    const allOptions = [correctIndex, ...wrongOptions];

    // Embaralha as opções
    shuffleArray(allOptions);

    // Limpa opções anteriores
    gameOptions.innerHTML = '';

    // Cores para cada botão: verde, azul, laranja, vermelho
    const buttonColors = ['option-green', 'option-blue', 'option-orange', 'option-red'];
    // Letras para cada alternativa
    const optionLetters = ['A', 'B', 'C', 'D'];

    // Cria botões para cada opção
    allOptions.forEach((optionIndex, buttonIndex) => {
        const signal = signals[optionIndex];
        const button = document.createElement('button');
        button.className = `game-option-btn ${buttonColors[buttonIndex]}`;
        button.setAttribute('data-index', optionIndex);
        button.setAttribute('data-letter', optionLetters[buttonIndex]);

        // Cria estrutura com letra e texto
        const letterSpan = document.createElement('span');
        letterSpan.className = 'option-letter';
        letterSpan.textContent = optionLetters[buttonIndex];

        const textSpan = document.createElement('span');
        textSpan.className = 'option-text';
        textSpan.textContent = signal.title;

        button.appendChild(letterSpan);
        button.appendChild(textSpan);
        button.addEventListener('click', () => handleGameAnswer(optionIndex));
        gameOptions.appendChild(button);
    });
}

function generateLevel2Videos(correctIndex) {
    // Cria array com índices de todos os sinais exceto o correto
    const otherIndices = signals
        .map((_, index) => index)
        .filter(index => index !== correctIndex);

    // Seleciona 1 aleatório para ser o vídeo incorreto
    const wrongIndex = otherIndices[Math.floor(Math.random() * otherIndices.length)];

    // Cria array com os 2 vídeos (correto + incorreto)
    const videos = [
        { index: correctIndex, isCorrect: true },
        { index: wrongIndex, isCorrect: false }
    ];

    // Embaralha os vídeos
    shuffleArray(videos);

    // Limpa container anterior
    gameVideosContainer.innerHTML = '';

    // Cria os 2 vídeos
    videos.forEach((video, videoIndex) => {
        const signal = signals[video.index];
        const videoWrapper = document.createElement('div');
        videoWrapper.className = 'level2-video-wrapper';
        videoWrapper.setAttribute('data-index', video.index);
        videoWrapper.setAttribute('data-correct', video.isCorrect);

        const videoElement = document.createElement('video');
        videoElement.src = signal.video;
        videoElement.className = 'level2-video';
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;

        const videoLabel = document.createElement('div');
        videoLabel.className = 'level2-video-label';
        videoLabel.textContent = videoIndex === 0 ? 'Vídeo A' : 'Vídeo B';

        videoWrapper.appendChild(videoElement);
        videoWrapper.appendChild(videoLabel);

        videoWrapper.addEventListener('click', () => handleLevel2Answer(video.index, videoWrapper));
        gameVideosContainer.appendChild(videoWrapper);
    });
}

function handleLevel2Answer(selectedIndex, videoElement) {
    if (gameAnswered) return;

    gameAnswered = true;
    const isCorrect = selectedIndex === currentCorrectAnswer;
    const videoWrappers = gameVideosContainer.querySelectorAll('.level2-video-wrapper');

    // Desabilita todos os vídeos e mostra resultado
    videoWrappers.forEach(wrapper => {
        wrapper.style.pointerEvents = 'none';
        const wrapperIndex = parseInt(wrapper.getAttribute('data-index'));
        const isWrapperCorrect = wrapper.getAttribute('data-correct') === 'true';

        if (isWrapperCorrect) {
            wrapper.classList.add('correct-video');
            wrapper.classList.add('correct-video-animated');
        } else {
            wrapper.classList.add('wrong-video');
        }
    });

    // Mostra feedback
    if (isCorrect) {
        gameScore += 10;
        showGameFeedback('✅ Correto! Parabéns!', 'success');
        addPoints(10);
    } else {
        const correctSignal = signals[currentCorrectAnswer];
        showGameFeedback(`❌ Incorreto! O vídeo correto representa: ${correctSignal.title}`, 'error');
    }

    updateGameScore();

    // Mostra botão para próxima pergunta
    const nextBtn = document.getElementById('nextQuestionButton');
    if (nextBtn) {
        if (currentGameQuestion < gameQuestions.length - 1) {
            nextBtn.innerHTML = '<span>Próxima Pergunta →</span>';
            nextBtn.style.display = 'block';
        } else {
            nextBtn.innerHTML = '<span>Ver Resultado Final</span>';
            nextBtn.style.display = 'block';
        }
    }
}

function handleGameAnswer(selectedIndex) {
    if (gameAnswered) return;

    gameAnswered = true;
    const optionButtons = gameOptions.querySelectorAll('.game-option-btn');
    const isCorrect = selectedIndex === currentCorrectAnswer;

    // Desabilita todos os botões
    optionButtons.forEach(btn => {
        btn.disabled = true;
        const btnIndex = parseInt(btn.getAttribute('data-index'));

        if (btnIndex === currentCorrectAnswer) {
            btn.classList.add('correct');
            btn.classList.add('correct-animated');
        } else {
            // Todas as alternativas erradas ficam cinzas
            if (btnIndex === selectedIndex && !isCorrect) {
                // Primeiro adiciona a animação de erro
                btn.classList.add('incorrect');
                // Depois de 0.5s (duração da animação), adiciona cinza
                setTimeout(() => {
                    btn.classList.add('wrong-gray');
                }, 500);
            } else {
                // Alternativas não selecionadas ficam cinzas imediatamente
                btn.classList.add('wrong-gray');
            }
        }
    });

    // Mostra feedback
    if (isCorrect) {
        gameScore += 10;
        showGameFeedback('✅ Correto! Parabéns!', 'success');
        addPoints(10);
    } else {
        const correctSignal = signals[currentCorrectAnswer];
        showGameFeedback(`❌ Incorreto! A resposta correta é: ${correctSignal.title}`, 'error');
    }

    updateGameScore();

    // Mostra botão para próxima pergunta
    const nextBtn = document.getElementById('nextQuestionButton');
    if (nextBtn) {
        if (currentGameQuestion < gameQuestions.length - 1) {
            nextBtn.innerHTML = '<span>Próxima Pergunta →</span>';
            nextBtn.style.display = 'block';
        } else {
            nextBtn.innerHTML = '<span>Ver Resultado Final</span>';
            nextBtn.style.display = 'block';
        }
    }
}

function showGameFeedback(message, type) {
    feedbackContent.innerHTML = message;
    feedbackContent.className = `feedback-content ${type}`;
    gameFeedback.style.display = 'block';
}

function nextGameQuestion() {
    currentGameQuestion++;
    loadGameQuestion();
}

function updateGameProgress() {
    const progress = ((currentGameQuestion + 1) / gameQuestions.length) * 100;
    gameProgressFill.style.width = `${progress}%`;
    gameProgressText.textContent = `Pergunta ${currentGameQuestion + 1}/${gameQuestions.length}`;
}

function updateGameScore() {
    gameScoreText.textContent = `Pontuação: ${gameScore}`;
}

function endGame() {
    const percentage = Math.round((gameScore / (gameQuestions.length * 10)) * 100);
    let message = '';

    if (percentage === 100) {
        message = '🎉 Perfeito! Você acertou todas as perguntas!';
    } else if (percentage >= 80) {
        message = '👏 Excelente! Você teve um ótimo desempenho!';
    } else if (percentage >= 60) {
        message = '👍 Bom trabalho! Continue praticando!';
    } else {
        message = '💪 Continue estudando! Você vai melhorar!';
    }

    showGameFeedback(`${message}<br><br>Pontuação Final: ${gameScore}/${gameQuestions.length * 10} (${percentage}%)`, 'final');

    // Esconde botão de próxima pergunta e mostra botão de reiniciar
    const nextBtn = document.getElementById('nextQuestionButton');
    if (nextBtn) {
        nextBtn.style.display = 'none';
    }

    const restartButton = document.createElement('button');
    restartButton.className = 'game-action-btn restart-game-btn';
    restartButton.textContent = '🔄 Jogar Novamente';
    restartButton.addEventListener('click', () => {
        startGame();
    });

    const backButton = document.createElement('button');
    backButton.className = 'game-action-btn back-to-main-btn';
    backButton.textContent = '← Voltar ao Menu Principal';
    backButton.addEventListener('click', () => {
        closeGame();
    });

    const gameActions = document.querySelector('.game-actions');
    gameActions.innerHTML = '';
    gameActions.appendChild(restartButton);
    gameActions.appendChild(backButton);
}

function closeGame() {
    gameMode = false;
    gameSection.style.display = 'none';
    levelSelectorModal.style.display = 'none';
    document.querySelector('.game-wrapper').style.display = 'flex';
    document.querySelector('.compact-progress').style.display = 'block';
    document.querySelector('.progress-dots').style.display = 'flex';
}

/* ============================================
   DOCUMENTAÇÃO: CONFIGURAÇÃO DE EVENT LISTENERS
   - Organiza todos os event listeners
   ============================================ */
function setupEventListeners() {
    // Navegação com proteção contra múltiplos cliques
    nextSignalButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (!isNavigating) {
            nextSignal();
        }
    });

    prevSignalButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (!isNavigating) {
            prevSignal();
        }
    });

    // Controles de vídeo
    repeatButton.addEventListener('click', repeatVideo);
    playPauseButton.addEventListener('click', togglePlayPause);
    speedButton.addEventListener('click', changePlaybackSpeed);

    // Menu lateral
    menuToggle.addEventListener('click', openSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
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

    // Jogo
    if (gameModeButton) {
        gameModeButton.addEventListener('click', startGame);
    }
    if (closeGameButton) {
        closeGameButton.addEventListener('click', closeGame);
    }
    // Event listener do botão de próxima pergunta é adicionado dinamicamente
    // quando o botão é recriado em startGame()

    // Seletor de nível
    if (closeLevelSelectorButton) {
        closeLevelSelectorButton.addEventListener('click', () => {
            levelSelectorModal.style.display = 'none';
        });
    }

    // Botões de seleção de nível
    const levelOptionButtons = document.querySelectorAll('.level-option-btn');
    levelOptionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = parseInt(btn.getAttribute('data-level'));
            startGameWithLevel(level);
        });
    });

    // Fechar seletor ao clicar fora
    if (levelSelectorModal) {
        levelSelectorModal.addEventListener('click', (e) => {
            if (e.target === levelSelectorModal) {
                levelSelectorModal.style.display = 'none';
            }
        });
    }
}

/* ============================================
   DOCUMENTAÇÃO: INICIALIZAÇÃO
   - Configura tudo ao carregar a página
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    loadSignal(0, true);
    populateSignalsList();
    createProgressDots();
    setupEventListeners();
    setupKeyboardShortcuts();
    updateVideoControls();
    updatePointsDisplay();
});
