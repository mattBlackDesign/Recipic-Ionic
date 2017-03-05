angular.module('ionicApp')

.controller('ViewCtrl', function($scope, $http, $stateParams, $localstorage, $eventmanager, $ionicpopup)
{
    $scope.showForm = true;

    $scope.doLike = function()
    {
        if(!$scope.isLogined())
        {
            $ionicpopup.alert('로그인이 필요합니다.');
            return;
        }

        $ionicpopup.alert('Like!');
    };

    $scope.registerBookmark = function ()
    {
        if(!$scope.isLogined())
        {
            $ionicpopup.alert('로그인이 필요합니다.');
            return;
        }

        $ionicpopup.alert('Bookmark!');
    };
})