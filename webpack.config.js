module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        library: "lets-get-arrested",
        libraryTarget: "umd"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}