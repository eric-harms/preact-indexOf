// require --------------------------------------------------------------------

const path = require("path");

// exports --------------------------------------------------------------------

module.exports = {

	// mode -------------------------------------------------------------------

	mode: "production",

	// entry ------------------------------------------------------------------

	entry: [
		"./src/index.jsx"
	],

	// output -----------------------------------------------------------------

	output: {
		path: path.resolve(__dirname, 'builds'),
		filename: "index.js",
		library: 'preact-indexOf',
		libraryTarget: 'umd',		
	},

	// externals --------------------------------------------------------------

	externals: [
		'preact',
		'preact-dom'
	],
	
	// module -----------------------------------------------------------------

	module: {

		// rules ----------------------------------------------------------

		rules: [
			{ 
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/ 
			},        
			{ 
				test: /\.jsx$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/,
			}
		]
	}
};

