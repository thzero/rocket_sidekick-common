import AppCommonConstants from 'rocket_sidekick_common/constants.js';

class RocketStage {
	constructor() {
		this.id = null;
		this.rocketId = null;
		this.cg = null;
		this.cgFrom = AppCommonConstants.Rocketry.Direction.Tip;
		this.cgMeasurementUnitId = null;
		this.cgMeasurementUnitsId = null;
		this.cp = null;
		this.cpFrom = AppCommonConstants.Rocketry.Direction.Tip;
		this.cpMeasurementUnitId = null;
		this.cpMeasurementUnitsId = null;
		this.diameter = null;
		this.diameterMeasurementUnitId = null;
		this.diameterMeasurementUnitsId = null;
		this.length = null;
		this.lengthMeasurementUnitId = null;
		this.lengthMeasurementUnitsId = null;
		this.notes = null;
		this.weight = null;
		this.weightMeasurementUnitId = null;
		this.weightMeasurementUnitsId = null;
	}
}

export default Rocket;
