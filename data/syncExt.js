import SyncData from 'rocket_sidekick_common/data/sync.js';

class SyncExtData extends SyncData {
	constructor() {
		super();

		this.description = null;
		this.name = null;
		this.searchName = null;
	}
}

export default SyncExtData;
