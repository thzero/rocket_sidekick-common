export default {
	options: {
		admin: { // Role name
			can: [ // list of allowed operations
				'admin',
				'content',
				'content:reset',
				'news',
				'news:create',
				'news:edit',
				'locations:public:delete',
				'locations:public:edit',
				'news:delete',
				'news:search',
				'news:update',
				'parts:public:delete',
				'parts:public:edit',
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
