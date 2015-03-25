/**
 @toc
 1. setup - whitelist, appPath, html5Mode
 */

'use strict';

var sicDemo = angular.module('sicDemo', [
    'ngRoute', 'ngSanitize', 'ngTouch', 'ngAnimate',		//additional angular modules
    'Akoten.sharingiscaring', 'hljs'
]).
    config(['$routeProvider', '$locationProvider', '$compileProvider', 'hljsServiceProvider', 'sicFacebookProvider',
        function ($routeProvider, $locationProvider, $compileProvider, hljsServiceProvider, sicFacebookProvider) {
            sicFacebookProvider.setAppId("1386012865053865");
            /**
             setup - whitelist, appPath, html5Mode
             @toc 1.
             */
            hljsServiceProvider.setOptions({useBR: false});
            // var staticPath ='/';
            var staticPath;
            // staticPath ='/angular-directives/sharingiscaring/';		//local
            //staticPath ='/';		//nodejs (local)
            staticPath = '/sharingiscaring/';		//gh-pages
            var appPathRoute = '/';
            var pagesPath = staticPath + 'pages/';
            $routeProvider.when(appPathRoute + 'home', {templateUrl: pagesPath + 'home/home.html'})
                .when(appPathRoute + 'facebook', {templateUrl: pagesPath + 'facebook/facebook.html'});
            $routeProvider.otherwise({redirectTo: appPathRoute + 'home'});

        }]);