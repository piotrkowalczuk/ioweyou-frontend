'use strict';

describe('Service: user/User', function () {

  // load the service's module
  beforeEach(module('ioweyouApp'));

  // instantiate service
  var user/User;
  beforeEach(inject(function (_user/User_) {
    user/User = _user/User_;
  }));

  it('should do something', function () {
    expect(!!user/User).toBe(true);
  });

});
