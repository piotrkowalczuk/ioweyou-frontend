'use strict';

describe('Controller: AuthMainCtrl', function () {

  // load the controller's module
  beforeEach(module('ioweyouApp'));

  var AuthMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthMainCtrl = $controller('AuthMainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
