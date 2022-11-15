export default {
	options: {
		user: {
			can: [ // list of allowed operations
				'user'
			]
		},
		admin: {
			can: [ ],
			inherits: ['user']
		}
	}
};
