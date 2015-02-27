var app = angular.module("myApp", ['ngRoute','ngAnimate']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/two-way-binding', {
            templateUrl: 'partials/two-way-binding.html',
            controller: 'myCtrl'
        }).
        when('/templates', {
            templateUrl: 'partials/templates.html',
            controller: 'PhoneDetmyCtrlailCtrl'
        }).
        otherwise({
            redirectTo: '/two-way-binding'
        });
    }
]);


app.controller("myCtrl", function($scope) {
    $scope.selected_games = [];
    $scope.selected_players = [];
    $scope.games = ["Hockey", "Football", "Tennis"];

    $scope.players = [{
        "name": "Jane Doe",
        "Age": 25,
        "game": "Hockey"
    }, {
        "name": "Sam John",
        "Age": 25,
        "game": "Football"
    }, {
        "name": "Peter Robin",
        "Age": 27,
        "game": "Football"
    }, {
        "name": "Jack Dan",
        "Age": 27,
        "game": "Tennis"
    }, {
        "name": "Sara Johnson",
        "Age": 25,
        "game": "Tennis"
    }, {
        "name": "Jessie Jack",
        "Age": 25,
        "game": "Football"
    }];

    $scope.syncSelectedGames = function(bool, item) {
        if (bool) {
            // add item
            $scope.selected_games.push(item);
        }
        else {
            // remove item
            if (_.contains($scope.selected_games, item)) {
                $scope.selected_games = _.without($scope.selected_games, item);
                $scope.selected_players =
                    _.filter($scope.players, function(player) {
                        return _.contains($scope.selected_games, player.game)
                    });
            }
        }
    };

    $scope.syncSelectedPlayers = function(bool, item) {
        if (bool) {
            // add item
            $scope.selected_players.push(item);
        }
        else {
            // remove item
            if (_.contains($scope.selected_players, item)) {
                $scope.selected_players = _.without($scope.selected_players, item);
            }
        }
    };

});


app.filter('bySelectedGames', function() {
    return function(players, selected_games) {
        return _.filter(players, function(player) {
            return _.contains(selected_games, player.game);
        });
    };
});

app.filter('bySelectedPlayers', function() {
    return function(players, selected_players) {
        return _.filter(players, function(player) {
            return _.contains(selected_players, player.name)
        });
    };
});

$(document).ready(function() {
    $(".button-collapse").sideNav();
})