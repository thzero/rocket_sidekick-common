import LibraryCommonUtility from '@thzero/library_common/utility/index.js';

class RocketStageMotor {
	constructor(index, count) {
		this.id = LibraryCommonUtility.generateId();
		this.diameter = null;
		this.count = count;
		this.index = index;
	}
}

export default RocketStageMotor;
