var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    $scope.games = [
        {
            "name": "Hockey",
            "selected": false
        },
        {
            "name": "Football",
            "selected": false
        },
        {
            "name": "Tennis",
            "selected": false
        }];

    var _players = [
          {
              "name": "Jane Doe",
              "Age": 25,
              "game": "Hockey",
              "selected": false
          },
          {
              "name": "Sam John",
              "Age": 25,
              "game": "Football",
              "selected": false
          },
          {
              "name": "Peter Robin",
              "Age": 27,
              "game": "Football",
              "selected": false
          },
          {
              "name": "Jack Dan",
              "Age": 27,
              "game": "Tennis",
              "selected": false
          },
          {
              "name": "Sara Johnson",
              "Age": 25,
              "game": "Tennis",
              "selected": false
          },
          {
              "name": "Jessie Jack",
              "Age": 25,
              "game": "Football",
              "selected": false
          }
    ];
    
    $scope.gameSelected = function () {
        var selected_games = _.filter($scope.games, function (game) { return game.selected }).map(function (x) { return x.name });
        $scope.players = _.filter(_players, function (player) { return _.contains(selected_games, player.game) });
    }
});