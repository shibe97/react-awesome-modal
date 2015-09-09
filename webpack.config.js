module.exports = {
    entry: './src/index.js',
    output: {
        filename: './lib/index.js'
    },
    /*entry: './examples/app.js',
    output: {
            filename: './examples/bundle.js'
        },*/
    module: {
        loaders: [
            { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
};
