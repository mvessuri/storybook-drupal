/** @type { import('@storybook/server-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../components/**/*.stories.@(json|yaml|yml)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/server-webpack5",
    options: {},
  },
};
export default config;
