(function (angular) {
	//自定义指令
	var app = angular.module('moviecat.directive.autofocus',[]);
	//auto-focus
		app.directive('autoFocus', ['$location', function($location){
			// 获得当前的路径
			var path = $location.path();// /coming_soon
			console.log(path)
			return {
				
				restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
				
				link: function($scope, iElm, iAttrs, controller) {
					var alink = iElm.children().attr('href');
					var type = alink.replace(/#(\/.+?)\/\d+/,'$1');
					// 与li子元素的a.href匹配，如果成功添加class
					if(path.startsWith(type))
					{
						iElm.addClass('active');
					}
					
					iElm.on('click',function () {
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');
						
					})
				}
			};
		}]);	
})(angular);