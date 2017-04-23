app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './static/templates/home.html',
            controller: 'mainCtrl',
            //css: './css/home.css'
        })

});
