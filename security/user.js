export default {
	options: {
		user: {
			can: [ // list of allowed operations
				'checklists',
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
