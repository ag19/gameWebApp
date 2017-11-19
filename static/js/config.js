app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './static/templates/home.html',
            controller: 'mainCtrl',
            css: './static/css/home.css'
        })
    // $stateProvider
    // 	.state('home',{
    // 		url: '/subscription',
    // 		templateUrl: './static/templates/subscription.html',
    // 		controller: 'mainCtrl',
    // 		css: './static/css/subscription.css'
    // 	})    

});
