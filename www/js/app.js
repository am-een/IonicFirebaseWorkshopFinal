// Ionic Starter App
var fbRef = new Firebase('https://moviesdevcamp.firebaseio.com/');
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('MoviesApp', ['ionic','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider
      .state('signin',{
        url:'/signin',
        templateUrl:'views/signin.html',
        controller:'SigninCtrl'
      })
      .state('signup',{
        url:'/signup',
        templateUrl:'views/signup.html',
        controller:'SignupCtrl'
      })
      .state('mymovies',{
        url:'/mymovies',
        templateUrl:'views/mymovies.html',
        controller:'MoviesCtrl'
      });
  $urlRouterProvider.otherwise('signin');
})



.controller('SigninCtrl',function ($scope,$firebaseAuth,$state) {
  $scope.u = {};
  $scope.signin = function () {
<<<<<<< HEAD
    $firebaseAuth(fbRef).$authWithPassword({
      email:$scope.u.email,
      password:$scope.u.password
    }).then(function (authData) {
      $scope.u = {};
      $state.go('mymovies');
    }).catch(function (error) {
      alert("Error: "+error.message);
    })
=======
    //TODO: sign in
>>>>>>> 29f16ed4bc83a05022f15c46914a3eed63212dd2
  }
})

.controller('SignupCtrl',function ($scope,$firebaseAuth,$state) {
  $scope.u = {};
  $scope.signup = function () {
<<<<<<< HEAD
    $firebaseAuth(fbRef).$createUser({
      email:$scope.u.email,
      password:$scope.u.password
    }).then(function (authData) {
      $scope.u = {};
      $state.go('signin');
    }).catch(function (error) {
      alert("Error: "+error.message);
    })
=======
    //TODO: signup
>>>>>>> 29f16ed4bc83a05022f15c46914a3eed63212dd2
  }
})

.controller('MoviesCtrl',function ($scope,$ionicModal,$firebaseArray,$firebaseAuth,$state) {

<<<<<<< HEAD
  $ionicModal.fromTemplateUrl('views/add.html',{
    scope:$scope,
    animation:'slide-in-up'
  }).then(function (modal) {
    $scope.addModal = modal;
  });
  $ionicModal.fromTemplateUrl('views/edit.html',{
    scope:$scope,
    animation:'slide-in-up'
  }).then(function (modal) {
    $scope.editModal = modal;
  })


  $scope.movies = $firebaseArray(fbRef.child('movies'));
  $scope.m = {};
=======
  //TODO: Create AddModal and Edit Modal

  $scope.movies = [
    {
      "description" : "He made it! Leo got his Oscar!",
      "name" : "The revenant",
      "state" : 1,
      "uid":"776c30bc-05d5-47d5-bc6c-2f53c69c39c9",
      "year" : 2015
    },{
      "description" : "Justice has a new Face!",
      "name" : "Deadpool",
      "state" : 0,
      "uid":"776c30bc-05d5-47d5-bc6c-2f53c69c39c9",
      "year" : 2016
    }
  ];

  $scope.m = {};

>>>>>>> 29f16ed4bc83a05022f15c46914a3eed63212dd2
  $scope.getAuth = function () {
    return $firebaseAuth(fbRef).$getAuth().uid;
  }
  $scope.add = function () {
<<<<<<< HEAD
    //State: 0 - Waiting ~ 1 - Done
    $scope.m.state = 0;
    $scope.m.uid = $scope.getAuth();
    $scope.movies.$add($scope.m).then(function (ref) {
      $scope.addModal.hide();
      $scope.m = {};
    })
  }
  $scope.delete = function (movie) {
    $scope.movies.$remove(movie);
=======
    //TODO: State: 0 - Waiting ~ 1 - Done
  //TODO: insert movie in database
  }
  $scope.delete = function (movie) {
    //TODO: remove movie
>>>>>>> 29f16ed4bc83a05022f15c46914a3eed63212dd2
  }
  $scope.openEdit = function (movie) {
    $scope.m = movie;
    $scope.editModal.show();
  }
  $scope.edit = function () {
<<<<<<< HEAD
    $scope.movies.$save($scope.m);
    $scope.editModal.hide();
    $scope.m = {};
=======
    //TODO: edit movie
>>>>>>> 29f16ed4bc83a05022f15c46914a3eed63212dd2
  }
  $scope.changeState = function (movie) {
    if(movie.state === 0){
      movie.state = 1;
<<<<<<< HEAD
      $scope.movies.$save(movie);
    }else{
      movie.state = 0;
      $scope.movies.$save(movie);
    }
=======
    }else{
      movie.state = 0;
    }
    //TODO: update movie in DB
>>>>>>> 29f16ed4bc83a05022f15c46914a3eed63212dd2
  }
  $scope.logout = function () {
    $firebaseAuth(fbRef).$unauth();
    $state.go('signin');
  }
})
