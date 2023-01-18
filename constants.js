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
	Licenses: {
		Free: {
			Apache20: 'apache-2.0',
			CcBy: 'cc-by',
			CCBySa: 'cc-by-sa',
			CCByNc: 'cc-by-nc',
			Bsd2Clause: 'bsd-2-clause',
			Bsd3Clause: 'bsd-3-clause',
			MIT: 'mit'
		},
		Public: {
			Cc0: 'cc0'
		}
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