/**
* moviecat Mod'ule
*
* Description
*/
angular.module('moviecat', 
	[
	'ngRoute',
	'moviecat.movie_list',
	'moviecat.coming_soon',
	'moviecat.in_theaters',
	'moviecat.top'
	]).
	config(['$routeProvider',function($routeProvider) {
		$routeProvider.otherwise({redirectTo:'/in_theaters/1'});
	}])
	