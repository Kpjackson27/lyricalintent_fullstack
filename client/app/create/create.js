'use strict';

angular.module('lyricalIntentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/create',
        templateUrl: 'app/create/create.html',
        controller: 'CreateCtrl',
         authenticate: true
      });
  });