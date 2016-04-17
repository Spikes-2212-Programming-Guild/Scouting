'use strict';

angular.module('myApp', [])



.controller('View1Ctrl',[ '$scope', function($scope) {
  $scope.lines = [];

  $scope.info = {};
  $scope.defences = {};
  $scope.auto = {};
  $scope.teleop = {};
  $scope.end_game = {};
  $scope.general = {};

  $scope.add = function(){
    var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "hello world.txt");
    $scope.a = "end!";
  }

  $scope.setDefence = function(category, value){
      console.log(category + ': ' + value)
    $scope.defences[category] = value;
  }

  $scope.getDefence = function(category){
    return $scope.defences[category];
  }

  $scope.setMissionAuto = function(mission, value){
    console.log(mission + ': ' + value)
    $scope.auto[mission] = value;
  }

  $scope.getMissionAuto = function(mission){
    return $scope.auto[mission];
  }

  $scope.setMissionEndGame = function(mission, value){
    console.log(mission + ': ' + value)
    $scope.end_game[mission] = value;
  }

  $scope.getMissionEndGame = function(mission){
    return $scope.end_game[mission];
  }

  $scope.setGeneral = function(key, value){
    console.log(key + ': ' + value)
    $scope.general[key] = value;
  }

  $scope.getGeneral = function(key){
    return $scope.general[key];
  }

  $scope.print = function(){
    var to_print = [info.name, info.team_number];
    debugger;
  }





}]);