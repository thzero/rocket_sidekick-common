import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';

class Checklist extends SyncExtData {
	constructor() {
		super();

		this.typeId = null;
		this.isDefault = false;
		this.launchTypeId = AppCommonConstants.Rocketry.RocketTypes.all;
		// this.rocketAttachable = false;
		this.rocketId = null;
		this.rocketSetupId = null;
		// this.showDetails = false;
		this.statusId = AppCommonConstants.Checklists.ChecklistStatus.none;
		this.steps = [];
	}
}

export default Checklist;
