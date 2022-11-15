const Constants = {
	ErrorCodes: {
		DuplicateName: 'duplicateName',
		DuplicateNumber: 'duplicateNumber',
		DuplicateOrder: 'duplicateOrder',
		InvalidObject: 'invalidObject',
		InvalidPermissions: 'invalidPermissions',
		ObjectChanged: 'objectChanged',
		QuotaReached: 'quotaExceeded'
	},
	ErrorFields: {
		Generic: 'generic',
		Name: 'name',
		Number: 'number',
		Order: 'order'
	},
	ListingTypes: {
		Grid: 'grid',
		List: 'list'
	},
	NewsTypes: {
		ADMIN: 'admin',
		MAIN: 'main'
	},
	Roles: {
		Admin: 'admin',
		User: 'user'
	},
	Status: {
		ACTIVE: 'active'
	}
};

export default Constants;