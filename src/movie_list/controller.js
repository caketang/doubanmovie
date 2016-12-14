(function (angular) {
	
	var module = angular.module('moviecat.coming_soon', ['ngRoute','moviecat.http'])
		//配置模块路由
		.config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/coming_soon/:page',
			{
				templateUrl:'coming_soon/view.html',
				controller:'ComingSoonController'
			});
		}])
		.controller('ComingSoonController', ['$scope','$routeParams','$route','HttpService',function($scope,$routeParams,$route,HttpService){
			// 设计暴露的数据 暴露数据的行为
			// 遮罩
			var page = parseInt($routeParams.page); // 一共多少页
			console.log(page);
			var count = 10; // 每一页的条数
			var start = (page - 1) * count; //开始的
			$scope.loading= true;
			$scope.subjects = [];
			$scope.message='';
			$scope.totalCount=0;
			$scope.totalPages=0;
			$scope.currentPage=page;
			HttpService.jsonp('http://api.douban.com/v2/movie/coming_soon',{
				start:start,
				count:count
			},function (data) {
				$scope.title=data.title;
				$scope.subjects = data.subjects;
				$scope.totalCount= data.total;
				$scope.totalPages= Math.ceil($scope.totalCount /  count);
				$scope.loading=false;
				$scope.$apply();
				console.log(data)
			})
			//暴露更改页码的行为
			$scope.go=function (page) {
				if(page>=1&&page<=$scope.totalPages)
				{
					$route.updateParams({page:page});
				}
				
			}
			/*//$scope.subjects= data.subjects;
			$http.get('/app/src/js/data.json').then(function (data) {
				if(data.status == 200)
				{

					$scope.subjects = data.data.subjects;
				}else {
					console.log('获取数据错误')
				}
				
			},function (err) {
			console.log('获取数据错误'+err.statusText);
			});*/
		}])

})(angular)
