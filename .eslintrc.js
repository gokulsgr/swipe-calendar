module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import'
  ],
  rules: {
		indent: [
			2,
			4,
			{ "ignoredNodes": ["TemplateLiteral > *"], "SwitchCase": 1 }
		],
		"react/jsx-indent": [2, 4],
		"react/jsx-indent-props": [2, 4],
		'react/prop-types': 0,
		'react/jsx-filename-extension': 0,
		'react/no-array-index-key': 0,
  },
};
