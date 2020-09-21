module.exports = {
  extends: ['plugin:@ejhammond/react'],
  globals: {
    // Gatsby transforms `__PATH_PREFIX__` into a raw string during the build
    __PATH_PREFIX__: 'readonly',
    // Gatsby transforms `process.env` into raw string ("production"|"development") during the build,
    // so we are allowed to use it client-side
    process: 'readonly',
  },
  rules: {
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['*.config.js', 'gatsby-config.js', 'gatsby-node.js'],
      extends: ['plugin:@ejhammond/node'],
    },
    {
      files: ['gatsby-config.js'],
      rules: {
        // gatsby-plugin-manifest uses snake_case vars and there's nothing we can do about it
        '@typescript-eslint/camelcase': 'off',
      },
    },
  ],
};
