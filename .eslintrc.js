module.exports = {
  "env": {
    "browser": true,
  },
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
    ],
  "rules": {
    "no-param-reassign": 0,
    "no-new": 0,
    "import/no-unresolved": "off",
    "import/extensions": "never",
    "class-methods-use-this": ["error", { "exceptMethods": ["render"] }],
    "no-bitwise": 0,
    "no-underscore-dangle": 0,
    "no-script-url": 0
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      }
    }
  }
};
