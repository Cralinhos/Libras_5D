# Script to update HTML files for all modules with correct titles

# Module data: folder name, module number, title, emoji, first sign
$modules = @(
    @{Folder="TRANSPORTES"; Number="3"; Title="Transportes"; Emoji="🚗"; FirstSign="CARRO"; FirstSignPath="TRANSPORTES/1_CARRO.mp4"; Context="Usado para se referir ao automóvel ou carro"},
    @{Folder="CASA_MOVEIS"; Number="4"; Title="Partes da Casa/Móveis"; Emoji="🏠"; FirstSign="CASA"; FirstSignPath="CASA_MOVEIS/1_CASA.mp4"; Context="Usado para se referir à casa ou residência"},
    @{Folder="LOCALIZACAO_OBJETOS"; Number="5"; Title="Localização/Objetos"; Emoji="📍"; FirstSign="AQUI"; FirstSignPath="LOCALIZACAO_OBJETOS/1_AQUI.mp4"; Context="Usado para indicar este local ou posição próxima"},
    @{Folder="NATUREZA_ROUPAS"; Number="6"; Title="Natureza/Roupas"; Emoji="🌳"; FirstSign="SOL"; FirstSignPath="NATUREZA_ROUPAS/1_SOL.mp4"; Context="Usado para se referir ao sol"},
    @{Folder="DIAS_SEMANA"; Number="7"; Title="Dias da Semana"; Emoji="📅"; FirstSign="SEGUNDA-FEIRA"; FirstSignPath="DIAS_SEMANA/1_SEGUNDA-FEIRA.mp4"; Context="Usado para se referir ao segundo dia da semana"},
    @{Folder="MESES_ALIMENTOS"; Number="8"; Title="Meses/Alimentos/Bebidas"; Emoji="🍞"; FirstSign="JANEIRO"; FirstSignPath="MESES_ALIMENTOS/1_JANEIRO.mp4"; Context="Usado para se referir ao primeiro mês do ano"},
    @{Folder="PROFISSOES"; Number="9"; Title="Profissões"; Emoji="👨‍⚕️"; FirstSign="PROFESSOR"; FirstSignPath="PROFISSOES/1_PROFESSOR.mp4"; Context="Usado para se referir ao professor ou professora"}
)

foreach ($module in $modules) {
    $htmlPath = "e:\Desktop 04.12\Libras_5D\LIBRAS5D($($module.Folder))\index.html"
    
    # Read the HTML file
    $content = Get-Content $htmlPath -Raw -Encoding UTF8
    
    # Replace title
    $content = $content -replace '<title>Aprenda Libras - Cumprimentos Game</title>', "<title>Aprenda Libras - $($module.Title)</title>"
    
    # Replace module label in progress bar
    $content = $content -replace '📚 Módulo 1: Cumprimentos', "$($module.Emoji) Módulo $($module.Number): $($module.Title)"
    
    # Replace sidebar header
    $content = $content -replace 'Módulo 1:Cumprimentos', "Módulo $($module.Number): $($module.Title)"
    
    # Replace first signal title
    $content = $content -replace '<h1 class="signal-title" id="titleBanner">BOM DIA</h1>', "<h1 class=`"signal-title`" id=`"titleBanner`">$($module.FirstSign)</h1>"
    
    # Replace first signal context inline
    $content = $content -replace 'Usado para cumprimentar alguém pela manhã', $module.Context
    
    # Replace first signal video path
    $content = $content -replace 'CUMPRIMENTOS/1_BOM_DIA\.mp4', $module.FirstSignPath
    
    # Replace first signal alt text
    $content = $content -replace 'Avatar fazendo o sinal de Bom Dia', "Avatar fazendo o sinal de $($module.FirstSign)"
    
    # Save the file
    [System.IO.File]::WriteAllText($htmlPath, $content, [System.Text.Encoding]::UTF8)
    
    Write-Host "Updated HTML for module: $($module.Title)"
}

Write-Host "All HTML files updated successfully!"
