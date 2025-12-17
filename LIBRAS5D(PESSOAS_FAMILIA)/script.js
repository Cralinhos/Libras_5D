/* ============================================
   DOCUMENTAÇÃO: DADOS DOS SINAIS
   - Array com todos os sinais de pessoas/família
   - Cada sinal tem: id, título, vídeo, alt, contexto
   ============================================ */
const signals = [
    { id: 1, title: "PESSOAS", video: "PESSOAS_FAMILIA/1_PESSOAS.mp4", alt: "Avatar fazendo o sinal de Pessoas", context: "Usado para se referir a seres humanos em geral" },
    { id: 2, title: "HOMEM", video: "PESSOAS_FAMILIA/2_HOMEM.mp4", alt: "Avatar fazendo o sinal de Homem", context: "Usado para se referir a uma pessoa do sexo masculino adulta" },
    { id: 3, title: "MULHER", video: "PESSOAS_FAMILIA/3_MULHER.mp4", alt: "Avatar fazendo o sinal de Mulher", context: "Usado para se referir a uma pessoa do sexo feminino adulta" },
    { id: 4, title: "FAMÍLIA", video: "PESSOAS_FAMILIA/4_FAMILIA.mp4", alt: "Avatar fazendo o sinal de Família", context: "Usado para se referir ao grupo de pessoas com laços de parentesco" },
    { id: 5, title: "PAI", video: "PESSOAS_FAMILIA/5_PAI.mp4", alt: "Avatar fazendo o sinal de Pai", context: "Usado para se referir ao genitor masculino" },
    { id: 6, title: "MÃE", video: "PESSOAS_FAMILIA/6_MAE.mp4", alt: "Avatar fazendo o sinal de Mãe", context: "Usado para se referir à genitora feminina" },
    { id: 7, title: "AVÓ", video: "PESSOAS_FAMILIA/7_AVO.mp4", alt: "Avatar fazendo o sinal de Avó", context: "Usado para se referir à mãe do pai ou da mãe" },
    { id: 8, title: "IRMÃO", video: "PESSOAS_FAMILIA/8_IRMAO.mp4", alt: "Avatar fazendo o sinal de Irmão", context: "Usado para se referir a filho dos mesmos pais" },
    { id: 9, title: "TIO", video: "PESSOAS_FAMILIA/9_TIO.mp4", alt: "Avatar fazendo o sinal de Tio", context: "Usado para se referir ao irmão do pai ou da mãe" },
    { id: 10, title: "PRIMO", video: "PESSOAS_FAMILIA/10_PRIMO.mp4", alt: "Avatar fazendo o sinal de Primo", context: "Usado para se referir ao filho do tio ou da tia" },
    { id: 11, title: "SOBRINHO", video: "PESSOAS_FAMILIA/11_SOBRINHO.mp4", alt: "Avatar fazendo o sinal de Sobrinho", context: "Usado para se referir ao filho do irmão ou da irmã" },
    { id: 12, title: "AMIGO", video: "PESSOAS_FAMILIA/12_AMIGO.mp4", alt: "Avatar fazendo o sinal de Amigo", context: "Usado para se referir a uma pessoa com quem se tem amizade" },
    { id: 13, title: "CRIANÇA", video: "PESSOAS_FAMILIA/13_CRIANCA.mp4", alt: "Avatar fazendo o sinal de Criança", context: "Usado para se referir a uma pessoa na fase infantil" },
    { id: 14, title: "JOVEM", video: "PESSOAS_FAMILIA/14_JOVEM.mp4", alt: "Avatar fazendo o sinal de Jovem", context: "Usado para se referir a uma pessoa na fase da juventude" },
    { id: 15, title: "ADULTO", video: "PESSOAS_FAMILIA/15_ADULTO.mp4", alt: "Avatar fazendo o sinal de Adulto", context: "Usado para se referir a uma pessoa na fase adulta" },
    { id: 16, title: "IDOSO", video: "PESSOAS_FAMILIA/16_IDOSO.mp4", alt: "Avatar fazendo o sinal de Idoso", context: "Usado para se referir a uma pessoa de idade avançada" },
    { id: 17, title: "SOLTEIRO", video: "PESSOAS_FAMILIA/17_SOLTEIRO.mp4", alt: "Avatar fazendo o sinal de Solteiro", context: "Usado para se referir a uma pessoa não casada" },
    { id: 18, title: "NOIVO", video: "PESSOAS_FAMILIA/18_NOIVO.mp4", alt: "Avatar fazendo o sinal de Noivo", context: "Usado para se referir a uma pessoa comprometida para casar" },
    { id: 19, title: "CASADO", video: "PESSOAS_FAMILIA/19_CASADO.mp4", alt: "Avatar fazendo o sinal de Casado", context: "Usado para se referir a uma pessoa que contraiu matrimônio" },
    { id: 20, title: "DOCUMENTO", video: "PESSOAS_FAMILIA/20_DOCUMENTO.mp4", alt: "Avatar fazendo o sinal de Documento", context: "Usado para se referir a papéis oficiais de identificação" },
    { id: 21, title: "CERTIDÃO DE NASCIMENTO", video: "PESSOAS_FAMILIA/21_CERTIDAO_NASCIMENTO.mp4", alt: "Avatar fazendo o sinal de Certidão de Nascimento", context: "Usado para se referir ao documento que registra o nascimento" },
    { id: 22, title: "IDENTIDADE", video: "PESSOAS_FAMILIA/22_IDENTIDADE.mp4", alt: "Avatar fazendo o sinal de Identidade", context: "Usado para se referir ao documento de identificação pessoal" },
    { id: 23, title: "AGORA", video: "PESSOAS_FAMILIA/23_AGORA.mp4", alt: "Avatar fazendo o sinal de Agora", context: "Usado para se referir ao momento presente" },
    { id: 24, title: "BEM", video: "PESSOAS_FAMILIA/24_BEM.mp4", alt: "Avatar fazendo o sinal de Bem", context: "Usado para indicar algo positivo ou bom estado" },
    { id: 25, title: "RUIM", video: "PESSOAS_FAMILIA/25_RUIM.mp4", alt: "Avatar fazendo o sinal de Ruim", context: "Usado para indicar algo negativo ou mau estado" },
    { id: 26, title: "CERTO", video: "PESSOAS_FAMILIA/26_CERTO.mp4", alt: "Avatar fazendo o sinal de Certo", context: "Usado para indicar que algo está correto" },
    { id: 27, title: "ERRADO", video: "PESSOAS_FAMILIA/27_ERRADO.mp4", alt: "Avatar fazendo o sinal de Errado", context: "Usado para indicar que algo está incorreto" },
    { id: 28, title: "O QUÊ?", video: "PESSOAS_FAMILIA/28_O_QUE.mp4", alt: "Avatar fazendo o sinal de O Quê?", context: "Usado para fazer perguntas sobre coisas ou situações" },
    { id: 29, title: "POR QUE", video: "PESSOAS_FAMILIA/29_POR_QUE.mp4", alt: "Avatar fazendo o sinal de Por Que", context: "Usado para perguntar a razão ou motivo de algo" },
    { id: 30, title: "QUEM?", video: "PESSOAS_FAMILIA/30_QUEM.mp4", alt: "Avatar fazendo o sinal de Quem?", context: "Usado para perguntar sobre pessoas" },
    { id: 31, title: "ACONTECER", video: "PESSOAS_FAMILIA/31_ACONTECER.mp4", alt: "Avatar fazendo o sinal de Acontecer", context: "Usado para indicar que algo ocorreu ou está ocorrendo" },
    { id: 32, title: "CAIR", video: "PESSOAS_FAMILIA/32_CAIR.mp4", alt: "Avatar fazendo o sinal de Cair", context: "Usado para indicar a ação de cair" },
    { id: 33, title: "ABRAÇAR", video: "PESSOAS_FAMILIA/33_ABRACAR.mp4", alt: "Avatar fazendo o sinal de Abraçar", context: "Usado para indicar a ação de dar um abraço" },
    { id: 34, title: "BEIJAR", video: "PESSOAS_FAMILIA/34_BEIJAR.mp4", alt: "Avatar fazendo o sinal de Beijar", context: "Usado para indicar a ação de dar um beijo" },
    { id: 35, title: "CONVERSAR", video: "PESSOAS_FAMILIA/35_CONVERSAR.mp4", alt: "Avatar fazendo o sinal de Conversar", context: "Usado para indicar a ação de dialogar com alguém" },
    { id: 36, title: "AMAR", video: "PESSOAS_FAMILIA/36_AMAR.mp4", alt: "Avatar fazendo o sinal de Amar", context: "Usado para expressar sentimento de amor" },
    { id: 37, title: "AVISAR", video: "PESSOAS_FAMILIA/37_AVISAR.mp4", alt: "Avatar fazendo o sinal de Avisar", context: "Usado para indicar a ação de comunicar ou alertar" },
    { id: 38, title: "DAR", video: "PESSOAS_FAMILIA/38_DAR.mp4", alt: "Avatar fazendo o sinal de Dar", context: "Usado para indicar a ação de entregar algo a alguém" },
    { id: 39, title: "RECEBER", video: "PESSOAS_FAMILIA/39_RECEBER.mp4", alt: "Avatar fazendo o sinal de Receber", context: "Usado para indicar a ação de aceitar algo de alguém" },
    { id: 40, title: "GOSTAR", video: "PESSOAS_FAMILIA/40_GOSTAR.mp4", alt: "Avatar fazendo o sinal de Gostar", context: "Usado para expressar sentimento positivo em relação a algo" },
    { id: 41, title: "NÃO GOSTAR", video: "PESSOAS_FAMILIA/41_NAO_GOSTAR.mp4", alt: "Avatar fazendo o sinal de Não Gostar", context: "Usado para expressar sentimento negativo em relação a algo" },
    { id: 42, title: "TER", video: "PESSOAS_FAMILIA/42_TER.mp4", alt: "Avatar fazendo o sinal de Ter", context: "Usado para indicar posse ou existência de algo" },
    { id: 43, title: "NÃO TER", video: "PESSOAS_FAMILIA/43_NAO_TER.mp4", alt: "Avatar fazendo o sinal de Não Ter", context: "Usado para indicar ausência de posse ou inexistência de algo" }
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

function updatePointsDisplay() {
    pointsDisplay.textContent = points;
    // Animação de pulso ao atualizar
    pointsDisplay.parentElement.style.animation = 'none';
    setTimeout(() => {
        pointsDisplay.parentElement.style.animation = 'pulse 0.5s ease';
    }, 10);
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
   - Carrega um sinal específico com animação GSAP
   - Atualiza todos os elementos visuais
   ============================================ */
function loadSignal(index, skipAnimation = false) {
    if (index < 0 || index >= totalSignals) {
        // Libera flag se índice inválido
        isNavigating = false;
        return;
    }

    if (!skipAnimation && typeof gsap !== 'undefined') {
        // Animação de saída com GSAP
        gsap.to(card, {
            opacity: 0.5,
            y: 20,
            scale: 0.98,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
                updateSignalContent(index);
                // Animação de entrada com GSAP
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out",
                    onComplete: () => {
                        isNavigating = false;
                    }
                });
            }
        });
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

/* ============================================
   DOCUMENTAÇÃO: MODAL DE CONCLUSÃO
   - Exibe estatísticas finais
   - Opções de ação
   ============================================ */
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
    gameQuestions = [Array(signals.length).keys()];
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
    const allOptions = [correctIndex, wrongOptions];

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
   DOCUMENTAÇÃO: ACCORDION MENU ANINHADO
   - Controla abertura/fechamento de múltiplos accordions
   - Cada módulo tem seu próprio accordion
   ============================================ */
function setupAccordion() {
    // Seleciona todos os botões de accordion de módulos
    const moduleAccordionBtns = document.querySelectorAll('.module-accordion-btn');

    moduleAccordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isActive = btn.classList.contains('active');
            const signalsList = btn.nextElementSibling;

            // Toggle do estado ativo
            btn.classList.toggle('active');
            signalsList.classList.toggle('active');

            // Log para debug
            console.log(`Accordion ${isActive ? 'fechado' : 'aberto'}:`, btn.querySelector('.module-name').textContent);
        });
    });

    // Garante que o módulo ativo inicie aberto
    const activeModuleBtn = document.querySelector('.module-accordion-btn.active');
    if (activeModuleBtn) {
        const signalsList = activeModuleBtn.nextElementSibling;
        signalsList.classList.add('active');
    }
}

