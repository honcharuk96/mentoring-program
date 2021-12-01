// next.config.js
const withFonts = require('next-fonts');
module.exports = withFonts({
    async redirects() {
        return [
            {
                source: '/',
                destination: '/search',
                permanent: true,
            },
        ]
    },
    enableSvg: true,
    webpack(config) {
        return config;
    },

});
