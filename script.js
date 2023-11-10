document.addEventListener('DOMContentLoaded', function () {
    const gerarSenhaBtn = document.getElementById('gerarSenha');
    const senhaOutput = document.getElementById('senhaOutput');
    const forcaSenha = document.getElementById('forcaSenha');
    const observacao = document.getElementById('observacao');
    const comprimentoSenhaInput = document.getElementById('comprimentoSenha');

    gerarSenhaBtn.addEventListener('click', function () {
        const comprimentoSenha = parseInt(comprimentoSenhaInput.value, 10);
        const senha = gerarSenha(comprimentoSenha);
        const forca = calcularForcaSenha(senha);

        senhaOutput.textContent = `Senha: ${senha}`;
        forcaSenha.textContent = `Força da Senha: ${forca}`;
        forcaSenha.className = forcaClass(forca);

        // Adiciona a observação
        observacao.textContent = 'Obs: Em relação à repetição de senhas, esta aplicação gera senhas aleatórias a cada clique no botão "Gerar Senha". A função utiliza uma abordagem aleatória para selecionar caracteres, tornando altamente improvável a geração da mesma senha em sequências consecutivas. No entanto, por questões de segurança adicional, recomenda-se salvar a senha em um papel e evitar armazená-la em qualquer dispositivo.';
    });

    function gerarSenha(comprimento) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        let senha = '';

        for (let i = 0; i < comprimento; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.charAt(randomIndex);
        }

        return senha;
    }

    function calcularForcaSenha(senha) {
        const comprimento = senha.length;
        const maiusculas = senha.match(/[A-Z]/g);
        const minusculas = senha.match(/[a-z]/g);
        const numeros = senha.match(/[0-9]/g);
        const especiais = senha.match(/[!@#$%^&*()_+]/g);

        const forca = (comprimento >= 8 ? 1 : 0) +
            (maiusculas ? 1 : 0) +
            (minusculas ? 1 : 0) +
            (numeros ? 1 : 0) +
            (especiais ? 1 : 0);

        return forca;
    }

    function forcaClass(forca) {
        if (forca === 1) {
            return 'senhaForte';
        } else if (forca === 2) {
            return 'senhaMedia';
        } else if (forca === 3) {
            return 'senhaFraca';
        }
    }
});
