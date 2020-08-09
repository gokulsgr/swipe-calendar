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
		// 'class-methods-use-this': 0,
		// 'import/imports-first': 0,
		// 'import/newline-after-import': 0,
		// 'import/no-dynamic-require': 0,
		// 'import/no-extraneous-dependencies': 0,
		// 'import/no-named-as-default': 0,
		// 'import/no-unresolved': 2,
		// 'import/no-webpack-loader-syntax': 0,
		// 'import/prefer-default-export': 0,
		indent: [
			2,
			4,
			{ "ignoredNodes": ["TemplateLiteral > *"], "SwitchCase": 1 }
		],
		"react/jsx-indent": [2, 4],
		"react/jsx-indent-props": [2, 4],
		// 'jsx-a11y/aria-props': 2,
		// 'jsx-a11y/heading-has-content': 0,
		// 'jsx-a11y/label-has-associated-control': [
		// 	2,
		// 	{
		// 		controlComponents: ['Input'],
		// 	},
		// ],
		// 'jsx-a11y/label-has-for': 0,
		// 'jsx-a11y/mouse-events-have-key-events': 2,
		// 'jsx-a11y/role-has-required-aria-props': 2,
		// 'jsx-a11y/role-supports-aria-props': 2,
		// 'max-len': 0,
		// 'newline-per-chained-call': 0,
		// 'no-confusing-arrow': 0,
		// 'no-console': 1,
		// 'no-unused-vars': 2,
		// 'no-use-before-define': 0,
		// 'prefer-template': 2,
		// 'react/destructuring-assignment': 0,
		// 'react-hooks/rules-of-hooks': 'error',
		// 'react/jsx-closing-tag-location': 0,
		'react/prop-types': 0,
		// 'react/jsx-first-prop-new-line': [2, 'multiline'],
		'react/jsx-filename-extension': 0,
		'react/no-array-index-key': 0,
		// 'react/jsx-no-target-blank': 0,
		// 'react/jsx-uses-vars': 2,
		// 'react/require-default-props': 0,
		// 'react/require-extension': 0,
		// 'react/self-closing-comp': 0,
		// 'react/sort-comp': 0,
		// 'require-yield': 0,
  },
};
