app.controller('mainCtrl', ['$scope', function ($scope) {
    $scope.message = "Home page text";

    $scope.singleModel = 1;
    $scope.myInterval = 5000;
    $scope.active = 0;
    //    var slides = $scope.slides = [];

    $scope.slides = [
        {
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
            image:'http://www.dtxgames.com/wp-content/uploads/2016/11/2389681-assassins-creed-4-black-flag-hd-wallpaper1.jpg'  
        }
  ];


}]);
