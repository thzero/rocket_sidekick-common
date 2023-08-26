import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';

class RocketSetup extends SyncExtData {
	constructor() {
		super();

		this.notes = null;
		this.rocketId = null;
		this.stages = [ ];
		this.typeId = AppCommonConstants.Rocketry.RocketTypes.highone;
	}
}

export default RocketSetup;
