'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      {name: 'Half rack', image: '../images/i_half_rack.png'},
      {name: 'Chest Incline 50', image: '../images/i_chest_incline_50.png'},
      {name: 'Hangle 1', image: '../images/i_hantle1.png'},
	  {name: 'Hantle 2', image: '../images/i_hantle2.png'}
    ];

	$scope.deleteThing = function(index){
		console.log("Remove" + index);
		$scope.awesomeThings.splice(index, 1);
		
	};
	
	$scope.add = function(){
		console.log("Add " + $scope.thingText);
		$scope.awesomeThings.push({name: $scope.thingText, image: '../images/i_half_rack.png'});
		$scope.thingText = '';
	};
  })
	.controller("NewCtrl", function($scope) {
		$scope.save = function() {
			console.log("Save " + $scope.project.name);
		}
	});
