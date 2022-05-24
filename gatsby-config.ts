import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Pierre du Toit',
    siteUrl: 'https://pierredutoit.me',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-top-layout',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-plugin-octokit',
      options: { message: 'Hello world' },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'cvcvcv',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    // Filesystem
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      // __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      // __key: 'pages',
    },
  ],
};

export default config;
