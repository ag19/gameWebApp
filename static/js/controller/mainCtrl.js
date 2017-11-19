app.controller('mainCtrl', ['$scope', '$window', '$document', function($scope, $window, $document) {
    $scope.message = "Home page text";

    $scope.singleModel = 1;
    $scope.myInterval = 5000;
    $scope.active = 0;
    var left1 = 0;
    var left2 = 0;
    var left3 = 0;
    //    var slides = $scope.slides = [];

    $scope.planSelectionButton = "Select a Plan";
    $scope.durationSelectionButton = "Duration";

    $scope.planChange = function(name){
        $scope.planSelectionButton = name;
    };

    $scope.durationChange = function(name){
        $scope.durationSelectionButton = name;
    };

    $scope.subscriptionPlans = [ {name: 'Noobie' , numGames : 1, dvdRent : 30, consoleRent : 'NA' , subsChargeMonth : 295, subsChargeQuarter : 500, subsChargeHalfYear : 600, subsChargeYear : 1000 },
    {name: 'Rookie', numGames : 2, dvdRent : 40, consoleRent : 'NA' , subsChargeMonth : 295, subsChargeQuarter : 500, subsChargeHalfYear : 600, subsChargeYear : 1000 },
    {name: 'Expert', numGames : 3, dvdRent : 50, consoleRent : 'NA' , subsChargeMonth : 295, subsChargeQuarter : 500, subsChargeHalfYear : 600, subsChargeYear : 1000 },
    {name: 'ADv', numGames : 1, dvdRent : 30, consoleRent : 195, subsChargeMonth : 695, subsChargeQuarter : 500, subsChargeHalfYear : 600, subsChargeYear : 1000 },
    {name: 'Ajnsklnsl', numGames : 2, dvdRent : 40, consoleRent : 195, subsChargeMonth : 695, subsChargeQuarter : 500, subsChargeHalfYear : 600, subsChargeYear : 1000 },
    {name: 'Isakbdkbi', numGames : 3, dvdRent : 50, consoleRent : 195 , subsChargeMonth : 695, subsChargeQuarter : 500, subsChargeHalfYear : 600, subsChargeYear : 1000 },
    ];

    $scope.subscriptionPlanDuration = [{duration: 'Monthly'},
    {duration: 'Quarterly'},
    {duration: 'Half Yearly'},
    {duration: 'Yearly'} ];
    // $scope.subscriptionGrid = { 
    //     data: 'subscriptionplans',
    //     jqueryUITheme: true
    // };
    $scope.slides = [{
            image: 'static/images/img3.jpeg'
        },
        {
            image: 'static/images/img2.jpeg'
        },
        {
            image: 'static/images/img1.jpeg'
        },
        {
            image: 'static/images/img4.jpeg'
        }
    ];

    $scope.plusDivs1 = function(index) {
        // $window.alert('at index ' + index);
        if(left1 + index >=0)
            left1 += index;
        // console.log($("#card-wrapper"));
    }

    $scope.calcLeft1 = function() {
        return left1 * 300;
    } 
    $scope.plusDivs2 = function(index) {
        // $window.alert('at index ' + index);
        if(left2 + index >=0)
        left2 += index;
        // console.log($("#card-wrapper"));
    }

    $scope.calcLeft2 = function() {
        return left2 * 300;
    } 
    $scope.plusDivs3 = function(index) {
        // $window.alert('at index ' + index);
        if(left3 + index >=0)
        left3 += index;
        // console.log($("#card-wrapper"));
    }

    $scope.calcLeft3 = function() {
        return left3 * 300;
    }

}]);