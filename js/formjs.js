var app = angular.module('formExample', []);

app.controller("formCtrl", ['$scope', '$http', function($scope, $http) {
  $scope.url = 'submit.php';

  $scope.formsubmit = function(isValid) {

	  if (isValid) {
		
		  $http.post($scope.url, {"name": $scope.name, "email": $scope.email, "contact": $scope.contact}).
			  success(function(data, status) {
				  console.log(data);
				  $scope.status = status;
				  $scope.data = data;
				  $scope.result = data; // Show result from server in our <pre></pre> element
			  })
	  } else {
		alert('Form is not valid');
	  }
  }
}]);
