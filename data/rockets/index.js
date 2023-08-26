import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';
import RocketStage from 'rocket_sidekick_common/data/rockets/stage.js';

class Rocket extends SyncExtData {
	constructor() {
		super();

		const stage = new RocketStage();
		stage.primary = true;

		this.manufacturerId = null;
		this.manufacturerStockId = null;
		this.notes = null;
		this.stages = [ stage ];
		this.rocketTypes = [ AppCommonConstants.Rocketry.RocketTypes.highone ];
	}
}

export default Rocket;
