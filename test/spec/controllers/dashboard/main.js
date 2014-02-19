'use strict';

describe('Controller: DashboardMainCtrl', function () {

  // load the controller's module
  beforeEach(module('ioweyouApp'));

  var DashboardMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardMainCtrl = $controller('DashboardMainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
