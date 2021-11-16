export default {
  inlineDynamicImports: true,
  input: "main.js",
  output: [
    {
      file: "estados-cidades.js",
      format: "iife",
      name: "estadosCidades"
    },
    {
      file: "estados-cidades.min.js",
      format: "iife",
      name: "estadosCidades",
      compact: true,
      sourcemap: true,
      sourcemapFile: "estados-cidades.min.js.map",
    },
    {
      file: "estados-cidades.node.js",
      format: "cjs",
      name: "estadosCidades"
    },
  ],
};
