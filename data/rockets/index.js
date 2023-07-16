import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import SyncData from 'rocket_sidekick_common/data/sync.js';

class Rocket extends SyncData {
	constructor() {
		super();

		this.typeId = null;
		this.description = null;
		this.cg = null;
		this.cgFrom = AppCommonConstants.Rocketry.Direction.Tip;
		this.cghMeasurementUnitId = null;
		this.cghMeasurementUnitsId = null;
		this.cp = null;
		this.cpFrom = AppCommonConstants.Rocketry.Direction.Tip;
		this.cpMeasurementUnitId = null;
		this.cpMeasurementUnitsId = null;
		this.diameterMajor = null;
		this.diameterMajorMeasurementUnitId = null;
		this.diameterMajorMeasurementUnitsId = null;
		this.diameterMinor = null;
		this.diameterMinorMeasurementUnitId = null;
		this.diameterMinorMeasurementUnitsId = null;
		this.length = null;
		this.lengthMeasurementUnitId = null;
		this.lengthMeasurementUnitsId = null;
		this.name = null;
		this.ownerId = null;
		// this.showDetails = false;
		this.stages = 1;
		this.typeId = AppCommonConstants.Rocketry.RocketTypes.highone;
		this.weight = null;
		this.weightMeasurementUnitId = null;
		this.weightMeasurementUnitsId = null;
	}
}

export default Rocket;
