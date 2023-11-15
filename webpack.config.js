const path = require('path');

module.exports = [
    {
    entry: './src/main/webapp/main.js',  // Your entry point
    output: {
        filename: 'mainBundle.js',  // Output bundle filename
        path: path.resolve(__dirname, 'src/main/webapp/resources/dist'),  // Output directory
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
            path: path.resolve(__dirname, 'src/main/webapp/resources/dist'),  // Output directory
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
        entry: './src/main/webapp/start.js',  // Your entry point
        output: {
            filename: 'startBundle.js',  // Output bundle filename
            path: path.resolve(__dirname, 'src/main/webapp/resources/dist'),  // Output directory
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
        entry: './src/main/webapp/resources/js/clock.js',  // Your entry point
        output: {
            filename: 'clockBundle.js',  // Output bundle filename
            path: path.resolve(__dirname, 'src/main/webapp/resources/dist'),  // Output directory
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
