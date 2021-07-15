const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tao',
  tagline: "Stuff I've Learned",
  url: 'https://johntday.github.io',
  baseUrl: '/tao/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'johntday', // Usually your GitHub org/user name.
  projectName: 'tao', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Tao',
      logo: {
        alt: 'Logo',
        src: 'img/favicon-32x32.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Topics',
        },
/**
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
*/
        {
          href: 'https://github.com/johntday/tao',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      appId: 'J3DNVWLVGC',
      apiKey: '71eb049068de6928cb2650fa6d9bf86b',
      indexName: 'tao',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/johntday/tao/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/johntday/tao/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
