'use strict';

/**
 * @ngdoc function
 * @name angAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angAppApp
 */
angular.module('angAppApp')
    .controller('AboutCtrl', function ($scope, $firebaseObject) {

        var ref = new Firebase("https://glaring-fire-8833.firebaseio.com/author");

        // download the data into a local object
        var syncObject = $firebaseObject(ref);

        syncObject.$bindTo($scope, "data");


        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
