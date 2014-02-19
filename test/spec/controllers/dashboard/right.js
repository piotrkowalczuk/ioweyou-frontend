'use strict';

describe('Controller: DashboardRightCtrl', function () {

  // load the controller's module
  beforeEach(module('ioweyouApp'));

  var DashboardRightCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardRightCtrl = $controller('DashboardRightCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
