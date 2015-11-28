angular.module('noterious')
  .directive('simpleBoard', function() {
    var linker = function(scope, element, attr) {
      $(element).hover(function() {
        scope.holla('hi!');
        $(this).css('opacity', 0.5);
      }, function() {
        scope.holla('hi back!');
        $(this).css('opacity', 1);
      });
    };

    var controller = function($scope) {
      $scope.holla = function(message) {
        console.log(message);
      };
    };

    return {
      templateUrl: 'app/boards/board-simple.tmpl.html',
      link: linker,
      controller: controller
    };
  });