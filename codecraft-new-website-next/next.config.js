
const withImages = require('next-images')
// module.exports = withImages({})


const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//     /* config options here */
// })

const withFonts = require('next-fonts');


module.exports = withFonts(withImages(
    withCSS({
        webpack(config, options) {
            // Further custom configuration here
            return config
        },
        target: 'server',
        devIndicators: {
            autoPrerender: false,
        },

    })
));

