export default {
	options: {
		user: {
			can: [ // list of allowed operations
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
