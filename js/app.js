var app = angular.module('VampireApp', ['ngMaterial', 'ngRoute']);

app.config(function($routeProvider, $mdThemingProvider){
    $routeProvider.when("/", {
        templateUrl: "js/characterSheet/characterSheet.template.html",
        controller: "characterSheetController"
    });

    $mdThemingProvider.theme('default').dark().accentPalette("deep-purple");
});