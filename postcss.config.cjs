module.exports = {
  plugins: [
    require("tailwindcss"), 
    require('postcss-import'),
    require('postcss-cssnext'),
    require('postcss-preset-env'),
    require('postcss-nested'),
    require('postcss-custom-media'),
  ],
};
