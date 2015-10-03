angular.module('templates-app', ['chatbox/chatbox.tpl.html', 'home/home.tpl.html']);

angular.module("chatbox/chatbox.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("chatbox/chatbox.tpl.html",
    "<div id=\"chatbox_cont\">\n" +
    "	<div id=\"chatbox\" ng-bind-html=\"conversation\"></div>\n" +
    "	<div id=\"userList_cont\">\n" +
    "		<ul id=\"list\" >\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		 <input type=\"text\" class=\"form-control\" ng-model=\"user.chat\" id=\"chat\"/>\n" +
    "		 <button id=\"sendBtn\" class=\"btn btn-primary\" ng-click=\"sendMsg()\">Send</button>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div id=\"login_cont\">\n" +
    "	<form name=\"loginForm\">\n" +
    "		<h4>Please enter nickname and get surprise!!!</h4>\n" +
    "		<hr />\n" +
    "		<br />\n" +
    "	  	<div class=\"form-group\">\n" +
    "		    <label for=\"name\">Nickname :</label>\n" +
    "		    <input type=\"text\" class=\"form-control\" ng-model=\"user.name\" id=\"name\" required>\n" +
    "	  	</div>\n" +
    "	  	<button class=\"btn btn-primary\" ng-click=\"registerUser()\" ng-disabled=\"loginForm.$invalid\">Surprise Me</button>\n" +
    "  </form>\n" +
    "</div>");
}]);
