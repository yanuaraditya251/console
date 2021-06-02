const docSiteUrl = process.env.DEPLOY_PRIME_URL || 'https://vue-styleguidist.github.io'

/** @type import("vue-styleguidist").Config */
module.exports = {
	title: 'Component as pages',
	sections: [
		{
			description: 'hoy',
			components: 'src/components/**/[A-Z]*.vue',
			sectionDepth: 1
		}
	],
	ribbon: {
		text: 'Back to examples',
		url: `${docSiteUrl}/Examples.html`
	},
	webpackConfig: require('./webpack.config'),
	pagePerSection: true
}
