import pkg from 'decimal.js-light';
const { Decimal } = pkg;

import LibraryCommonUtility from '@thzero/library_common/utility';

class AppCommonUtility {
	static clean(value, places) {
		if (LibraryUtility.isNull(value))
			return null;
		if (value === '')
			return null;
		value = String.trim(value);
		return LibraryCommonUtility.toFixed(Utility.init(value), places);
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

export default AppCommonUtility;
