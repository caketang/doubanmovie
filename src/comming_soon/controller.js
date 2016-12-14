(function (angular) {
	var module = angular.module('moviecat.comming_soon', ['ngRoute']).
		//配置模块路由
		config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/comming_soon',
			{
				templateUrl:'comming_soon/view.html',
				controller:'CommingsoonController'
			});
		}]);
		module.controller('CommingsoonController', ['$scope', function($scope){
			
		}])

})(angular)
