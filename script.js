let step = 1;

function chooseOption(option) {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');

    if(!story || !choices) return; // previne erro se elemento não existe

    switch(step) {
        case 1:
            story.innerHTML = option === 1 ? "Você tenta ultrapassar o líder na curva, mas derrapa um pouco. A próxima reta é crucial." : "Você mantém a posição e observa o líder, que parece nervoso.";
            choices.innerHTML = <button onclick="chooseOption(1)">Acelerar na reta</button><button onclick="chooseOption(2)">Manter ritmo seguro</button>;
            break;
        case 2:
            story.innerHTML = option === 1 ? "Você acelera na reta e ganha velocidade. Um rival surge ao lado tentando ultrapassar!" : "Você mantém o ritmo e acompanha o líder. Um carro atrás se aproxima perigosamente.";
            choices.innerHTML = <button onclick="chooseOption(1)">Bloquear rival</button><button onclick="chooseOption(2)">Arriscar ultrapassagem segura</button>;
            break;
        case 3:
            story.innerHTML = option === 1 ? "Você bloqueia o rival com maestria, mas perde tempo na curva seguinte." : "Você faz ultrapassagem segura. O público vibra com sua habilidade.";
            choices.innerHTML = <button onclick="chooseOption(1)">Seguir líder de perto</button><button onclick="chooseOption(2)">Tentar assumir liderança</button>;
            break;
        case 4:
            story.innerHTML = option === 1 ? "Você segue o líder de perto. Na última curva, ele escorrega!" : "Você assume a liderança, mas a curva final é muito fechada e arriscada!";
            choices.innerHTML = <button onclick="chooseOption(1)">Curva interna arriscada</button><button onclick="chooseOption(2)">Curva externa segura</button>;
            break;
        case 5:
            story.innerHTML = option === 1 ? "Você faz a curva interna e mantém o carro estável. A reta final é sua chance de vitória." : "Você faz curva externa com segurança. O líder ainda está próximo, preparado para atacar.";
            choices.innerHTML = <button onclick="chooseOption(1)">Acelerar tudo</button><button onclick="chooseOption(2)">Manter ritmo e observar rival</button>;
            break;
        case 6:
            story.innerHTML = option === 1 ? "Você acelera tudo e um carro rival tenta ultrapassar por fora!" : "Você mantém ritmo e observa rival, mas o público grita por mais emoção.";
            choices.innerHTML = <button onclick="chooseOption(1)">Forçar ultrapassagem interna</button><button onclick="chooseOption(2)">Evitar colisão e esperar reta final</button>;
            break;
        case 7:
            story.innerHTML = option === 1 ? "Você força ultrapassagem e quase toca o rival. O carro dá um pequeno desvio." : "Você evita colisão e mantém posição, esperando a curva seguinte para decidir.";
            choices.innerHTML = <button onclick="chooseOption(1)">Acelerar agressivamente</button><button onclick="chooseOption(2)">Fazer curva segura</button>;
            break;
        case 8:
            story.innerHTML = option === 1 ? "Você acelera agressivamente e ganha metros preciosos, mas o carro começa a derrapar!" : "Você faz curva segura. O líder ainda está à frente, mas você se mantém firme.";
            choices.innerHTML = <button onclick="chooseOption(1)">Corrigir derrapagem e manter velocidade</button><button onclick="chooseOption(2)">Reduzir velocidade para evitar acidente</button>;
            break;
        case 9:
            story.innerHTML = option === 1 ? "Você corrige a derrapagem e mantém velocidade, aproximando-se do líder." : "Você reduz velocidade e mantém carro seguro. Rival aproveita e se aproxima.";
            choices.innerHTML = <button onclick="chooseOption(1)">Forçar ultrapassagem final</button><button onclick="chooseOption(2)">Esperar falha do líder</button>;
            break;
        case 10:
            story.innerHTML = option === 1 ? "Você tenta ultrapassagem final na reta, mas o líder defende posição!" : "Você espera e observa. O líder mostra sinais de cansaço.";
            choices.innerHTML = <button onclick="chooseOption(1)">Arriscar ultrapassagem na curva final</button><button onclick="chooseOption(2)">Esperar para finalizar na reta final</button>;
            break;
        case 11:
            story.innerHTML = option === 1 ? "Você arrisca na curva final e quase perde controle!" : "Você espera na reta e aproveita a velocidade do rival, que erra!";
            choices.innerHTML = <button onclick="chooseOption(1)">Recuperar controle e acelerar</button><button onclick="chooseOption(2)">Fazer curva segura e manter posição</button>;
            break;
        case 12:
            story.innerHTML = option === 1 ? "Você recupera controle e dispara na reta. A vitória está próxima!" : "Você mantém curva segura. O público grita enquanto o líder tenta se recuperar.";
            choices.innerHTML = <button onclick="chooseOption(1)">Ultrapassar pelo lado interno</button><button onclick="chooseOption(2)">Ultrapassar pelo lado externo</button>;
            break;
        case 13:
            story.innerHTML = option === 1 ? "Você faz ultrapassagem interna com precisão. O líder tenta reagir!" : "Você passa pelo lado externo. É arriscado, mas funciona!";
            choices.innerHTML = <button onclick="chooseOption(1)">Acelerar até a linha de chegada</button><button onclick="chooseOption(2)">Manter ritmo e garantir vitória segura</button>;
            break;
        case 14:
            story.innerHTML = option === 1 ? "Você acelera ao máximo! A linha de chegada está logo à frente!" : "Você mantém ritmo, mas ainda há chance do rival tentar recuperar.";
            choices.innerHTML = <button onclick="chooseOption(1)">Cruzar linha de chegada agressivamente</button><button onclick="chooseOption(2)">Cruzar linha de chegada com segurança</button>;
            break;
        case 15:
            story.innerHTML = option === 1 ? "Você cruza a linha de chegada em PRIMEIRO LUGAR! Vitória épica! 🏆" : "Você cruza a linha de chegada em segundo lugar. Excelente desempenho, quase perfeito! 🎉";
            choices.innerHTML = <button onclick="restartGame()">Jogar de novo</button>;
            step = 1;
            break;
    }
    step++;
}

function restartGame() {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');

    story.innerHTML = "Você está na última volta da corrida de Fórmula 1. Seu carro está em segundo lugar. O que você faz?";
    choices.innerHTML = `
        <button onclick="chooseOption(1)">Tenta ultrapassar o líder na curva</button>
        <button onclick="chooseOption(2)">Mantém a posição e espera a próxima reta</button>
    `;
    step = 1;
}
