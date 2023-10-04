import LibraryCommonUtility from '@thzero/library_common/utility/index.js';

class LocationIteration {
	constructor() {
		this.id = LibraryCommonUtility.generateId();
		this.address = {};
		this.name = null;
		this.experimental = false;
		this.organizations = [];
		this.year = null;
	}
}

export default LocationIteration;
