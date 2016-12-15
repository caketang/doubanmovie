/**
* moviecat Mod'ule
*
* Description
*/
angular.module('moviecat', 
	[
	'ngRoute',
	'moviecat.movie_list',
	'moviecat.directive.autofocus'
	])
.constant('AppConfig',{
	pageSize:10,
	listApiAddress:'http://api.douban.com/v2/movie/'

})
.config(['$routeProvider',function($routeProvider) {
		$routeProvider.otherwise({redirectTo:'/in_theaters/1'});
	}])
	.controller('SerachController', ['$scope','$route','AppConfig' ,function($scope,$route,AppConfig){
		$route.input='';
		
		$scope.search=function () {
			$route.updateParams({category:'search',q:$scope.input});
		}
	}])
	