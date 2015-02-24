{"changed":true,"filter":false,"title":"app.js","tooltip":"/app.js","value":"var app = angular.module(\"myApp\", []);\n\napp.controller(\"myCtrl\", function ($scope) {\n    $scope.games = [\n        {\n            \"name\": \"Hockey\",\n            \"selected\": false\n        },\n        {\n            \"name\": \"Football\",\n            \"selected\": false\n        },\n        {\n            \"name\": \"Tennis\",\n            \"selected\": false\n        }];\n\n    var _players = [\n          {\n              \"name\": \"Jane Doe\",\n              \"Age\": 25,\n              \"game\": \"Hockey\",\n              \"selected\": false\n          },\n          {\n              \"name\": \"Sam John\",\n              \"Age\": 25,\n              \"game\": \"Football\",\n              \"selected\": false\n          },\n          {\n              \"name\": \"Peter Robin\",\n              \"Age\": 27,\n              \"game\": \"Football\",\n              \"selected\": false\n          },\n          {\n              \"name\": \"Jack Dan\",\n              \"Age\": 27,\n              \"game\": \"Tennis\",\n              \"selected\": false\n          },\n          {\n              \"name\": \"Sara Johnson\",\n              \"Age\": 25,\n              \"game\": \"Tennis\",\n              \"selected\": false\n          },\n          {\n              \"name\": \"Jessie Jack\",\n              \"Age\": 25,\n              \"game\": \"Football\",\n              \"selected\": false\n          }\n    ];\n    \n    $scope.gameSelected = function () {\n        var selected_games = _.filter($scope.games, function (game) { return game.selected }).map(function (x) { return x.name });\n        $scope.players = _.filter(_players, function (player) { return _.contains(selected_games, player.game) });\n    }\n});","undoManager":{"mark":-1,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["﻿"]}]}]]},"ace":{"folds":[],"scrolltop":600,"scrollleft":0,"selection":{"start":{"row":52,"column":15},"end":{"row":52,"column":23},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":50,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1424776001843}