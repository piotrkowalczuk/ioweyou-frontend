'use strict';

describe('Service: auth/Auth', function () {

  // load the service's module
  beforeEach(module('ioweyouApp'));

  // instantiate service
  var auth/Auth;
  beforeEach(inject(function (_auth/Auth_) {
    auth/Auth = _auth/Auth_;
  }));

  it('should do something', function () {
    expect(!!auth/Auth).toBe(true);
  });

});
