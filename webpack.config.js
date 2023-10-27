const path = require('path');

module.exports = [
    {
    entry: './src/main/webapp/index.js',  // Your entry point
    output: {
        filename: 'indexBundle.js',  // Output bundle filename
        path: path.resolve(__dirname, 'src/main/webapp/dist'),  // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // Match .js files
                exclude: /node_modules/,  // Exclude the node_modules directory
                use: {
                    loader: 'babel-loader',  // Use Babel for .js files
                },
            },
        ],
    },
    mode: 'none',
    },

    {
        entry: './src/main/webapp/404.js',  // Your entry point
        output: {
            filename: '404bundle.js',  // Output bundle filename
            path: path.resolve(__dirname, 'src/main/webapp/dist'),  // Output directory
        },
        module: {
            rules: [
                {
                    test: /\.js$/,  // Match .js files
                    exclude: /node_modules/,  // Exclude the node_modules directory
                    use: {
                        loader: 'babel-loader',  // Use Babel for .js files
                    },
                },
            ],
        },
        mode: 'none',
    },

    {
        entry: './src/main/webapp/result.js',  // Your entry point
        output: {
            filename: 'resultBundle.js',  // Output bundle filename
            path: path.resolve(__dirname, 'src/main/webapp/dist'),  // Output directory
        },
        module: {
            rules: [
                {
                    test: /\.js$/,  // Match .js files
                    exclude: /node_modules/,  // Exclude the node_modules directory
                    use: {
                        loader: 'babel-loader',  // Use Babel for .js files
                    },
                },
            ],
        },
        mode: 'none',
    },
];
