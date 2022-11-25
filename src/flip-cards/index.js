const FLIP_CARDS = 'loop-patterns/flip-cards';

wp.domReady( function() {
	wp.blocks.registerBlockVariation( 'core/query', {
		name: FLIP_CARDS,
		title: 'Flip Cards',
		description: 'Flip Cards Query',
		isActive: ( { namespace, query } ) => {
			return (
				namespace === FLIP_CARDS
				&& query.postType === 'post'
			);
		},
		icon: 'format-gallery',
		attributes: {
			namespace: FLIP_CARDS,
			className: 'lp-flip-cards',
			tagName:'section',
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
				{
					lock: 'all',
					className: 'lp-flip-card__card is-flex-container columns-3',
				},
				[
					['core/group', {
						className: 'lp-flip-card'
						},
						[
							['core/columns', {
								className: 'lp-flip-card__inner',
							},
								[
									['core/column', {
										className: 'lp-flip-cards__front',
									},
										[
											['core/post-featured-image'],
										]
									],
									['core/column', {
										className: 'lp-flip-cards__back'
									},
										[
											['core/post-title',
												{
													isLink: true,
													style: {
														typography: {
															textTransform: 'uppercase',
															fontStyle: 'normal',
															fontWeight: '700',
														}
													}
												}
											],
											['core/post-date', {
												textColor: 'secondary',
												fontSize: 'small',
											}],
											['core/post-author', {
												textColor: 'secondary',
												fontSize: 'small',
												showAvatar: false,
											}],
											['core/post-excerpt', {
												moreText: 'Read More',
												textColor: 'secondary',
												fontSize: 'small',
											}],
										]
									],
								]
							]
						]
					],
				],
			],
		],

	})
});
