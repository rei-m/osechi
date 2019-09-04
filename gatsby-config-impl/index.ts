import { GatsbyPlugin } from './types';
import { SiteMetaData } from '@src/types';
import { APP_NAME } from '@src/constants';
import { theme } from '@src/styles/theme';

export const siteMetadata: SiteMetaData = {
  title: `${APP_NAME} - おせち.jp -`,
  description: `おせち.jpではいろいろなおせち販売サイトのおせちを比較することができます。定番のおせちや少し変わったおせちまで簡単に条件を指定して探せます。2020年のおせちはおせち.jpでお好みのおせちを探してはいかがでしょうか。`,
  author: `@rei-m`,
};

export const plugins: GatsbyPlugin[] = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/../src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteMetadata.title,
      short_name: `おせち.jp`,
      start_url: `/`,
      background_color: theme.colorThin,
      theme_color: theme.colorPrimary,
      display: `minimal-ui`,
      icon: `src/images/app-icon.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/styles/typography.ts`,
    },
  },
  `gatsby-plugin-typescript`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-no-sourcemaps`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: `UA-46787228-7`,
    },
  },
];
