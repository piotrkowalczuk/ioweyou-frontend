'use strict';

describe('Controller: EntryCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('ioweyouApp'));

  var EntryCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntryCreateCtrl = $controller('EntryCreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
