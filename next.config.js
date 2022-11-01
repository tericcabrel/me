/** @type {import('next').NextConfig} */
const nextConfigOptions = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            }
        ]
    }
};

module.exports = nextConfigOptions;