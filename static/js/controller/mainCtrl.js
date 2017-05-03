app.controller('mainCtrl', ['$scope', '$window', '$document', function($scope, $window, $document) {
    $scope.message = "Home page text";

    $scope.singleModel = 1;
    $scope.myInterval = 5000;
    $scope.active = 0;
    var left1 = 0;
    var left2 = 0;
    var left3 = 0;
    //    var slides = $scope.slides = [];

    $scope.slides = [{
            image: 'https://images7.alphacoders.com/386/386016.png'
        },
        {
            image: 'https://s.candybanana.com/images/0b17/forza_horizon_2_55.jpg'
        },
        {
            image: 'https://media.playstation.com/is/image/SCEA/prey-listing-thumb-01-ps4-us-14jun16?$Icon$'
        },
        {
            image: 'https://media.playstation.com/is/image/SCEA/fifa-17-standard-edition-two-column-01-ps4-us-03jun16?$MediaCarousel_Original$'
        },
        {
            image: 'http://www.dtxgames.com/wp-content/uploads/2016/11/2389681-assassins-creed-4-black-flag-hd-wallpaper1.jpg'
        }
    ];

    $scope.plusDivs1 = function(index) {
        // $window.alert('at index ' + index);
        left1 += index;
        // console.log($("#card-wrapper"));
    }

    $scope.calcLeft1 = function() {
        return left1 * 300;
    } 
    $scope.plusDivs2 = function(index) {
        // $window.alert('at index ' + index);
        left2 += index;
        // console.log($("#card-wrapper"));
    }

    $scope.calcLeft2 = function() {
        return left2 * 300;
    } 
    $scope.plusDivs3 = function(index) {
        // $window.alert('at index ' + index);
        left3 += index;
        // console.log($("#card-wrapper"));
    }

    $scope.calcLeft3 = function() {
        return left3 * 300;
    }

}]);