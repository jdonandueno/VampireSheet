angular.module("VampireApp").controller("characterSheetController", ["$scope", function($scope) {
    //initialization
    $scope.user = {
        Fuerza: 1,
        Destreza: 1,
        Resistencia: 1,
        Carisma: 1,
        Manipulacion: 1,
        Apariencia: 1,
        Percepcion: 1,
        Inteligencia: 1,
        Astucia: 1,
        Trasfondos: [{}],
        Disciplinas: [{}]
    };

    var trasfondos = ["Aliados",
        "Contactos",
        "Criados",
        "Fama",
        "Generación",
        "Influencia",
        "Mentor",
        "Posición",
        "Rebaño",
        "Recursos"
    ];

    var disciplinas = ["Animalismo",
        "Auspex",
        "Celeridad",
        "Dementación",
        "Dominación",
        "Extinción",
        "Fortaleza",
        "Bugrinabcua",
        "Obtenebración",
        "Ofuscación",
        "Potencia",
        "Prescencia",
        "Protean",
        "Quimerismo",
        "Serpentis",
        "Taumaturgia",
        "Vicisitud"
    ];


    $scope.trasfondosDisponibles = function(searchText) {
        return trasfondos.filter(function(item) {
            return item.toLowerCase().indexOf(searchText) >= 0;
        });
    };

    $scope.disciplinasDisponibles = function(searchText) {
        return disciplinas.filter(function(item) {
            return item.toLowerCase().indexOf(searchText) >= 0;
        });
    };

    $scope.selectTrasfondo = function(trasfondo, i) {
        if(!trasfondo){
            $scope.user.Trasfondos.splice(i, 1);
        } else {
            $scope.user.Trasfondos[i].valor = 1;
            $scope.user.Trasfondos.push({});
        }
    }; 

    $scope.selectDisciplina = function(disciplina, i) {
        if(!disciplina){
            $scope.user.Disciplinas.splice(i, 1);
        } else {
            $scope.user.Disciplinas[i].valor = 1;
            $scope.user.Disciplinas.push({});
        }
    };
}]);
