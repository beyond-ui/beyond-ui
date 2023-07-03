// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Beyond UI',
  tagline: 'Modern UI Library For React',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://beyond-ui.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'beyond-ui', // Usually your GitHub org/user name.
  projectName: 'beyond-ui', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'Beyond UI',
          logo: {
            alt: 'My Site Logo',
            src: 'img/logo.svg',
          },
          items: [
           {
              position: 'left',
              label: 'Docs',
             to: '/docs/category/getting-started'
            },
            {to: '/blog', label: 'Examples', position: 'left'},
            {
              href: 'https://github.com/beyond-ui/beyond-ui',
              label: 'GitHub',
              position: 'right',
            },
          ],
          hideOnScroll: true,
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Docs',
                  to: '/docs/category/getting-started',
                },
                {
                  label: 'Examples',
                  to: '/docs/',
                },
              ],
            },
            {
              title: 'Social',
              items: [
                {
                  label: 'Linkedin',
                  href: 'https://www.linkedin.com/company/beyond-ui/',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/beyondui_io',
                },
                {
                  label: 'Instagram',
                  href: 'https://www.instagram.com/beyond_ui.io/',
                }
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/beyond-ui/beyond-ui',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} beyond-ui.io`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};

module.exports = config;
