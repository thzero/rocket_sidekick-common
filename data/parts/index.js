import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';

class Part extends SyncExtData {
	constructor() {
		super();

		this.typeId = null;
		this.public = false;
	}
}

export default Part;
