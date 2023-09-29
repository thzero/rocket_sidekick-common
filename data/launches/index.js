import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';

class Launch extends SyncExtData {
	constructor() {
		super();

		this.typeId = null;
		this.description = null;
		this.name = null;
		this.rocketId = null;
	}
}

export default Launch;