/* ============================================
   DOCUMENTAÇÃO: ANIMAÇÕES GSAP
   - Animações fluidas e modernas
   - Micro-interações aprimoradas
   ============================================ */
function initGSAPAnimations() {
    if (typeof gsap === 'undefined') {
        console.log('GSAP não carregado, usando CSS padrão');
        return;
    }

    // Animações iniciais desabilitadas para garantir visibilidade
    // Os elementos agora aparecem imediatamente sem animação de entrada
    // Mantemos apenas as animações de transição entre sinais

    console.log('GSAP carregado - animações de transição ativas');
}

// Animar abertura do sidebar
function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Animações GSAP removidas para garantir visibilidade imediata dos elementos
}

// Animar fechamento do sidebar
function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Animar modal de conclusão
function showCompletionModal() {
    totalSignalsCompleted.textContent = totalSignals;
    finalPoints.textContent = points;
    completionModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    showToast('Parabéns! Você completou todos os sinais!', 'success');

    // Adiciona botão para próximo módulo (apenas no Módulo 1)
    const modalFooter = document.querySelector('.modal-footer');
    const nextModuleBtn = document.getElementById('nextModuleButton');

    // Verifica se estamos no Módulo 1 (Cumprimentos tem 29 sinais)
    if (totalSignals === 29 && !nextModuleBtn) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'modal-btn next-module-btn';
        nextBtn.id = 'nextModuleButton';
        nextBtn.innerHTML = '<span>➡️</span> Próximo Módulo';
        nextBtn.onclick = () => {
            window.location.href = '../LIBRAS5D(PESSOAS_FAMILIA)/index.html';
        };

        // Insere antes do botão "Fechar"
        const closeBtn = document.getElementById('closeModalButton');
        modalFooter.insertBefore(nextBtn, closeBtn);
    }

    // Animações GSAP removidas para garantir visibilidade imediata dos botões
}

// Animar toast com GSAP
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

    if (typeof gsap !== 'undefined') {
        gsap.from(toast, {
            x: 400,
            opacity: 0,
            duration: 0.4,
            ease: "back.out(1.7)"
        });

        gsap.to(toast, {
            x: 400,
            opacity: 0,
            duration: 0.3,
            delay: 3,
            ease: "power2.in",
            onComplete: () => toast.remove()
        });
    } else {
        // Fallback sem GSAP
        setTimeout(() => {
            toast.style.animation = 'toastSlideOut 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Animar pontos com GSAP
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

    // Animação de conquista no display de pontos com GSAP
    const pointsDisplayElement = document.querySelector('.stat-item-vertical.points-display');
    if (pointsDisplayElement && typeof gsap !== 'undefined') {
        gsap.to(pointsDisplayElement, {
            scale: 1.2,
            duration: 0.3,
            ease: "back.out(1.7)",
            onComplete: () => {
                gsap.to(pointsDisplayElement, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    } else if (pointsDisplayElement) {
        pointsDisplayElement.classList.add('achievement');
        setTimeout(() => {
            pointsDisplayElement.classList.remove('achievement');
        }, 600);
    }
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
    setupAccordion();
    initGSAPAnimations();
});
