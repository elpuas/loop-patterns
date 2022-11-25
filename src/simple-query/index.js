const SIMPLE_QUERY = 'loop-patterns/simple-query';

wp.domReady( function() {
	wp.blocks.registerBlockVariation( 'core/query', {
		name: SIMPLE_QUERY,
		title: 'Simple Query',
		description: 'Displays a Simple Query',
		isActive: ( { namespace, query } ) => {
			return (
				namespace === SIMPLE_QUERY
				&& query.postType === 'post'
			);
		},
		icon: 'edit-large',
		attributes: {
			namespace: SIMPLE_QUERY,
			query: {
				perPage: 3,
				pages: 0,
				offset: 0,
				postType: 'post',
				order: 'desc',
				orderBy: 'date',
				author: '',
				search: '',
				exclude: [],
				sticky: '',
				inherit: false,
			},
		},
		scope: [ 'inserter' ],
		innerBlocks: [
			[
				'core/post-template',
				{},
				[ [ 'core/post-title' ], [ 'core/post-excerpt' ] ],
			],
			[ 'core/query-pagination' ],
			[ 'core/query-no-results' ],
		],
	})
});
