const path = require('path');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: {
        server: './src/server.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.js'] //resolve all the modules other than index.ts
    },
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.ts?$/,
                exclude: '/node_modules/'
            }
        ]
    }
}