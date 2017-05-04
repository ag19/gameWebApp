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
        },
        {
            image: 'http://www.dtxgames.com/wp-content/uploads/2016/11/2389681-assassins-creed-4-black-flag-hd-wallpaper1.jpg'
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