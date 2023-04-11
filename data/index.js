import Data from '@thzero/library_common/data/index.js';

class AppData extends Data {
	constructor() {
		super();

		this.deleted = false;
		this.deletedTimestamp = null;
		this.deletedUserId = null;
	}
}

export default AppData;
