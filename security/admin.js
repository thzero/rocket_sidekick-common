export default {
	options: {
		admin: { // Role name
			can: [ // list of allowed operations
				'content',
				'content:reset',
				'news',
				'news:create',
				'news:edit',
				'news:delete',
				'news:search',
				'news:update',
				'users',
				'users:claims',
				'users:claims:edit',
				'users:edit',
				'users:delete',
				'users:search',
				'users:update'
			]
		},
		superAdmin: { // Role name
			can: [ // list of allowed operations
				'users:delete'
			],
			inherits: ['admin']
		}
	}
};
