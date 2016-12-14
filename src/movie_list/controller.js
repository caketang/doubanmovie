(function (angular) {
	// 正在热映和top，即将三个模块控制和视图抽象为一个公用模块
	var module = angular.module('moviecat.movie_list', ['ngRoute','moviecat.http'])
		//配置模块路由
		.config(['$routeProvider',function($routeProvider) 
					$routeProvider.when('/:category/:page', // 匹配
			{
				templateUrl:'movie_list/view.html',
				controller:'MovieListController'
			});
		}])
		.controller('MovieListController', ['$scope','$routeParams','$route','HttpService',function($scope,$routeParams,$route,HttpService){
			// 设计暴露的数据 暴露数据的行为
		
			//console.log($routeParams.category)
			var page = parseInt($routeParams.page); // 一共多少页
			//console.log(page);
			var count = 10; // 每一页的条数
			var start = (page - 1) * count; //开始的
			// 遮罩层
			$scope.loading= true;
			$scope.subjects = [];
			$scope.message='';
			$scope.totalCount=0; //总共多少
			$scope.totalPages=0; // 总共多少页
			$scope.currentPage=page; // 当前页面
			HttpService.jsonp('http://api.douban.com/v2/movie/'+$routeParams.category,{
				start:start,
				count:count
			},function (data) {
				$scope.title=data.title;
				$scope.subjects = data.subjects;
				$scope.totalCount= data.total;
				$scope.totalPages= Math.ceil($scope.totalCount /  count);
				$scope.loading=false;
				$scope.$apply();
				//console.log(data)
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
