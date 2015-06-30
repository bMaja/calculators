angular.module("Calculator", []);

angular.module('Calculator').controller('SaveController', ['$scope', function($scope) {

	$scope.calculateSavings = function(savePerMonth, numberOfMonths, interestRate) {
		var principal = parseInt(savePerMonth) * parseInt(numberOfMonths);
		$scope.savings = principal + principal * (parseInt(interestRate)/100);
	};

}]);

angular.module('Calculator').controller('PayController', ['$scope', function($scope) {
		
	$scope.calculatePayments = function(savePerMonth, numberOfMonths) {
		$scope.payments = parseInt(savePerMonth) * parseInt(numberOfMonths);
	};

}]);