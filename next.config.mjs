/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdnapi.smotrim.ru',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
