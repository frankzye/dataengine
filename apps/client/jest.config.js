
module.exports = {
  verbose: false,
  "globals": {
    "ts-jest": {
      "tsConfigFile": "tsconfig.json"
    }
  },
  "transform": {
    "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "moduleDirectories": ["node_modules", "public"],
  "roots": [
    "<rootDir>/src"
  ],
  "testRegex": "(\\.|/)(jest)\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
};
