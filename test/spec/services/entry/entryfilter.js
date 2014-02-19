'use strict';

describe('Service: entry/EntryFilter', function () {

  // load the service's module
  beforeEach(module('ioweyouApp'));

  // instantiate service
  var entry/EntryFilter;
  beforeEach(inject(function (_entry/EntryFilter_) {
    entry/EntryFilter = _entry/EntryFilter_;
  }));

  it('should do something', function () {
    expect(!!entry/EntryFilter).toBe(true);
  });

});
