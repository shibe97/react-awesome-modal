module.exports = {
    entry: [
        './src/index.js',
        './examples/app.js'
    ],
    output: [
        {
            filename: './lib/index.js'
        },
        {
            filename: './examples/bundle.js'
        },
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
};
