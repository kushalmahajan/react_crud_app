const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//const GoogleFonts = require('google-fonts-webpack-plugin'); // Plugin has an issue Not working

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/index.js']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
        // new GoogleFonts({
        //     fonts: [
        //         { family: 'Nunito Sans', variants: ["400", "600"] },
        //         { family: "Roboto" }
        //     ]
        // })
        // new BundleAnalyzerPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
            // {
            //     test: /\.(csv|tsv)$/,
            //     use: [
            //         'csv-loader'
            //     ]
            // },
            // {
            //     test: /\.xml$/,
            //     use: [
            //         'xml-loader'
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    mode: 'production'
}