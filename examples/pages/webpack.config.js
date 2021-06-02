const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const vueLoader = require('vue-loader')
const path = require('path')

module.exports = {
	resolve: {
		alias: {
			'~': path.join(__dirname, './test')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						sourceType: 'unambiguous',
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},

	plugins: [new vueLoader.VueLoaderPlugin()].concat(
		process.argv.includes('--analyze') ? [new BundleAnalyzerPlugin()] : []
	)
}
