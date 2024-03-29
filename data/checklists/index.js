import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';

class Checklist extends SyncExtData {
	constructor() {
		super();

		this.typeId = null;
		this.isDefault = false;
		this.isShared = false;
		this.isTemplate = false;
		// this.rocketAttachable = false;
		this.rocketId = null;
		this.rocketSetupId = null;
		this.rocketTypes = [ ];
		// this.showDetails = false;
		this.statusId = AppCommonConstants.Checklists.ChecklistStatus.none;
		this.steps = [];
	}
}

export default Checklist;
