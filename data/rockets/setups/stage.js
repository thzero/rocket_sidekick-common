import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import LibraryCommonUtility from '@thzero/library_common/utility/index.js';

class RocketSetupStage {
	constructor() {
		this.id = LibraryCommonUtility.generateId();
		this.rocketSetupId = null;
		this.altimeters = [],
		this.chuteProtectors = [],
		this.chuteReleases = [],
		this.cg = null;
		this.cgFrom = AppCommonConstants.Rocketry.Direction.Tip;
		this.cgMeasurementUnitId = null;
		this.cgMeasurementUnitsId = null;
		this.deploymentBags = [],
		this.description = null;
		this.name = null;
		this.notes = null;
		this.parachutes = [],
		this.streamers = [],
		this.trackers = [],
		this.weight = null;
		this.weightMeasurementUnitId = null;
		this.weightMeasurementUnitsId = null;
	}
}

export default RocketStage;
