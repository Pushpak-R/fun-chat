angular.module( 'funChat', [
  'templates-app',
  'templates-common',
  'funChat.home',
  'funChat.chatbox',
  'ui.router',
  'ngResource',
  'ngSanitize'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ($rootScope) {
	//$rootScope.socket = io.connect("http://0.0.0.0:3000");
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | funChat' ;
    }
  });
});

