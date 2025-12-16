# Script para adicionar botão "Voltar ao Menu" em todos os módulos
$modules = @(
    "LIBRAS5D(PESSOAS_FAMILIA)",
    "LIBRAS5D(TRANSPORTES)",
    "LIBRAS5D(CASA_MOVEIS)",
    "LIBRAS5D(LOCALIZACAO_OBJETOS)",
    "LIBRAS5D(NATUREZA_ROUPAS)",
    "LIBRAS5D(DIAS_SEMANA)",
    "LIBRAS5D(MESES_ALIMENTOS)",
    "LIBRAS5D(PROFISSOES)"
)

$htmlButtonCode = @'
            <a href="../menu.html" class="back-to-menu-btn" aria-label="Voltar ao Menu Principal" title="Voltar ao Menu">
                <span class="back-icon">🏠</span>
            </a>
'@

$cssButtonCode = @'

.back-to-menu-btn {
    background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
    color: var(--color-white);
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 1.5em;
    cursor: pointer;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    flex-shrink: 0;
}

.back-to-menu-btn:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-lg);
    background: linear-gradient(135deg, #ff8e53 0%, #ff6b6b 100%);
}

.back-icon {
    display: inline-block;
    transition: var(--transition);
}

.back-to-menu-btn:hover .back-icon {
    transform: scale(1.2);
}
'@

foreach ($module in $modules) {
    Write-Host "Processando módulo: $module" -ForegroundColor Cyan
    
    $htmlPath = "e:\Desktop 04.12\Libras_5D\$module\index.html"
    $cssPath = "e:\Desktop 04.12\Libras_5D\$module\style.css"
    
    # Adicionar botão no HTML (após o menu-toggle)
    if (Test-Path $htmlPath) {
        $htmlContent = Get-Content $htmlPath -Raw -Encoding UTF8
        
        # Procura pelo botão menu-toggle e adiciona o botão após ele
        if ($htmlContent -notmatch 'back-to-menu-btn') {
            $htmlContent = $htmlContent -replace '(\s+</button>\s+)(</aside>)', "`$1$htmlButtonCode`$2"
            [System.IO.File]::WriteAllText($htmlPath, $htmlContent, [System.Text.UTF8Encoding]::new($false))
            Write-Host "  ✓ Botão adicionado ao HTML" -ForegroundColor Green
        } else {
            Write-Host "  ⚠ Botão já existe no HTML" -ForegroundColor Yellow
        }
    }
    
    # Adicionar CSS
    if (Test-Path $cssPath) {
        $cssContent = Get-Content $cssPath -Raw -Encoding UTF8
        
        if ($cssContent -notmatch 'back-to-menu-btn') {
            # Adiciona após .menu-toggle:hover
            $cssContent = $cssContent -replace '(\.menu-toggle:hover\s*\{[^}]+\})', "`$1$cssButtonCode"
            [System.IO.File]::WriteAllText($cssPath, $cssContent, [System.Text.UTF8Encoding]::new($false))
            Write-Host "  ✓ CSS adicionado" -ForegroundColor Green
        } else {
            Write-Host "  ⚠ CSS já existe" -ForegroundColor Yellow
        }
    }
    
    Write-Host ""
}

Write-Host "✅ Processo concluído! Botão 'Voltar ao Menu' adicionado em todos os módulos." -ForegroundColor Green
