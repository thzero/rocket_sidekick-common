import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import LibraryCommonUtility from '@thzero/library_common/utility/index.js';

class ChecklistStep {
	constructor() {
		this.id = LibraryCommonUtility.generateId();
		this.checklistId = null;
		this.parentId = null;
		this.typeId = AppCommonConstants.Checklists.ChecklistStepTypes.text;
		this.altimeterRecoveryTypeId = null;
		this.altimeterTypeId = null;
		this.chuteRelease = false;
		this.completedDateTime = null;
		this.description = null;
		this.motorLocationTypeId = null;
		this.order = 0;
		this.trail = [];
		this.rootName = null;
		this.stage = null;
		this.statusId = AppCommonConstants.Checklists.ChecklistStatus.none;
		this.steps = [];
	}
}

export default ChecklistStep;
