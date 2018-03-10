(function(){
    var restaurant;
    var app = angular.module('app', [ "firebase", 'ngRoute', 'ngAnimate']);
    app.controller('AppController', function($firebaseObject){
        this.id = getUrlParameter('id');
        var ref = firebase.database().ref('/shops/' + this.id);
        this.data = $firebaseObject(ref);
        restaurant = this.data;
    });

    app.config(function($routeProvider){
        $routeProvider
                     .when('/', {
                        templateUrl: '/home.html',
                        controller: 'AppController',
                        controllerAs: 'app'
                     })
                     .when('/menu/', {
                        templateUrl: '/menu.html',
                        controller: 'MenuController',
                        controllerAs: 'menu'
                     })
    });

    app.controller('MainController', function() {
    });

    app.controller('MenuController', function($firebaseObject){
    })

    
    
    function getUrlParameter(param, dummyPath) {
        var sPageURL = dummyPath || window.location.search.substring(1),
            sURLVariables = sPageURL.split(/[&||?]/),
            res;

        for (var i = 0; i < sURLVariables.length; i += 1) {
            var paramName = sURLVariables[i],
                sParameterName = (paramName || '').split('=');

            if (sParameterName[0] === param) {
                res = sParameterName[1];
            }
        }

        return res;
}

})()