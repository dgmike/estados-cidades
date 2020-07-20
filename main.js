import * as estadosCidades from './lib/main.js';

const estados = estadosCidades.estados();
const codigoEstados = estadosCidades.estados('codigos');
const cidades = estadosCidades.cidades();
const cidadesOrdenadas = estadosCidades.cidades(false);
const capitais = estadosCidades.capitais();

export {
    estados,
    codigoEstados,
    cidades,
    cidadesOrdenadas,
    capitais,
};
