'use strict';

/**
 * Dependencies.
 */

import countries from '../src/index';
import 'should';

/**
 * Test `Client`.
 */

describe('isoc', function() {
  it('should export a list of countries', () => {
    countries.should.be.an.array;

    countries.forEach(function(country) {
      country.should.have.properties('alpha2', 'alpha3', 'name', 'status')
    });
  });
});
