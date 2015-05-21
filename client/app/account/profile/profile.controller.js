'use strict';

angular.module('lyricalIntentApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.name = 'Kareem';
    $scope.email = 'kpjackson27@hotmail.com';
    $scope.followers = 5;
    $scope.following = 10
    $scope.upvotes = 20
    $scope.features = 2;
  });
