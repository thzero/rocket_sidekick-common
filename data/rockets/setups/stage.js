import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import LibraryCommonUtility from '@thzero/library_common/utility/index.js';

import RocketStepStageMotor from 'rocket_sidekick_common/data/rockets/setups/motor.js';

class RocketSetupStage {
	constructor() {
		this.id = LibraryCommonUtility.generateId();
		this.rocketStageId = null;
		this.altimeters = [],
		this.chuteProtectors = [],
		this.chuteReleases = [],
		this.cg = null;
		this.cgFrom = AppCommonConstants.Rocketry.Direction.Tip;
		this.cgMeasurementUnitId = null;
		this.cgMeasurementUnitsId = null;
		this.deploymentBags = [],
		this.enabled = true;
		this.index = null;
		this.motors = [
			new RocketStepStageMotor(0),
			new RocketStepStageMotor(1),
			new RocketStepStageMotor(2),
		];
		this.notes = null;
		this.parachutes = [],
		this.streamers = [],
		this.trackers = [],
		this.weight = null;
		this.weightMeasurementUnitId = null;
		this.weightMeasurementUnitsId = null;
	}
}

export default RocketSetupStage;
