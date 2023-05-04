  const module = angular.module("module", ["ngRoute"]);
  
// This controller is for the page to reload internally for the sake of the functions that needed to work on document.load
module.controller('myController', function($scope, $window) {
  $scope.refreshPage = function() {
    $window.location.reload();
  }
});

// This is for the controller that has a function for navigating to a div, with an id as the argument, on click
module.controller('myController', function($scope, $window) {
  $scope.scrollTo = function(id) {
    var element = document.querySelector(`#${id}`);
    window.scroll(0,element.getBoundingClientRect().top)
   
  };

});

// This is for passing page views
module.config(function($routeProvider) {
  $routeProvider
    .when('/gallery', {
      templateUrl: './gallery2.html',
      controller:"galleryCtrl"
    }).when("/",{
      templateUrl:"./home.html"
    }).when("/women",{
     templateUrl: "./E proj/women.html"
    }).when("/accessories",{
      templateUrl: "./Accessories/accessories.html"
    }).when("/men",{
      templateUrl: "./Men/men.html"
    }).when("/faq",{
      templateUrl: "./FAQ_page/index.html"
    })
});


// This controller is for frame1's image transition, I am populating the img tag from here too
module.controller("pictures", function ($scope, $interval) {
  const pictures = [
    // 'Pictures/louis.png',
    // 'Pictures/handbag.png',
    'Pictures/box3.png',
    'Pictures/bag.png',
    'Pictures/backpack.png',
    'Pictures/box2.png',
    'Pictures/duffel.png',
  ];
  $scope.pic_data = pictures.map(pic => pic.replace('.png', '.png'));

  $scope.currentPicIndex = 0;

  // Automatically advance to the next image every 3 seconds
  $interval(() => {
    $scope.currentPicIndex = ($scope.currentPicIndex + 1) % $scope.pic_data.length;
  }, 3000);
});


// This is for the slider in frame two
module.controller("slider", function($scope) {
  const slider = [
    'Pictures/box3.png',
    'Pictures/bag.png',
    'Pictures/backpack.png',
    'Pictures/box2.png',
    'Pictures/duffel.png',
  ];

  $scope.slider_data = slider.map(pic => pic.replace('.png', '.png'));
});


// This is for the slider in frame three
module.controller("slides", function($scope) {
  const slides = [
    'Pictures/A_bag.png',
    'Pictures/box_set.png',
    'Pictures/duffel.png',
    'Pictures/louis.png',
    'Pictures/tb.png',
    'Pictures/prada.png',
    'Pictures/totes.png',
    'Pictures/yeti.png',
  ];

  $scope.slides_data = slides.map(pic => pic.replace('.png', '.png'));


});

// this is a directive whose value is for the visit count, the value is stored in the local storage and updated from there
module.directive('myVisitCount', function() {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          var count = parseInt(localStorage.getItem('visit_count')) || 0;
          count++;
          localStorage.setItem('visit_count', count);
          element.text('Visits: ' + count);
      }
  };
});

//  This is for populating the gallery and other navs
// /It was done here so that all i have to do is to link other files to this main.js and use this controller without need of rewriting this code block over again
module.controller("galleryCtrl", function($scope, $http) {
  $http.get('./Bronx.json').then(function(response) {
    console.log(response)
    $scope.men_items = response.data.for_men;
    $scope.women_items = response.data.for_women;
    $scope.accessories = response.data.for_accessories;
  });
});

  