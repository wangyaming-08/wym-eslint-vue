module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "plugin:vue/vue3-strongly-recommended",
        "airbnb-base",
        "prettier",
        "./.eslintrc-auto-import.json"
  
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module",
        "ecmaFeatures": {
            tsx: true,
            jsx: true
        }
    },
    "globals": {
        defineProps: "readonly",
        defineEmits: "readonly",
        defineExpose: "readonly",
        withDefaults: "readonly",
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "settings": {
        "import/resolver":{
            alias: {
                map: [["@", "./src"]],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], 
            }
        },
        "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"]
    },
    "rules": {
        "import/no-extraneous-dependencies": 0,
        "no-param-reassign": [
            "error",
            {
                "props": true,
                "ignorePropertyModificationsFor": [
                  "e", 
                  "ctx", 
                  "req",
                  "request", 
                  "res", 
                  "response",
                  "state"
                ]
              }
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
         ],
        "complexity": [
            "warn",
            { max: 20 }
        ],
        "vue/multi-word-component-names": 0,
        "vue/attribute-hyphenation":0,
        "vue/v-on-event-hyphenation":0,
    },
}
