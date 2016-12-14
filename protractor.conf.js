exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['src/test/e2e/*.js'],
	capabilities: {
		'browserName': 'firefox'
	},
	framework: 'jasmine',
	jasmineNodeOpts: {
		showColors: true
	}
};