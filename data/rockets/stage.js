import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import LibraryCommonUtility from '@thzero/library_common/utility/index.js';

import RocketStageMotor from 'rocket_sidekick_common/data/rockets/motor.js';

class RocketStage {
	constructor(index) {
		this.id = LibraryCommonUtility.generateId();
		this.altimeters = [],
		this.chuteProtectors = [],
		this.chuteReleases = [],
		// this.cg = null;
		// this.cgFrom = AppCommonConstants.Rocketry.Direction.Tip;
		// this.cgMeasurementUnitId = null;
		// this.cgMeasurementUnitsId = null;
		this.cp = null;
		this.cpFrom = AppCommonConstants.Rocketry.Direction.Tip;
		this.cpMeasurementUnitId = null;
		this.cpMeasurementUnitsId = null;
		this.deploymentBags = [],
		this.description = null;
		this.diameterMajor = null;
		this.diameterMajorMeasurementUnitId = null;
		this.diameterMajorMeasurementUnitsId = null;
		this.diameterMinor = null;
		this.diameterMinorMeasurementUnitId = null;
		this.diameterMinorMeasurementUnitsId = null;
		this.index = index;
		this.length = null;
		this.lengthMeasurementUnitId = null;
		this.lengthMeasurementUnitsId = null;
		this.manufacturerId = null;
		this.manufacturerStockId = null;
		this.motors = [
			new RocketStageMotor(0, 1),
			new RocketStageMotor(1, null),
			new RocketStageMotor(2, null),
		];
		// this.name = null;
		this.notes = null;
		this.parachutes = [],
		this.primary = null;
		this.streamers = [],
		this.trackers = [],
		this.weight = null;
		this.weightMeasurementUnitId = null;
		this.weightMeasurementUnitsId = null;
	}
}

export default RocketStage;
