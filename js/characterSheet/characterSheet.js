angular.module("VampireApp").directive("characterSheet", function() {
    return {
        templateUrl: "/js/characterSheet/characterSheet.template.html",
        controller: "characterSheetController",
        restrict: "E"
    }
});