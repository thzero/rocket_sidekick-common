import AppCommonConstants from 'rocket_sidekick_common/constants.js';

class RocketStage {
	constructor() {
		super();

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
		this.ownerId = null;
		this.weight = null;
		this.weightMeasurementUnitId = null;
		this.weightMeasurementUnitsId = null;
	}
}

export default Rocket;
