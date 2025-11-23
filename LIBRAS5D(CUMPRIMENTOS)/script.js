/* ============================================
   DOCUMENTAÇÃO: DADOS DOS SINAIS
   - Array com todos os sinais de cumprimentos
   - Cada sinal tem: id, título, vídeo, alt, contexto
   ============================================ */
const signals = [
    { id: 1, title: "BOM DIA", video: "CUMPRIMENTOS/1_BOM_DIA.mp4", alt: "Avatar fazendo o sinal de Bom Dia", context: "Usado para cumprimentar alguém pela manhã" },
    { id: 2, title: "MANHÃ", video: "CUMPRIMENTOS/2_MANHÃ.mp4", alt: "Avatar fazendo o sinal de Manhã", context: "Usado para se referir ao período da manhã" },
    { id: 3, title: "BOA TARDE", video: "CUMPRIMENTOS/3_BOA_TARDE.mp4", alt: "Avatar fazendo o sinal de Boa Tarde", context: "Usado para cumprimentar alguém durante a tarde" },
    { id: 4, title: "TARDE", video: "CUMPRIMENTOS/4_TARDE.mp4", alt: "Avatar fazendo o sinal de Tarde", context: "Usado para se referir ao período da tarde" },
    { id: 5, title: "BOA NOITE", video: "CUMPRIMENTOS/5_BOA_NOITE.mp4", alt: "Avatar fazendo o sinal de Boa Noite", context: "Usado para cumprimentar alguém à noite ou se despedir" },
    { id: 6, title: "NOITE", video: "CUMPRIMENTOS/6_NOITE.mp4", alt: "Avatar fazendo o sinal de Noite", context: "Usado para se referir ao período da noite" },
    { id: 7, title: "COM LICENÇA", video: "CUMPRIMENTOS/7_COM_LICENÇA.mp4", alt: "Avatar fazendo o sinal de Com Licença", context: "Usado para pedir permissão ou desculpar-se ao passar por alguém" },
    { id: 8, title: "DESCULPA", video: "CUMPRIMENTOS/8_DESCULPA.mp4", alt: "Avatar fazendo o sinal de Desculpa", context: "Usado para pedir desculpas por algo" },
    { id: 9, title: "DE NADA", video: "CUMPRIMENTOS/9_DE_NADA.mp4", alt: "Avatar fazendo o sinal de De Nada", context: "Usado como resposta quando alguém agradece" },
    { id: 10, title: "IDADE", video: "CUMPRIMENTOS/10_IDADE.mp4", alt: "Avatar fazendo o sinal de Idade", context: "Usado para perguntar ou informar a idade de alguém" },
    { id: 11, title: "OBRIGADA", video: "CUMPRIMENTOS/11_OBRIGADA.mp4", alt: "Avatar fazendo o sinal de Obrigada", context: "Usado para agradecer alguém" },
    { id: 12, title: "OI", video: "CUMPRIMENTOS/12_OI.mp4", alt: "Avatar fazendo o sinal de Oi", context: "Usado como cumprimento informal" },
    { id: 13, title: "TCHAU", video: "CUMPRIMENTOS/13_TCHAU.mp4", alt: "Avatar fazendo o sinal de Tchau", context: "Usado para se despedir de alguém" },
    { id: 14, title: "POR FAVOR", video: "CUMPRIMENTOS/14_POR_FAVOR.mp4", alt: "Avatar fazendo o sinal de Por Favor", context: "Usado para fazer um pedido de forma educada" }
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

// Velocidades disponíveis para o vídeo
const playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 2];
let currentPlaybackRateIndex = 2; // Começa em 1x

/* ============================================
   DOCUMENTAÇÃO: SISTEMA DE PONTOS
   - Adiciona pontos ao completar sinais
   - Feedback visual com animação
   ============================================ */
function addPoints(amount) {
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
    if (index < 0 || index >= totalSignals) return;
    
    if (!skipAnimation) {
        // Animação de transição
        card.style.opacity = '0.5';
        card.style.transform = 'translateY(20px) scale(0.98)';
        
        setTimeout(() => {
            updateSignalContent(index);
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 200);
    } else {
        updateSignalContent(index);
    }
}

function updateSignalContent(index) {
    currentSignalIndex = index;
    const signal = signals[index];
    
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
   ============================================ */
function nextSignal() {
    // Marca sinal atual como completado e adiciona pontos
    if (!completedSignals.has(currentSignalIndex)) {
        completedSignals.add(currentSignalIndex);
        addPoints(10); // 10 pontos por sinal completado
        updateProgressDots();
    }
    
    if (isRandomMode) {
        loadRandomSignal();
    } else if (currentSignalIndex < totalSignals - 1) {
        loadSignal(currentSignalIndex + 1);
    } else {
        // Bônus por completar todos os sinais
        if (completedSignals.size === totalSignals) {
            addPoints(50); // Bônus de 50 pontos
        }
        showCompletionModal();
    }
}

function prevSignal() {
    if (currentSignalIndex > 0) {
        loadSignal(currentSignalIndex - 1);
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
   ============================================ */
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
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

/* ============================================
   DOCUMENTAÇÃO: CONFIGURAÇÃO DE EVENT LISTENERS
   - Organiza todos os event listeners
   ============================================ */
function setupEventListeners() {
    // Navegação
    nextSignalButton.addEventListener('click', nextSignal);
    prevSignalButton.addEventListener('click', prevSignal);
    
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
