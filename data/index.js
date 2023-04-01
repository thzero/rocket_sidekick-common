import Utility from '@thzero/library_common/utility/index.js';

import Data from '@thzero/library_common/data/index.js';

class AppData extends Data {
	constructor() {
		super();

		this.deleted = false;
		this.deletedTimestamp = Utility.getTimestamp();
		this.deletedUserId = null;
	}
}

export default AppData;
