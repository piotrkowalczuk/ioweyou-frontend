'use strict';

describe('Service: user/UserFactory', function () {

  // load the service's module
  beforeEach(module('ioweyouApp'));

  // instantiate service
  var user/UserFactory;
  beforeEach(inject(function (_user/UserFactory_) {
    user/UserFactory = _user/UserFactory_;
  }));

  it('should do something', function () {
    expect(!!user/UserFactory).toBe(true);
  });

});
