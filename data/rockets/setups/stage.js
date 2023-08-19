import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import LibraryCommonUtility from '@thzero/library_common/utility/index.js';

class RocketSetupStage {
	constructor() {
		this.id = LibraryCommonUtility.generateId();
		this.rocketSetupId = null;
		this.altimeters = [],
		this.cg = null;
		this.cgFrom = AppCommonConstants.Rocketry.Direction.Tip;
		this.cgMeasurementUnitId = null;
		this.cgMeasurementUnitsId = null;
		this.description = null;
		this.name = null;
		this.notes = null;
		this.recovery = [],
		this.trackers = [],
		this.weight = null;
		this.weightMeasurementUnitId = null;
		this.weightMeasurementUnitsId = null;
	}
}

export default RocketStage;
