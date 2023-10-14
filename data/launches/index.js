import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';

class Launch extends SyncExtData {
	constructor() {
		super();

		this.description = null;
		this.name = null;
		this.LaunchResults = null;
		this.locationId = null;
		this.locationIterationId = null;
		this.rocketId = null;
		this.success = null;
		this.successReaons = null;
	}
}

export default Launch;