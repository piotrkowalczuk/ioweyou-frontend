'use strict';

describe('Service: entry/Entry', function () {

  // load the service's module
  beforeEach(module('ioweyouApp'));

  // instantiate service
  var entry/Entry;
  beforeEach(inject(function (_entry/Entry_) {
    entry/Entry = _entry/Entry_;
  }));

  it('should do something', function () {
    expect(!!entry/Entry).toBe(true);
  });

});
