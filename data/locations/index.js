import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';

class Location extends SyncExtData {
	constructor() {
		super();

		this.typeId = null;
		this.description = null;
		this.name = null;
		this.address = {};
		this.iterations = [];
		this.organizations = [];
		this.rocketTypes = [];
	}
}

export default Location;