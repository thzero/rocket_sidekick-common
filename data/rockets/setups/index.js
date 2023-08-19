import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import SyncData from 'rocket_sidekick_common/data/sync.js';
import RocketStage from 'rocket_sidekick_common/data/rockets/stages.js';

class RocketSetup extends SyncData {
	constructor() {
		super();

		const stage = new RocketStage();

		this.rocketId = null;
		this.description = null;
		this.name = null;
		this.notes = null;
		this.ownerId = null;
		this.stages = [ stage ];
		this.typeId = AppCommonConstants.Rocketry.RocketTypes.highone;
	}
}

export default Rocket;
