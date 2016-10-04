var app = angular.module('myApp', [] );

app.controller('MainCtrl',function($scope){

	$scope.items = [];

	$scope.addText = function() {
		$scope.items.push({'name':$scope.input, 'value':$scope.form.type});
		$scope.input = "";
	}; 

	$scope.options = [
	    { name: 'High', value: '1' }, 
	    { name: 'Medium', value: '2' }, 
	    { name: 'Low', value: '3' }
    ];

    $scope.form = {type : $scope.options[0].value};

});
