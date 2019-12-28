// 查看文档
// https://github.com/neutrinojs/webpack-chain/tree/v5

const path = require("path");

const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
const isProduction = process.env.NODE_ENV === "production";

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: "./",
    outputDir: "oh-my-fiction-dist",
    assetsDir: "static",
    lintOnSave: false, //编译时候在面板上显示eslint
    productionSourceMap: false,
    // lintOnSave: true,
    chainWebpack: config => {
        // 配置别名
        config.resolve.alias
            .set("@", resolve("src"))
            .set("components", resolve("src/components"))
            .set("utils", resolve("src/utils"))
            .set("public", resolve("public"));
        // .end('public',resolve('public'));
    },
    configureWebpack: config => {
        if (isProduction) {
            config.plugins.push(
                new CompressionWebpackPlugin({
                    algorithm: "gzip",
                    test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
                    threshold: 10240,
                    minRatio: 0.8
                })
            );
        }
    },
    devServer: {
        port: 9527,
        open: true
    }
};
