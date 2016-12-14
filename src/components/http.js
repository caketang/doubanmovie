(function (angular) {
	var http = angular.module('moviecat.http',[]);
		http.service('HttpService', ['$document', '$window',function($document,$window){
			// angualrm默认提供的异步请求对象不支持自定义回调函数名称

			this.jsonp=function (url,data,callback) {
				// 挂载回调函数
				//处理回调函数
				// 创建script标签
				//添加到body中
				//http://api.douban.com/v2/movie/in_theaters?callback=cbFunc
				var fnSuffix = Math.random().toString().replace('.','');
				var cbFunc = 'my_json_cb'+fnSuffix;
				//
				$window[cbFunc] = callback;
				var queryString = url.indexOf('?') == -1 ? '?' : '&';
				for(var key in data)
				{
					queryString += key+'=' +data[key]+'&';
				}
				queryString +='callback='+cbFunc;
				var scriptElement = $document[0].createElement('script');
					scriptElement.src=url+queryString;

				$document[0].body.appendChild(scriptElement);
			}
		}]);	
})(angular);