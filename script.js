const sceneText = document.getElementById("scene-text");
const optionsBox = document.getElementById("options");
const restartBtn = document.getElementById("restart-btn");

function showScene(id) {
  const s = scenes[id];

  sceneText.innerText = s.text;
  optionsBox.innerHTML = "";

  if (s.options) {
    s.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerText = opt.text;
      btn.onclick = () => showScene(opt.next);
      optionsBox.appendChild(btn);
    });
  }

  restartBtn.style.display = s.end ? "block" : "none";
}

restartBtn.onclick = () => showScene("1");



// =====================================================
//               TODAS AS SUAS CENAS
// =====================================================

const scenes = {

  // --- INÍCIO ---
  "1": {
    text: "Você acorda de madrugada e percebe que sua casa foi invadida. Além de você e o invasor, tem 2 primos seus na casa.",
    options: [
      { text: "Sair do quarto", next: "2" },
      { text: "Se esconder debaixo da cama", next: "3" }
    ]
  },

  // A (azul)
  "2": {
    text: "Você sai do quarto.",
    options: [
      { text: "Descer as escadas", next: "4" },
      { text: "Seguir no corredor e entrar em um quarto correndo", next: "5" }
    ]
  },

  "3": {
    text: "Você se esconde debaixo da cama.",
    options: [
      { text: "Pegar o celular", next: "6" },
      { text: "Sair debaixo da cama", next: "7" }
    ]
  },

  "4": {
    text: "Você desce as escadas.",
    options: [
      { text: "Continuar descendo", next: "21" },
      { text: "Voltar e seguir pelo corredor", next: "5" }
    ]
  },

  "5": {
    text: "Você segue no corredor e entra em um quarto correndo para o invasor não te achar.",
    options: [
      { text: "Pegar seu celular", next: "6" },
      { text: "Se esconder debaixo da cama", next: "3" }
    ]
  },

  "6": {
    text: "Você pega seu celular.",
    options: [
      { text: "Mandar mensagem para seus primos", next: "13" },
      { text: "Desligar o celular", next: "14" }
    ]
  },

  "7": {
    text: "Você sai debaixo da cama.",
    options: [
      { text: "Continuar", next: "8" }
    ]
  },

  // LARANJA (l)
  "8": {
    text: "Você encontra seu primo Clash com cheiro de churrasco.",
    options: [
      { text: "Perguntar por que ele está com cheiro de churrasco", next: "12" },
      { text: "Explicar o que está acontecendo", next: "11" }
    ]
  },

  "9": {
    text: "O invasor entra no quarto.",
    options: [
      { text: "Continuar", next: "10" }
    ]
  },

  // VERMELHO (v)
  "10": {
    text: "O invasor entra no quarto e te vê. Ele se revela o serial killer 'O Açougueiro da Bahia'.",
    options: [
      { text: "Fugir", next: "18" },
      { text: "Tentar derrotar o invasor", next: "19" }
    ]
  },

  // A (azul)
  "11": {
    text: "Você explica o que está acontecendo.",
    options: [
      { text: "Continuar", next: "15" }
    ]
  },

  "12": {
    text: "Você pergunta por que ele está com cheiro de churrasco.",
    options: [
      { text: "Continuar", next: "15" }
    ]
  },

  "13": {
    text: "Você manda mensagem para seus primos.",
    options: [
      { text: "Continuar digitando", next: "17" }
    ]
  },

  "14": {
    text: "Você desliga o celular.",
    options: [
      { text: "Continuar quieto", next: "21" }
    ]
  },

  // LARANJA (l)
  "15": {
    text: "Vocês começam a pensar em como fugir.",
    options: [
      { text: "Continuar", next: "16" }
    ]
  },

  "16": {
    text: "Ele se irrita e sai correndo. O invasor te vê!",
    options: [
      { text: "Fugir", next: "18" }
    ]
  },

  // VERMELHO (v)
  "17": {
    text: "O invasor escuta o barulho de digitação.",
    options: [
      { text: "Fugir", next: "18" }
    ]
  },

  // A (azul)
  "18": {
    text: "Você foge!",
    options: [
      { text: "Sair correndo do quarto", next: "20" },
      { text: "Continuar escondido", next: "21" }
    ]
  },

  "19": {
    text: "Você tenta derrotar o invasor!",
    options: [
      { text: "Forçar luta", next: "24" }
    ]
  },

  "20": {
    text: "Você sai correndo do quarto.",
    options: [
      { text: "Ir até a porta", next: "22" }
    ]
  },

  "21": {
    text: "Você continua escondido.",
    options: [
      { text: "Ir até a porta", next: "22" }
    ]
  },

  // LARANJA (l)
  "22": {
    text: "Vocês vão até a porta e tentam abri-la, mas ela está fechada.",
    options: [
      { text: "Procurar a chave", next: "27" },
      { text: "Tentar fugir à força", next: "23" }
    ]
  },

  // VERMELHO (v)
  "23": {
    text: "O invasor te persegue!",
    options: [
      { text: "Continuar", next: "24" }
    ]
  },

  "24": {
    text: "O invasor te encontra e se revela ser o serial killer 'O Açougueiro da Bahia'.",
    options: [
      { text: "Você morreu.", next: "25" }
    ]
  },

  // PRETO (p) — FINAL
  "25": {
    text: "Você morreu.",
    end: true
  },

  // A (azul)
  "26": {
    text: "Você volta.",
    options: [
      { text: "Procurar a chave", next: "27" }
    ]
  },

  "27": {
    text: "Você decide procurar a chave.",
    options: [
      { text: "Se esconder e entrar no quarto do seu primo", next: "28" },
      { text: "Explorar o corredor", next: "32" }
    ]
  },

  // LARANJA (l)
  "28": {
    text: "Você consegue se esconder dele e entra no quarto de um dos seus primos.",
    options: [
      { text: "Continuar", next: "35" }
    ]
  },

  // VERMELHO (v)
  "29": {
    text: "O invasor se revela o serial killer ‘Açougueiro da Bahia’.",
    options: [
      { text: "Continuar", next: "25" }
    ]
  },

  // LARANJA (l)
  "30": {
    text: "O invasor chega e vocês veem a chave na cintura dele.",
    options: [
      { text: "Tentar lutar pela chave", next: "33" },
      { text: "Fugir e deixar seu primo para trás", next: "34" }
    ]
  },

  // A (azul)
  "31": {
    text: "Você procura por seu primo.",
    options: [
      { text: "Continuar", next: "35" }
    ]
  },

  "32": {
    text: "Você sai do quarto.",
    options: [
      { text: "Procurar primo", next: "31" }
    ]
  },

  "33": {
    text: "Você tenta lutar para pegar a chave!",
    options: [
      { text: "Seu primo segura o invasor", next: "37" }
    ]
  },

  "34": {
    text: "Você foge e deixa seu primo para trás.",
    options: [
      { text: "Ir até a porta", next: "22" }
    ]
  },

  // LARANJA (l)
  "35": {
    text: "Você acha seu primo Fernando Luis fedendo a gasolina no canto do quarto.",
    options: [
      { text: "Perguntar por que ele fede a gasolina", next: "38" },
      { text: "Continuar procurando a chave", next: "36" }
    ]
  },

  "36": {
    text: "Você vê o invasor no corredor.",
    options: [
      { text: "Seu primo segura ele", next: "37" }
    ]
  },

  // VERMELHO (v)
  "37": {
    text: "Seu primo segura o invasor e você pega a chave!",
    options: [
      { text: "Abrir a porta", next: "41" },
      { text: "Tentar lutar mais", next: "40" }
    ]
  },

  // A (azul)
  "38": {
    text: "Você pergunta por que ele está fedendo a gasolina.",
    options: [
      { text: "Continuar", next: "42" }
    ]
  },

  "39": {
    text: "Você foge!",
    options: [
      { text: "Ir para a porta", next: "41" }
    ]
  },

  "40": {
    text: "Você tenta lutar.",
    options: [
      { text: "O invasor te encontra", next: "49" }
    ]
  },

  // LARANJA (l)
  "41": {
    text: "Você abre a porta!",
    options: [
      { text: "Continuar", next: "50" }
    ]
  },

  "42": {
    text: "Ele diz que bebeu gasolina e está passando mal.",
    options: [
      { text: "Continuar", next: "43" }
    ]
  },

  "43": {
    text: "Você chega no quarto do seu outro primo.",
    options: [
      { text: "Continuar", next: "44" }
    ]
  },

  "44": {
    text: "Ele pega uma espada asteca na bolsa.",
    options: [
      { text: "Escapar", next: "45" },
      { text: "Ajudar seu primo", next: "46" }
    ]
  },

  // A (azul)
  "45": {
    text: "Você escapa!",
    options: [
      { text: "Continuar", next: "50" }
    ]
  },

  "46": {
    text: "Você ajuda seu primo.",
    options: [
      { text: "Nocautear o invasor", next: "51" }
    ]
  },

  "47": {
    text: "Você procura por seu primo.",
    options: [
      { text: "Continuar", next: "52" }
    ]
  },

  "48": {
    text: "Você sai do quarto.",
    options: [
      { text: "Encontrar primo Clash", next: "52" }
    ]
  },

  // LARANJA (l)
  "49": {
    text: "O invasor te encontra!",
    options: [
      { text: "Você morreu.", next: "25" }
    ]
  },

  // VERDE (ve) — FINAIS POSITIVOS
  "50": {
    text: "Você escapou!",
    end: true
  },

  "51": {
    text: "Vocês conseguem nocautear o invasor.",
    options: [
      { text: "Continuar", next: "53" }
    ]
  },

  "52": {
    text: "Você encontra seu primo Clash cheirando a churrasco e jogando no computador.",
    options: [
      { text: "Falar o que está acontecendo", next: "54" }
    ]
  },

  "53": {
    text: "Vocês escaparam!",
    end: true
  },

  // A (azul)
  "54": {
    text: "Você fala o que está acontecendo.",
    options: [
      { text: "Continuar", next: "55" }
    ]
  },

  // LARANJA (l)
  "55": {
    text: "O invasor encontra vocês!",
    options: [
      { text: "Continuar", next: "56" }
    ]
  },

  // VERMELHO (v)
  "56": {
    text: "Ele joga um fósforo em vocês assim que sente o cheiro de gasolina.",
    options: [
      { text: "Continuar", next: "57" }
    ]
  },

  "57": {
    text: "O quarto inteiro explode!",
    options: [
      { text: "Continuar", next: "60" }
    ]
  },

  // A (azul)
  "58": {
    text: "Você tenta ajudar ele.",
    options: [
      { text: "Continuar", next: "61" }
    ]
  },

  "59": {
    text: "Você fala o que está acontecendo.",
    options: [
      { text: "Continuar", next: "61" }
    ]
  },

  // VERMELHO (v)
  "60": {
    text: "Ele vomita gasolina em você.",
    options: [
      { text: "Você morreu.", next: "25" }
    ]
  },

  // A (azul)
  "61": {
    text: "Vocês trancam a porta e ligam para a emergência.",
    options: [
      { text: "Sair do quarto", next: "62" }
    ]
  },

  "62": {
    text: "Vocês saem do quarto.",
    options: [
      { text: "Continuar", next: "63" }
    ]
  },

  // LARANJA (l)
  "63": {
    text: "O invasor escuta o celular chamando e arromba a porta!",
    options: [
      { text: "Continuar", next: "64" }
    ]
  },

  // VERMELHO (v)
  "64": {
    text: "Ele se revela o serial killer ‘Açougueiro da Bahia’ e corta vocês com uma espada maia.",
    end: true
  }
};


// Início
showScene("1");
