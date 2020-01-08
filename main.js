import * as estadosCidades from './lib/main.js';

var estados = estadosCidades.estados();
var codigoEstados = estadosCidades.estados('codigos');
var cidades = estadosCidades.cidades();
var cidadesOrdenadas = estadosCidades.cidades(false);
var capitais = estadosCidades.capitais();

export {
    estados,
    codigoEstados,
    cidades,
    cidadesOrdenadas,
    capitais,
};
