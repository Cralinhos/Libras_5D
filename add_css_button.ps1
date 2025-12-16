# Script corrigido para adicionar CSS em todos os módulos
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
    Write-Host "Adicionando CSS ao módulo: $module" -ForegroundColor Cyan
    
    $cssPath = "e:\Desktop 04.12\Libras_5D\$module\style.css"
    
    if (Test-Path $cssPath) {
        $cssContent = [System.IO.File]::ReadAllText($cssPath, [System.Text.Encoding]::UTF8)
        
        if ($cssContent -notmatch 'back-to-menu-btn') {
            # Procura por .menu-toggle:hover e adiciona após
            $pattern = '(\.menu-toggle:hover\s*\{[^\}]+\})'
            if ($cssContent -match $pattern) {
                $cssContent = $cssContent -replace $pattern, "`$1$cssButtonCode"
                [System.IO.File]::WriteAllText($cssPath, $cssContent, [System.Text.UTF8Encoding]::new($false))
                Write-Host "  ✓ CSS adicionado com sucesso" -ForegroundColor Green
            } else {
                Write-Host "  ⚠ Não encontrou .menu-toggle:hover" -ForegroundColor Yellow
            }
        } else {
            Write-Host "  ℹ CSS já existe" -ForegroundColor Cyan
        }
    } else {
        Write-Host "  ✗ Arquivo CSS não encontrado" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "✅ Processo concluído!" -ForegroundColor Green
