export default {
	options: {
		user: {
			can: [ // list of allowed operations
				'checklists',
				'inventory',
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
