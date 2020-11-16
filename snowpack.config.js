/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    "@snowpack/plugin-sass"
  ],
  install: [
    "bulma/bulma.sass"
  ],
  installOptions: {
    rollup: {plugins: [require('rollup-plugin-scss')()]}
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
