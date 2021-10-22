const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: 'production' }) => {
    const output = (mode === 'production') ? './' : '/';

    return merge({
        mode,
        entry: './src/index.js',
        devServer: {
            hot: true,
            open: true,
        },

        output: {
            publicPath: output,
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|svg|ttf)$/,
                    use: {
                        loader: 'url-loader',
                    },
                },
            ],
        },

        plugins: [
            new webpack.ProvidePlugin({
                'React': 'react',
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
    },
        modeConfiguration(mode),
    );
};
