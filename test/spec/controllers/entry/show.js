'use strict';

describe('Controller: EntryShowCtrl', function () {

  // load the controller's module
  beforeEach(module('ioweyouApp'));

  var EntryShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntryShowCtrl = $controller('EntryShowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
