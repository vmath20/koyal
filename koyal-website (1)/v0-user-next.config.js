/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This is important for handling static files like .glb
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/files",
          outputPath: "static/files",
          name: "[name].[hash].[ext]",
        },
      },
    })
    return config
  },
}

module.exports = nextConfig

