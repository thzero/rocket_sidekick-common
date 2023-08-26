import AppData from 'rocket_sidekick_common/data/index.js';

class SyncData extends AppData {
	constructor() {
		super();

		this.ownerId = false;
		this.syncTimestamp = null;
	}
}

export default SyncData;
