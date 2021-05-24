import { GatsbyConfig } from 'gatsby';

const siteMetadata: GatsbyConfig['siteMetadata'] = {
    title: 'Gatsby Starter',
    siteUrl: `https://www.example.com`,
};

module.exports = {
    siteMetadata,
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-typescript',
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve(
                    './src/components/app-layout/app-layout.tsx'
                ),
            },
        },
    ],
};
