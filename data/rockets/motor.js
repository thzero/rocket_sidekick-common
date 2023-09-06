import LibraryCommonUtility from '@thzero/library_common/utility/index.js';

class RocketStageMotor {
	constructor(index) {
		this.id = LibraryCommonUtility.generateId();
		this.diameter = null;
		this.count = 1;
		this.index = index;
	}
}

export default RocketStageMotor;
