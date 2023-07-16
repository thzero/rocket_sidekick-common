import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import SyncData from 'rocket_sidekick_common/data/sync.js';

class Rocket extends SyncData {
	constructor() {
		super();

		this.typeId = null;
		this.description = null;
		this.diameter = null;
		this.length = null;
		this.name = null;
		this.ownerId = null;
		// this.showDetails = false;
		this.typeId = AppCommonConstants.Rocketry.RocketTypes.high;
		this.weight = null;
	}
}

export default Rocket;
