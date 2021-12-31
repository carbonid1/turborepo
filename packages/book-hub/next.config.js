const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withPWA({
    swcMinify: true,
    pwa: {
      dest: 'public',
      runtimeCaching,
      disable: process.env.NODE_ENV === 'development',
    },
    images: {
      domains: [
        'abs.twimg.com',
        'res.cloudinary.com',
        'lh3.googleusercontent.com',
        'avatars.githubusercontent.com',
        'platform-lookaside.fbsbx.com',
        'avatars.dicebear.com',
      ],
    },
  }),
);
