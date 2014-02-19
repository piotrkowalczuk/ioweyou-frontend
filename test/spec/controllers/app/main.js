'use strict';

describe('Controller: AppMainCtrl', function () {

  // load the controller's module
  beforeEach(module('ioweyouApp'));

  var AppMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppMainCtrl = $controller('AppMainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
