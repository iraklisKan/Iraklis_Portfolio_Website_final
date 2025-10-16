/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Iraklis_Portfolio_Website_final/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/Iraklis_Portfolio_Website_final' : '',
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;