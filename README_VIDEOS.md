# LIBRAS 5D - Instruções para Adicionar Vídeos

## Estrutura Criada

Foram criados 8 novos módulos de LIBRAS (módulos 2-9), seguindo a mesma estrutura do módulo 1 (Cumprimentos).

### Módulos Criados:

1. **Módulo 2: PESSOAS/FAMÍLIA** (14 sinais)
2. **Módulo 3: TRANSPORTES** (14 sinais)
3. **Módulo 4: PARTES DA CASA/MÓVEIS** (14 sinais)
4. **Módulo 5: LOCALIZAÇÃO/OBJETOS** (14 sinais)
5. **Módulo 6: NATUREZA/ROUPAS** (14 sinais)
6. **Módulo 7: DIAS DA SEMANA** (10 sinais)
7. **Módulo 8: MESES/ALIMENTOS/BEBIDAS** (20 sinais)
8. **Módulo 9: PROFISSÕES** (14 sinais)

### Como Adicionar os Vídeos

Para cada módulo, você precisa adicionar os arquivos de vídeo (.mp4) na pasta correspondente.

#### Exemplo para Módulo 2 (PESSOAS/FAMÍLIA):

1. Navegue até: `LIBRAS5D(PESSOAS_FAMILIA)\PESSOAS_FAMILIA\`
2. Adicione os seguintes vídeos:
   - `1_PAI.mp4`
   - `2_MÃE.mp4`
   - `3_FILHO.mp4`
   - `4_FILHA.mp4`
   - `5_IRMÃO.mp4`
   - `6_IRMÃ.mp4`
   - `7_AVÔ.mp4`
   - `8_AVÓ.mp4`
   - `9_TIO.mp4`
   - `10_TIA.mp4`
   - `11_PRIMO.mp4`
   - `12_PRIMA.mp4`
   - `13_BEBÊ.mp4`
   - `14_FAMÍLIA.mp4`

#### Padrão de Nomenclatura:

Todos os vídeos devem seguir o padrão: `[número]_[NOME_DO_SINAL].mp4`

Por exemplo:
- `1_CARRO.mp4` para o primeiro sinal do módulo de transportes
- `5_SOL.mp4` para o quinto sinal do módulo de natureza/roupas

### Lista Completa de Sinais por Módulo

Consulte o arquivo `implementation_plan.md` para ver a lista completa de sinais que cada módulo requer.

### Testando os Módulos

Após adicionar os vídeos:

1. Abra o arquivo `index.html` de cada módulo no navegador
2. Verifique se os vídeos carregam corretamente
3. Teste a navegação entre sinais
4. Teste o modo de jogo

### Estrutura de Pastas

```
Libras_5D/
├── LIBRAS5D(CUMPRIMENTOS)/          # Módulo 1 (já existente)
├── LIBRAS5D(PESSOAS_FAMILIA)/       # Módulo 2
│   ├── PESSOAS_FAMILIA/             # ← Adicionar vídeos aqui
│   ├── IMAGENS/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── LIBRAS5D(TRANSPORTES)/           # Módulo 3
│   ├── TRANSPORTES/                 # ← Adicionar vídeos aqui
│   ├── IMAGENS/
│   ├── index.html
│   ├── style.css
│   └── script.js
... (e assim por diante para os outros módulos)
```

### Próximos Passos

1. ✅ Estrutura de pastas criada
2. ✅ Arquivos HTML, CSS e JavaScript configurados
3. ⏳ **PENDENTE**: Adicionar arquivos de vídeo em cada pasta
4. ⏳ **OPCIONAL**: Criar página de navegação principal para escolher entre módulos

### Suporte

Se você encontrar algum problema, verifique:
- Os nomes dos arquivos de vídeo estão corretos (incluindo acentos)
- Os vídeos estão no formato .mp4
- Os vídeos estão na pasta correta do módulo
