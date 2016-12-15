(function(angular) {
    //自定义指令
    var app = angular.module('moviecat.directive.autofocus', []);
    //auto-focus
    app.directive('autoFocus', ['$location', function($location) {
        // 获得当前的路径 刚从浏览器打开火的path为空
        var path = $location.path(); // /coming_soon

        console.log(path + '12313')
        return {

            restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment

            link: function($scope, iElm, iAttrs, controller) {
                $scope.$location = $location;
                //将locatioon挂载在scope上，用watch监视变化
                $scope.$watch('$location.path()', function(now) {
                    var alink = iElm.children().attr('href');
                    var type = alink.replace(/#(\/.+?)\/\d+/, '$1');
                    // 与li子元素的a.href匹配，如果成功添加class
                    console.log(now)
                    if (now.startsWith(type)) {
                    	iElm.parent().children().removeClass('active');
                        iElm.addClass('active');
                    }
                })


               
            }
        };
    }]);
})(angular);
