module.exports = {
  env : {
    browser : true,
    node : true
  },
  extends : [
    // vue
    // - vue.js의 코드규칙을 통해 문법 검사(3가지)
    // - 현재 프로젝트에서는 2번째 레벨 적용
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3 -엄격

    // js
    // - 권장하는 코드규칙을 통해 문법 검사
    'eslint:recommended'
  ],
  parserOptions : {
    // 코드를 분석할 수 있는 옵션
    // parser : 'babel-eslint'
  },
  rules : {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/multi-word-component-names": ["error", {
      "ignores": []
    }]
  }
}
