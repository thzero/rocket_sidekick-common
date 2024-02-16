export default {
	options: {
		user: {
			can: [ // list of allowed operations
				'checklists',
				'inventory',
				'parts',
				'rockets',
				'sync',
				'user'
			]
		},
		admin: {
			can: [ ],
			inherits: ['user']
		}
	}
};
