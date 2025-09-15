function GenerateNumber() {
    const minInput = document.getElementById("minimo").value;
    const maxInput = document.getElementById("maximo").value;

    // Verifica se os campos estão preenchidos
    if (!minInput || !maxInput) {
        alert("Por favor, preencha os dois campos!");
        return; // Sai da função
    }

    const min = parseInt(minInput);
    const max = parseInt(maxInput);

    // Verifica se os valores são válidos
    if (isNaN(min) || isNaN(max)) {
        alert("Digite números válidos!");
        return;
    }

    // Verifica se o mínimo não é maior que o máximo
    if (min > max) {
        alert("O valor mínimo não pode ser maior que o máximo!");
        return;
    }

    // Verifica se o mínimo é igual ao máximo
    if (min === max) {
        alert("O valor mínimo e máximo não podem ser iguais!");
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("resultado").innerText = `Número sorteado: ${result}`;
}
