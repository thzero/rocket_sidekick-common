import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';

class Inventory extends SyncExtData {
	constructor() {
		super();

		this.types = [];
	}
}

export default Inventory;