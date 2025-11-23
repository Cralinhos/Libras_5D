// Seleção dos elementos do DOM
const nextSignalButton = document.querySelector('.next-signal-button');
const repeatButton = document.querySelector('.repeat-button');
const avatarImg = document.querySelector('.avatar-img');
const progressBarFill = document.querySelector('.progress-bar-fill');
const levelInfo = document.querySelector('.level-info');

// Variáveis de estado do jogo
let currentProgress = 40; // Porcentagem inicial
let currentLevel = 1;
const signalsPerLevel = 10; // Exemplo de quantos sinais há por nível

// 1. Função para avançar o sinal/progresso
nextSignalButton.addEventListener('click', () => {
    // 1.1. Atualiza o progresso
    if (currentProgress < 100) {
        currentProgress += (100 / signalsPerLevel); // Aumenta o progresso
    }
    
    // Garante que não ultrapasse 100%
    if (currentProgress > 100) {
        currentProgress = 100;
    }

    progressBarFill.style.width = `${currentProgress}%`;

    // 1.2. Lógica para carregar o próximo sinal (substituir o conteúdo)
    console.log(`Avançando para o próximo sinal. Progresso atual: ${currentProgress}%`);

    // 1.3. Lógica de Nível Concluído
    if (currentProgress >= 100) {
        currentLevel++;
        currentProgress = 0; // Reseta o progresso para o próximo nível
        levelInfo.textContent = `NÍVEL ${currentLevel}: NOVO TÓPICO`;
        alert(`Parabéns! Nível ${currentLevel - 1} Concluído!`);
    }

    // Ações de carregamento de novo conteúdo (ex: mudar avatarImg.src, título, contexto)
});

// 2. Função para repetir a animação
repeatButton.addEventListener('click', () => {
    console.log('Repetindo animação!');
    
    // Se o avatar for um GIF, você pode forçar a repetição recarregando:
    const originalSrc = avatarImg.src.split('?')[0];
    avatarImg.src = originalSrc + '?' + new Date().getTime(); 
    
    // Se for um elemento de vídeo, você pode usar:
    // const avatarVideo = document.querySelector('.avatar-video-element');
    // avatarVideo.currentTime = 0; 
    // avatarVideo.play();
});