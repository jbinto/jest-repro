"use strict";
const ts = require("typescript");
const transformer = {
    process(sourceText, sourcePath, config, options) {
        const transpiled = ts.transpileModule(sourceText, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
        return {
            code: transpiled.outputText
        };
    }
};
module.exports = transformer;
