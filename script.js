// script.js
// Função para verificar se uma palavra é um palíndromo
function isPalindrome(word) {
  // Remove espaços e converte para minúsculas para comparação case-insensitive
  const cleanedWord = word.toLowerCase().replace(/\s/g, '');

  // Compara a palavra com sua versão invertida
  return cleanedWord === cleanedWord.split('').reverse().join('');
}

// Função principal para encontrar todos os palíndromos em uma lista
function encontrarPalindromo(magicalWords) {
  const palindromos = [];

  // Verifica cada palavra no array
  for (let i = 0; i < magicalWords.length; i++) {
    const word = magicalWords[i].trim();

    // Se a palavra for um palíndromo, adiciona ao array
    if (word && isPalindrome(word)) {
      palindromos.push(word);
    }
  }

  // Retorna todos os palíndromos encontrados
  return palindromos;
}

// Função para processar a entrada do usuário e mostrar o resultado
function processarEntrada() {
  const input = document.getElementById('palavras').value;
  const resultadoDiv = document.getElementById('resultado');
  const processamentoDiv = document.getElementById('processamento');

  // Limpa resultados anteriores
  processamentoDiv.textContent = '';
  resultadoDiv.textContent = '';

  // Verifica se o input está vazio
  if (!input.trim()) {
    resultadoDiv.textContent = 'Por favor, digite algumas palavras.';
    resultadoDiv.style.color = '#FF5555';
    return;
  }

  // Divide as palavras por vírgula e remove espaços em branco
  const palavras = input
    .split(',')
    .map(palavra => palavra.trim())
    .filter(palavra => palavra !== '');

  // Registro do processo
  processamentoDiv.textContent = `Processando palavras: ${palavras.join(', ')}\n\n`;

  const palindromosEncontrados = [];

  // Verifica cada palavra
  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    const ehPalindromo = isPalindrome(palavra);

    processamentoDiv.textContent += `Verificando: "${palavra}"\n`;
    processamentoDiv.textContent += `Invertida: "${palavra.split('').reverse().join('')}"\n`;
    processamentoDiv.textContent += `É palíndromo? ${ehPalindromo ? 'SIM ✅' : 'NÃO ❌'}\n\n`;

    if (ehPalindromo) {
      palindromosEncontrados.push(palavra);
    }
  }

  // Exibe o resultado
  if (palindromosEncontrados.length > 0) {
    if (palindromosEncontrados.length === 1) {
      resultadoDiv.textContent = `Palíndromo encontrado: ${palindromosEncontrados[0]}`;
    } else {
      resultadoDiv.textContent = `Palíndromos encontrados: ${palindromosEncontrados.join(', ')}`;
    }
    resultadoDiv.style.color = '#00FFEA';
  } else {
    resultadoDiv.textContent = 'Nenhum palíndromo encontrado.';
    resultadoDiv.style.color = '#FF5555';
  }
}

// Função para limpar os campos e retornar ao estado inicial
function retornar() {
  document.getElementById('palavras').value = '';
  document.getElementById('resultado').textContent = '';
  document.getElementById('processamento').textContent = '';
}

// Adiciona event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('converterBtn').addEventListener('click', processarEntrada);
  document.getElementById('retornarBtn').addEventListener('click', retornar);

  // Permite enviar com Enter
  document.getElementById('palavras').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      processarEntrada();
    }
  });
});
