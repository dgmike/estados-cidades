import { strict as assert } from 'assert';
import * as cidadesEstados from './../main.js';

describe("main", function () {
  it("must test something", function () {
    assert.equal(cidadesEstados.estados.length, 27);
  });
});
