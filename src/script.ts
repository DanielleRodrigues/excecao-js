class SystemError {

    public menssagem: string;
    public tipo: string;


    constructor(menssagem: string, tipo: string) {
        this.menssagem = menssagem;
        this.tipo = tipo;
    }

}

console.log('Será que vai dar erro');

try {
    console.log('Antes do erro');
    throw new SystemError('Error que que eu mesmo gerei', 'Abstrato'); // se cair no throw ele vai direto pro catch
    console.log('Depois do erro');

} catch (error) {

    if (error instanceof SystemError) {
        console.log(`${error.tipo}: ${error.menssagem}`);
    } else{
        console.log(`Error: ${error.menssagem}`);
    }
}

console.log('Acabou');


throw new SystemError('Error que que eu mesmo gerei', 'Abstrato');