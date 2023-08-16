import AppCommonConstants from 'rocket_sidekick_common/constants.js';

import LibraryCommonUtility from '@thzero/library_common/utility/index.js';

class RocketStage {
	constructor() {
		this.id = LibraryCommonUtility.generateId();
		this.rocketId = null;
		this.altimeters = [],
		this.cg = null;
		this.cgFrom = AppCommonConstants.Rocketry.Direction.Tip;
		this.cgMeasurementUnitId = null;
		this.cgMeasurementUnitsId = null;
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
		this.manufacturerId = null;
		this.manufacturerStockId = null;
		this.notes = null;
		this.primary = null;
		this.recovery = [],
		this.trackers = [],
		this.weight = null;
		this.weightMeasurementUnitId = null;
		this.weightMeasurementUnitsId = null;
	}
}

export default RocketStage;
