module.exports = {
    entry: "./public/src/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    mode: "development",
    devServer: {
        static: {
            directory: __dirname + "/public"
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'css-loader' ]
            },
        ],
    },
};