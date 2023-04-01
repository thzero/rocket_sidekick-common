import Utility from '@thzero/library_common/utility/index.js';

import AppCommonConstants from 'rocket_sidekick_common/constants.js';

class ChecklistStep {
	constructor() {
		this.checklistId = null;
		this.parentId = null;
		this.typeId = AppCommonConstants.Checklists.ChecklistStepTypes.text;
		this.altimeterRecoveryTypeId = null;
		this.altimeterTypeId = null;
		this.chuteRelease = false;
		this.completedDateTime = Utility.getTimestamp();
		this.description = null;
		this.isDefault = false;
		this.motorLocationTypeId = null;
		this.order = 0;
		this.trail = [];
		this.rootName = null;
		this.stage = null;
		this.statusId = AppCommonConstants.Checklists.ChecklistStatus.none;
		this.steps = new Map();
	}
}

export default ChecklistStep;
