var app = angular.module('gameApp', ['ui.router', 'angularCSS']);

app.directive('header', function() {
return {
    templateUrl: 'static/templates/layout/header.html',
    css: {
     href: 'static/css/header.css',
     preload: true
   }
}
});
