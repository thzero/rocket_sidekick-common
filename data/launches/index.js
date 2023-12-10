import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';

class Launch extends SyncExtData {
	constructor() {
		super();

		this.albumUrl = null;
		this.date = null;
		this.description = null;
		this.failureReasons = null;
		this.locationId = null;
		this.locationIterationId = null;
		this.name = null;
		this.public = false;
		this.results = null;
		this.rocketId = null;
		this.success = null;
		this.temperature = null;
		this.videoUrl = null;
		this.windSpeed = null;
	}
}

export default Launch;