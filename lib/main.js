import { estadosCidades } from './estados-cidades.js';

var estados = function estados(formato) {
    if (undefined === formato) {
      formato = 'nomes';
    }

    var codigos = Object.keys(estadosCidades).sort();
    return codigos.map(function (codigo) {
        var estado = estadosCidades[codigo];
        return formato === 'nomes' ? estado.nome : estado.abreviacao;
    });
};

var cidades = function cidades(capitaisPrimeiro) {
    if (undefined === capitaisPrimeiro) {
        capitaisPrimeiro = true
    }

    var codigos = Object.keys(estadosCidades).sort();

    return codigos.reduce(function (mapa, codigo) {
        var municipios = Array.from(estadosCidades[codigo].municipios);

        municipios.sort(function (a, b) {
            if (capitaisPrimeiro) {
                if (a.capital === true) {
                    return -1;
                }
                if (b.capital === true) {
                    return 1;
                }
            }
            return a.nome.toLowerCase().localeCompare(b.nome.toLowerCase());
        });

        mapa[codigo] = municipios.map(function (municipio) {
            return municipio.nome;
        });
        return mapa;
    }, {});
};

var capitais = function capitais() {
    var codigos = Object.keys(estadosCidades).sort();

    return codigos.map(function (codigo) {
        var capital = estadosCidades[codigo].municipios.find(function (cidade) {
            return true === cidade.capital;
        });

        return [codigo, capital.nome];
    });
};

export { estados, cidades, capitais };
