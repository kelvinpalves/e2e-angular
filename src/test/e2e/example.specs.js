describe('Example of end-to-end test', function() {
	beforeEach(function () {
		browser.get('http://localhost/e2e-angular');
	});

	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('Example E2E Test with Protractor');
	});

	it('should have a result', function () {
		element(by.model('vm.model.number01')).sendKeys(10);
		element(by.model('vm.model.number02')).sendKeys(45);
		element(by.id('btnAdd')).click();
		expect(element(by.id('result')).getText()).toBe('55');
	});
});