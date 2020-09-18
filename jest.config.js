module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.spec.json",
      isolatedModules: true,
      diagnostics: false,
    }
  }
};
