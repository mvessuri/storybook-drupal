/** @type { import('@storybook/server').Preview } */
const preview = {
  server: {
    url: process.env.STORYBOOK_SERVER_URL || 'https://storybook-nsl-drupal.ddev.site',
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      disableSaveFromUI: true,
    },
  },
};

export default preview;
