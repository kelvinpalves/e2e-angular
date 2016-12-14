(function () {
	'use strict';

	angular
		.module('app')
		.controller('FormExample', FormExample);

	function FormExample() {
		var vm = this;
		vm.add = add;
		vm.model = {};
		vm.result = 0;
		
		function add(model) {
			vm.result = parseInt(model.number01) + parseInt(model.number02);
		}
	}
})();