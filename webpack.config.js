module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: './lib/index.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
};
