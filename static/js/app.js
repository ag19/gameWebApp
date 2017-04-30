var app = angular.module('gameApp', ['ui.router', 'ui.bootstrap', 'angularCSS']);

app.directive('header', function () {
    return {
        templateUrl: 'static/templates/layout/header.html',
        css: {
            href: 'static/css/header.css',
            preload: true
        }
    }
});
app.directive('footer', function () {
    return {
        templateUrl: 'static/templates/layout/footer.html',
        css: {
            href: 'static/css/footer.css',
            preload: true
        }
    }
});

