import LibraryCommonUtility from '@thzero/library_common/utility/index.js';

class LocationAddress {
	constructor() {
		this.id = LibraryCommonUtility.generateId();
		this.city = null;
		this.stateProvince = null;
		this.postalCode = null;
	}
}

export default LocationAddress;
