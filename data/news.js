import SharedConstants from '../constants.js';

import BaseNewsData from '@thzero/library_common/data/baseNews.js';

class NewsData extends BaseNewsData {
	constructor() {
		super();
	}

	map(requested) {
		super.map(requested);

		if (!requested)
			return;
	}

	_defaultStatus() {
		return SharedConstants.Status.ACTIVE;
	}

	_defaultType() {
		return SharedConstants.NewsTypes.MAIN;
	}
}

export default NewsData;
