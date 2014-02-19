'use strict';

describe('Service: HttpResponseInterceptor', function () {

  // load the service's module
  beforeEach(module('ioweyouApp'));

  // instantiate service
  var HttpResponseInterceptor;
  beforeEach(inject(function (_HttpResponseInterceptor_) {
    HttpResponseInterceptor = _HttpResponseInterceptor_;
  }));

  it('should do something', function () {
    expect(!!HttpResponseInterceptor).toBe(true);
  });

});
