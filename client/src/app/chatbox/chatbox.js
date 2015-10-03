angular.module('funChat.chatbox', ['ui.router']).config(function config($stateProvider) {
	$stateProvider.state('chatbox', {
		url : '/chatbox',
		views : {
			"main" : {
				controller : 'chatboxCtrl',
				templateUrl : 'chatbox/chatbox.tpl.html'
			}
		},
		data : {
			pageTitle : 'Chat'
		}
	});
}).controller('chatboxCtrl', function chatboxCtrl($scope, $rootScope) {
	
	console.log("chatbox");

	var host = location.origin.replace(/^http/, 'ws')
    var ws = new WebSocket(host);
    ws.onopen = function(){
    	ws.send("requestForPartner");	
    };
    
});
