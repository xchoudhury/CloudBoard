// sidebar controller, contains all functions to be called from sidebar panel
app.controller('sidebar', ['$scope', '$http', '$rootScope', 'loginService', function($scope, $http, $rootScope, loginService) {
    $scope.sidebarVisible = false;
  
    // Show sidebar panel on click
    $scope.toggle = function() {
      if (!$scope.sidebarVisible) {
        if ($('#dimmer').is(":visible")) {
          // Do not show sidebar if dimmer is visibile
          return;
        }
        $scope.sidebarVisible = true;
        $('.sidebarPanel').show();
        $('.sidebarPanel').width("200px");
      }
      else {
        $scope.sidebarVisible = false;
        $('.sidebarPanel').width("0");
        setTimeout(function () {
          $('.sidebarPanel').hide();
        }, 200);
      }
      $('#dimmer').toggle();
    };
  
    $scope.logOut = function() {
      $http({
        method: 'POST',
        url: '/api-auth/logout/'
      }).then(function successCallback() {
        console.log('logout successful');
      }, function errorCallback(response) {
        console.log(response);
        alertError('Error: Could not log out. Response status ' + response.status + '.');
      });
      $scope.toggle();
      $('#dimmer').show();
      loginService.logOut();
    };

    $scope.goToFAQ = function() {
      $rootScope.view = 'faq';
      $scope.toggle();
    };
    
    $scope.goToAccount = function() {
      $rootScope.view = 'account';
      $scope.toggle();
    };
  }]);
