'use strict';

describe('Controller: AppNavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('ioweyouApp'));

  var AppNavbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppNavbarCtrl = $controller('AppNavbarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
