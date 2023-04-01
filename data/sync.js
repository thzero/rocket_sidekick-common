import Utility from '@thzero/library_common/utility/index.js';

import AppData from 'rocket_sidekick_common/data/index.js';

class SyncData extends AppData {
	constructor() {
		super();

		this.syncTimestamp = Utility.getTimestamp();
	}
}

export default SyncData;
