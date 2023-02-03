import AppCommonConstants from '../constants.js';

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
		return AppCommonConstants.Status.ACTIVE;
	}

	_defaultType() {
		return AppCommonConstants.NewsTypes.MAIN;
	}
}

export default NewsData;
