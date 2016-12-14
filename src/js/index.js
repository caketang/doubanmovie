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
	]).
	config(['$routeProvider',function($routeProvider) {
		$routeProvider.otherwise({redirectTo:'/in_theaters/1'});
	}])
	