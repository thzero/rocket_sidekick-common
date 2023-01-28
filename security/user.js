export default {
	options: {
		user: {
			can: [ // list of allowed operations
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
