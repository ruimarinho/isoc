
# isoc

A list of country names (official short names in English) and codes as published by the ISO 3166-1 standard, including their corresponding numeric, alpha-2 and alpha-3 codes <sup>[2, 3, 4]</sup>.

## Status

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

## Installation

Install the package via `npm`:

```sh
npm install --save isoc
```

## Usage

```js
var countries = require('isoc');

// Exclude all but `officially-assigned` countries.
countries.filter(function(country) {
  return country.status === 'officially-assigned';
}).length;
// => 249
```

## Exceptions

The `status` property can be used to distinguish between *Officially Assigned* (`officially-assigned`), *Transitionally reserved* (`transitionally-reserved`) and *User-assigned* (`user-assigned`) code elements. Indeterminate reservations haven't been considered for now.

### Transitional reservations

Transitionally-reserved code elements are codes reserved after being deleted from ISO 3166-1. It is only possible to use them during a transitional period of at least five years, while new code elements that may have replaced them are taken into use. At the end of their expiration date, they may be reassigned <sup>[1]</sup>.

Currently, this list includes the following transitionally-reserved countries:

* Burma (reserved from 1989-12 to 2039-12)
* East Timor (reserved from 2002-05 to 2052-05)
* Netherlands Antilles (reserved from 2010-12 to 2060-12)
* Neutral Zone (reserved from 1993-07 to 2043-07)
* Serbia and Montenegro (reserved from 2006-09 to 2056-09)
* Yugoslavia (reserved from 2003-07 to 2053-07)
* Zaire (reserved from 1997-07 to 2047-07)

### User-assigned code elements

On ISO 3166-1:2013, clause 8.1.3 ("User-assigned code elements") reads:

   > If users need code elements to represent country names not included
    in this part of ISO 3166, the series of letters AA, QM to QZ, XA to
    XZ, and ZZ, and the series AAA to AAZ, QMA to QZZ, XAA to XZZ, and
    ZZA to ZZZ respectively and the series of numbers 900 to 999 are
    available.

While not strictly related to the purpose of identifying a country, user-assigned code elements can be used to temporarily represent a new country code. However, a new country can only enter the official ISO 3166-1 standard if it is registered in the *United Nations Terminology Bulletin Country Names* or in the *Country and Region Codes for Statistical Use of the UN Statistics Division* <sup>[3]</sup>.
For example, "XK" / "XKX" is being used by the European Commission, Switzerland, Deutsche Bundesbank, SWIFT and other organizations as a temporary country code for `Kosovo` <sup>[3]</sup>. It the only user-assigned code element included in this package.

## Tests

```sh
npm test
```

## Sources

1. [Country Codes - ISO 3166](http://www.iso.org/iso/home/standards/country_codes.htm)
1. [OpenKnowledge Data](http://data.okfn.org/data/core/country-list/r/data.json)
1. [Wikipedia](http://en.wikipedia.org/wiki/ISO_3166-1)
1. [Zuora](https://knowledgecenter.zuora.com/BC_Developers/SOAP_API/J_Country%2C_State%2C_and_Province_Codes/A_Country_Names_and_Their_ISO_Codes)

## License

MIT

[npm-image]: https://img.shields.io/npm/v/isoc.svg?style=flat-square
[npm-url]: https://npmjs.org/package/isoc
[travis-image]: https://img.shields.io/travis/seegno/isoc.svg?style=flat-square
[travis-url]: https://travis-ci.org/seegno/isoc

