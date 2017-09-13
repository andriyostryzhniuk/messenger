'use strict';

angular.module('people', []);

angular.
module('people').
component('people', {
    templateUrl: '/people/people.template.html',
    controller: ['$http', '$scope',
        function PeopleController($http, $scope) {

            $http.get('/people').then(function(response) {
                $scope.people = response.data;
            });

        }
    ]
});