/**
* moviecat Mod'ule
*
* Description
*/
angular.module('moviecat', 
	[
	'ngRoute',
	'moviecat.comming_soon',
	'moviecat.in_theaters',
	'moviecat.top'
	]).
	config(['$routeProvider',function($routeProvider) {

		$routeProvider.otherwise({redirectTo:'/comming_soon'});
	}])
	