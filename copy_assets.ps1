# Copy CSS and images to all modules
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
    
    # Copy CSS
    Copy-Item "e:\Desktop 04.12\Libras_5D\LIBRAS5D(CUMPRIMENTOS)\style.css" -Destination "$modulePath\style.css" -Force
    
    # Copy images
    Copy-Item "e:\Desktop 04.12\Libras_5D\LIBRAS5D(CUMPRIMENTOS)\IMAGENS\*" -Destination "$modulePath\IMAGENS\" -Recurse -Force
    
    Write-Host "Copied files for module: $module"
}

Write-Host "All CSS and images copied successfully!"
