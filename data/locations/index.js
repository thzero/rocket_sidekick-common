import SyncExtData from 'rocket_sidekick_common/data/syncExt.js';

class Location extends SyncExtData {
	constructor() {
		super();

		this.address = {};
		this.experimental = false;
		this.iterations = [];
		this.organizations = [];
		this.rocketTypes = [];
	}
}

export default Location;