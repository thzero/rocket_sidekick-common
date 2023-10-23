import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';

class Launch extends SyncExtData {
	constructor() {
		super();

		this.description = null;
		this.name = null;
		this.locationId = null;
		this.locationIterationId = null;
		this.rocketId = null;
		this.launchResults = null;
	}
}

export default Launch;