module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
	  es6: true,
	  browser: true,
	  node: true,
	  jest: true
	},
	parserOptions: {
	  plugins: ['typescript'],
	  ecmaVersion: 2018,
	  sourceType: 'module',
	  ecmaFeatures: {
		jsx: true
	  }
	},
	extends: [
	  'eslint:recommended',
	  'plugin:react/recommended',
	  'plugin:@typescript-eslint/recommended',
	  'prettier',
	  'prettier/react',
	  'prettier/@typescript-eslint'
	],
	settings: {
	  react: {
		version: 'detect'
	  }
	},
	plugins: [
	  '@typescript-eslint',
	  'react',
	  'import',
	  'unicorn',
	  'react-hooks',
	  'prettier'
	],
	rules: {
	  // TypeScript-specific Rules
	  '@typescript-eslint/no-explicit-any': 0,
	  '@typescript-eslint/explicit-member-accessibility': 0,
	  '@typescript-eslint/explicit-function-return-type': 0,
	  '@typescript-eslint/no-unused-vars': 0,
	  '@typescript-eslint/ban-types': [
		2,
		{
		  types: { String: { message: 'Use string instead', fixWith: 'string' } }
		}
	  ],
  
	  // ================================================================================
	  // FIXME: ESLint: Error while loading rule '@typescript-eslint/strict-boolean-expressions': You have used a rule
	  // which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project"
	  // property for @typescript-eslint/parser. Occurred while linting /Users/nathanielhall/Projects/starter-app/src/modules/app.tsx.
	  // Please see the 'ESLint' output channel for details.
	  // ================================================================================
	  // '@typescript-eslint/no-empty-interface': 1,
	  // '@typescript-eslint/no-namespace': 1,
	  '@typescript-eslint/no-non-null-assertion': 0, // Disallows non-null assertions using the ! postfix operator
	  // '@typescript-eslint/class-name-casing': 1, // STYLE - Require PascalCased class and interface names
	  // '@typescript-eslint/no-unnecessary-type-assertion': 1, //Warns if a type assertion does not change the type of an expression
	  // '@typescript-eslint/no-unnecessary-type-arguments': 1, // Enforces that types will not to be used
	  // '@typescript-eslint/promise-function-async': 1, // Functions that return promises must be async
	  // '@typescript-eslint/await-thenable': 1, //Disallows awaiting a value that is not a Promise
	  // '@typescript-eslint/require-await': 1, // Disallow async functions which have no await expression
	  // //'@typescript-eslint/strict-boolean-expressions': 1, // Boolean expressions are limited to booleans
	  // ================================================================================
  
	  // Hooks
	  'react-hooks/rules-of-hooks': 2,
	  'react-hooks/exhaustive-deps': 'warn',
  
	  // Filename Case
	  // 'unicorn/filename-case': [
	  //   'error',
	  //   {
	  //     case: 'pascalCase'
	  //   }
	  // ],
  
	  // Imports
	  'import/no-default-export': 1,
	  'import/no-duplicates': 1,
  
	  // React
	  'react/prop-types': 0,
	  'react/jsx-pascal-case': 2,
  
	  // ESLint
	  'no-eval': 1,
	  'no-extra-boolean-cast': 0
  
	  // Security
	  // @todo
	}
  }