# Copy base script.js and index.html files to all remaining modules
$modules = @(
    "TRANSPORTES",
    "CASA_MOVEIS",
    "LOCALIZACAO_OBJETOS",
    "NATUREZA_ROUPAS",
    "DIAS_SEMANA",
    "MESES_ALIMENTOS",
    "PROFISSOES"
)

foreach ($module in $modules) {
    $modulePath = "e:\Desktop 04.12\Libras_5D\LIBRAS5D($module)"
    
    # Copy script.js
    Copy-Item "e:\Desktop 04.12\Libras_5D\LIBRAS5D(CUMPRIMENTOS)\script.js" -Destination "$modulePath\script.js" -Force
    
    # Copy index.html
    Copy-Item "e:\Desktop 04.12\Libras_5D\LIBRAS5D(CUMPRIMENTOS)\index.html" -Destination "$modulePath\index.html" -Force
    
    Write-Host "Copied base files for module: $module"
}

Write-Host "All base files copied successfully!"
