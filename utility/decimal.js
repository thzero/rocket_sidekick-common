import pkg from 'decimal.js-light';
const { Decimal } = pkg;

import LibraryUtility from '@thzero/library_common/utility';

class Utility {
	static clean(value, places) {
		if (LibraryUtility.isNull(value))
			return null;
		if (value === '')
			return null;
		value = String.trim(value);
		return Utility.toFixed(Utility.init(value), places);
	}

	static init(value) {
		return new Decimal(value);
	}

	static toFixed(value, places) {
		if (!value)
			return 0;

		return value.toDecimalPlaces(places).toNumber();
	}
}

export default Utility;
