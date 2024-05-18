// index.js
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

function formatModifiersAndTypes(code) {
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["typescript", "decorators-legacy"]
  });

  traverse(ast, {
    ClassMethod(path) {
      const { node } = path;
      // Add public accessibility if missing
      if (!node.accessibility) {
        node.accessibility = "public";
      }
      // Add return type as 'any' if missing
      if (!node.returnType) {
        node.returnType = {
          type: "TypeAnnotation",
          typeAnnotation: {
            type: "TSAnyKeyword"
          }
        };
      }
    },
    ClassProperty(path) {
      const { node } = path;
      // Add public accessibility if missing
      if (!node.accessibility) {
        node.accessibility = "public";
      }
      // Add type as 'any' if missing
      if (!node.typeAnnotation) {
        node.typeAnnotation = {
          type: "TypeAnnotation",
          typeAnnotation: {
            type: "TSAnyKeyword"
          }
        };
      }
    }
  });

  return generate(ast).code;
}

module.exports = {
  parsers: {
    typescript: {
      parse: (text, parsers, options) => {
        return parser.parse(text, {
          sourceType: "module",
          plugins: ["typescript", "decorators-legacy"]
        });
      },
      preprocess: (text, options) => {
        return formatModifiersAndTypes(text);
      },
      astFormat: "estree",
      locStart: (node) => node.start,
      locEnd: (node) => node.end
    }
  }
};
