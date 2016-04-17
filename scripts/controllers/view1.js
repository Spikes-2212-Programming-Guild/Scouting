'use strict';

angular.module('myApp', [])



.controller('View1Ctrl',[ '$scope', function($scope) {
  $scope.line = {};
  $scope.a = 4;
  $scope.defences = {};

  $scope.add = function(){
    var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "hello world.txt");
    $scope.a = "end!";
  }

  $scope.setDefence = function(defence, value){
    $scope.defences[defence] = value;
  }

  $scope.getDefence = function(defence){
    return $scope.defences[defence];
  }



}]);