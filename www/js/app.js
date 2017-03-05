angular.module('ionicApp', [
    'ionic','ionic.service.core','ionic.service.push','ngCordova'
])

.config(['$ionicAppProvider', function($ionicAppProvider, $ionicConfigProvider) {
    // Identify app
    $ionicAppProvider.identify({
        // The App ID (from apps.ionic.io) for the server
        app_id: '4d685291',
        // The public API key all services will use for this app
        api_key: 'cd643d58a1e3fa600a7b7784a160f836c6a7e7b2ef32e3a4',
        // Set the app to use development pushes
        dev_push: false
    });
}])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.navBar.alignTitle('center')

    $stateProvider
        .state('tabs', {
            url: "/tab",
            templateUrl: "templates/tabs.html"
        })
        .state('tabs.home', {
            url: "/home",
            cache: false,
            views: {
                'home-tab': {
                    templateUrl: "templates/home.html"
                }
            }
        })
        .state('tabs.my', {
            url: "/my",
            cache: false,
            views: {
                'my-tab': {
                    templateUrl: "templates/my.html",
                }
            }
        })
        .state('tabs.my-list', {
            url: "/my-list",
            cache: false,
            views: {
                'person-tab' :{
                    templateUrl: "templates/my-list.html",
                    controller: "MyListCtrl"
                }
            }
        })
        .state('tabs.favorites', {
            url: "/favorites/:type",
            cache: false,
            views: {
                'favorites-tab' :{
                    templateUrl: "templates/favorites.html"
                }
            }
        })
        .state('tabs.home-detail', {
            url: "/home-detail/:index",
            cache: false,
            views: {
                'home-tab' :{
                    templateUrl: "templates/detail.html"
                }
            }
        })
        .state('tabs.my-detail', {
            url: "/my-detail/:index",
            cache: false,
            views: {
                'person-tab' :{
                    templateUrl: "templates/detail.html"
                }
            }
        })
        .state('tabs.bookmark-detail', {
            url: "/bookmark-detail/:index",
            cache: false,
            views: {
                'favorites-tab' :{
                    templateUrl: "templates/bookmark-detail.html"
                }
            }
        })
        .state('tabs.setting', {
            url: "/setting",
            cache: false,
            views: {
                'setting-tab': {
                    templateUrl: "templates/setting.html"
                }
            }
        });

    $urlRouterProvider.otherwise("/tab/home");
})



