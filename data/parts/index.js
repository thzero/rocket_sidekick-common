import SyncData from 'rocket_sidekick_common/data/sync.js';

class Part extends SyncData {
	constructor() {
		super();

		this.typeId = null;
		this.description = null;
		this.public = false;
		this.name = null;
		this.ownerId = null;
	}
}

export default Part;
