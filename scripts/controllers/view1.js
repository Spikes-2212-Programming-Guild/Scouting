'use strict';

angular.module('myApp', [])



.controller('View1Ctrl',[ '$scope', function($scope) {
  $scope.lines = [];

  $scope.info = {};
  $scope.defences = {};
  $scope.auto = {};
  $scope.teleop = {
    crosses_low_bar: 0,
    crosses_A: 0,
    crosses_B: 0,
    crosses_C: 0,
    crosses_D: 0,
    scores_high: 0,
    scores_low: 0,
    tries_high:0,
    tries_low:0
  };
  $scope.end_game = {};
  $scope.general = {};

  $scope.add = function(){
    var blob = new Blob(["Hello, world!", '53252'], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "hello world.txt");
    $scope.a = "end!";
  };

  $scope.setDefence = function(category, value){
    $scope.defences[category] = value;
  };

  $scope.getDefence = function(category){
    return $scope.defences[category];
  };

  $scope.setMissionAuto = function(mission, value){
    $scope.auto[mission] = value;
  };

  $scope.getMissionAuto = function(mission){
    return $scope.auto[mission];
  };

  $scope.setMissionEndGame = function(mission, value){
    $scope.end_game[mission] = value;
  };

  $scope.getMissionEndGame = function(mission){
    return $scope.end_game[mission];
  };

  $scope.setGeneral = function(key, value){
    $scope.general[key] = value;
  };

  $scope.getGeneral = function(key){
    return $scope.general[key];
  };

  $scope.print = function(){

    var to_print = [$scope.info.scouter_name, $scope.info.team_number, $scope.info.scouter_name, $scope.defences.A, $scope.defences.B,
        $scope.defences.C, $scope.defences.D, $scope.auto.reached, $scope.auto.crosses, $scope.auto.score,
        $scope.teleop.crosses_low_bar, $scope.teleop.crosses_A, $scope.teleop.crosses_B, $scope.teleop.crosses_C,
        $scope.teleop.crosses_D, $scope.teleop.scores_low, $scope.teleop.tries_low, $scope.teleop.scores_high,
        $scope.teleop.tries_high, $scope.end_game.scaleTry, $scope.end_game.scale, $scope.general.defenc_robot,
        $scope.general.comment];

    to_print = "\"" + to_print.join("\",\"") + "\"";
    var blob = new Blob([to_print], {type: "text/csv;charset=utf-8"});
    saveAs(blob, "hello world.csv");
  };


  $scope.$watchGroup(['info', 'defences', 'auto', 'teleop','end_game', 'general' ], function(){
    console.log(345);
  });





}]);