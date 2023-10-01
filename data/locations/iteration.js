import LibraryCommonUtility from '@thzero/library_common/utility/index.js';

import LocationAddress from './address.js';

class LocationIteration extends LocationAddress {
	constructor() {
		this.id = LibraryCommonUtility.generateId();
		this.name = null;
		this.experimental = false;
		this.organizations = [];
		this.year = null;
	}
}

export default LocationIteration;
