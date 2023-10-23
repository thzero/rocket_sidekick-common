import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';

class Launch extends SyncExtData {
	constructor() {
		super();

		this.description = null;
		this.name = null;
		this.failureReasons = null;
		this.locationId = null;
		this.locationIterationId = null;
		this.rocketId = null;
		this.result = null;
		this.success = null;
	}
}

export default Launch;