
function construirEmail(nome) {
    let partesNome = nome.split("  ");
    let primeiroNome = partesNome[0];
    let ultimoNome = partesNome[partesNome.length - 1];
    return `${primeiroNome}.${ultimoNome}@facens.br`;
}
console.log(construirEmail("Jonathan  Diniz"));
