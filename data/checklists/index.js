import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import SyncData from 'rocket_sidekick_common/data/sync.js';

class Checklist extends SyncData {
	constructor() {
		super();

		this.typeId = null;
		this.description = null;
		this.isDefault = false;
		this.launchTypeId = AppCommonConstants.Rocketry.RocketTypes.all;
		this.name = null;
		this.rocketAttachable = false;
		this.rocketId = null;
		this.rocketSetupId = null;
		this.showDetails = false;
		this.statusId = AppCommonConstants.Checklists.ChecklistStatus.none;
		this.name = null;
		this.steps = new Map();
	}
}

export default Checklist;
