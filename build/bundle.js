var SystemError = /** @class */ (function () {
    function SystemError(menssagem, tipo) {
        this.menssagem = menssagem;
        this.tipo = tipo;
    }
    return SystemError;
}());
console.log('Será que vai dar erro');
try {
    console.log('Antes do erro');
    throw new SystemError('Error que que eu mesmo gerei', 'Abstrato'); // se cair no throw ele vai direto pro catch
    console.log('Depois do erro');
}
catch (error) {
    if (error instanceof SystemError) {
        console.log("".concat(error.tipo, ": ").concat(error.menssagem));
    }
}
console.log('Acabou');
throw new SystemError('Error que que eu mesmo gerei', 'Abstrato');
