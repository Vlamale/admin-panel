const CracoGraphqlPlugin = require("craco-graphql-loader");

module.exports = {
  // Support some additional postcss plugins that doesn't have postcss-preset-env.
  style: { postcss: { plugins: [require("postcss-nested")] } },
  // Remove eslint from bundle pipeline to improve build speed and enforce this checks on CI.
  eslint: { enable: false },
  // Extend webpack config with additional craco plugins.
  plugins: [
    // Add plugin to recognize GraphQL files and to resolve queries with mutations.
    { plugin: CracoGraphqlPlugin },
  ],
};
