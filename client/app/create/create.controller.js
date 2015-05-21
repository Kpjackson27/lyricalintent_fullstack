'use strict';

angular.module('lyricalIntentApp')
  .controller('CreateCtrl', function ($scope,$http,socket) {
    $scope.poems = [];

    $http.get('/api/poems').success(function(poems){
    	$scope.poems = poems;
    	socket.syncUpdates('poem', $scope.poems);
    });

    $scope.addPoem = function(){
    	if($scope.title === ''){
    		return;
    	}
    	$http.post('/api/poems',{
    		title: $scope.title,
    		lyric: $scope.lyric,
    	});
    	$scope.title = '';
    	$scope.lyric = '';
    };

    $scope.deletePoem = function(poem){
    	$http.delete('/api/poems/' + poem._id);
    };
    $scope.$on('$destroy', function(){
    	socket.unsyncUpdates('poem');
    });
  });
