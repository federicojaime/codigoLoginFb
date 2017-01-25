angular.module('starter.controllers', ['ionic.cloud'])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
  })

  .controller('loginCtrl', function ($scope, $ionicAuth, $ionicUser, $ionicFacebookAuth) {

    $scope.login = function () {
      $ionicAuth.login('facebook') .then(function () {
        alert("GOOD");
        $scope.userData = $ionicUser.social.facebook.data.full_name;
        $location.path('/app/profile');
      }, function (fail) {
        alert("FAIL: " + fail);
        $scope.userData = $ionicUser.social.facebook.data;
        $location.path('/app/profile');
      }
      );

     /** $ionicFacebookAuth.login()
      .then(function () {
        alert("GOOD");
        $scope.userData = $ionicUser.social.facebook.data.full_name;
        $location.path('/app/profile');
      }, function (fail) {
        alert("FAIL: " + fail);
        $scope.userData = $ionicUser.social.facebook.data;
        $location.path('/app/profile');
      }
      );**/
      alert($scope.userData);
    }
    $ionicFacebookAuth.logout();

    /**$scope.login = function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.8&appId=1799558416971078";
        fjs.parentNode.insertBefore(js, fjs);
        console.log("d es " + d, '\n' + " s es " + s, "\n id es " +  id ,  "\n js es " +  js,  "\n fjs es " +  fjs )
      } (document, 'script', 'facebook-jssdk');
  **/
  });
