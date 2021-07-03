module.exports = {
	...require('altheajs-prettier-config'),
	semi: false,
	importOrder: [
		'^@bb/api/(.*)$',
		'^@bb/lib/(.*)$',
		'^@bb/contants/(.*)$',
		'^@bb/hooks/(.*)$',
		'^@bb/navigation/(.*)$',
		'^@bb/components/(.*)$',
		'^@bb/screens/(.*)$',
		'^[./]',
		'^@bb/assets/(.*)$',
		'^@bb/styles/(.*)$',
	],
	importOrderSeparation: false,
	experimentalBabelParserPluginsList: ['jsx', 'typescript'], // not using typescript ATM but might, so prepping
}
