import LibraryCommonUtility from '@thzero/library_common/utility/index.js';

class RocketStepStageMotor {
	constructor(index) {
		this.id = LibraryCommonUtility.generateId();
		this.rocketStageMotorId = null;
		this.index = index;
		this.motor = null;
	}
}

export default RocketStepStageMotor;
