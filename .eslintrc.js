module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "airbnb",
        "airbnb-typescript"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.eslint.json"
    },
    "plugins": [
        "@typescript-eslint",
        "import",
        "jsx-a11y",
        "react",
        "react-hooks",
    ],
    "root": true,
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/react-in-jsx-scope": "off",
        "react/function-component-definition": "off",
        "react/destructuring-assignment": "off",
        "react/prop-types": "off",
    },
};
