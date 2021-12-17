const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  disableDependencyReinclusion: ['@roxi/routify'],

  preprocess: sveltePreprocess({postcss: true}),
};
