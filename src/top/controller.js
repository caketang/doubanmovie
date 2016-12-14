(function (angular) {
	var module = angular.module('moviecat.top', ['ngRoute']).
		//配置模块路由
		config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/top',
			{
				templateUrl:'top/view.html',
				controller:'TopController'
			});
		}]);
		module.controller('TopController', ['$scope', function($scope){
			
		}])

})(angular)
