'use strict';

/* Controllers */

function DocController($scope, $routeParams, $http, $route, $location, $anchorScroll, $window) {
	if ($routeParams.lang == '' || typeof($routeParams.lang) == 'undefined') {
		$routeParams.lang = 'en';
	}
	if (typeof($routeParams.part1) == 'undefined') {
		$routeParams.part1 = 'home.md';
	}

	var page = $routeParams.lang + '/' + $routeParams.part1;

	if (typeof($routeParams.part2) != 'undefined') {
		page += '/' + $routeParams.part2;
	}

	if (typeof($routeParams.part3) != 'undefined') {
		page += '/' + $routeParams.part3;
	}

	if (typeof($routeParams.part4) != 'undefined') {
		page += '/' + $routeParams.part4;
	}

	$http.get('docs/' + page).success(function (data) {
		$scope.pageContent = data;
	});
}

function MenuController($scope, $http, $route) {
	$http.get('docs/en/menu.md').success(function (data) {
		$scope.menu = data;
	});
}
