const mix = require('laravel-mix');
var LiveReloadPlugin = require('webpack-livereload-plugin');

// Setup asset compilation
mix.react('assets/js/main.jsx', 'assets/dist/');

mix.sass('assets/scss/app.scss', 'assets/dist/')
  .options({
    processCssUrls: false
  });

// Refresh the browser at the following domain when files change
mix.browserSync({
  proxy: 'http://todo-react.dev/',
  files: [
    '**/*.php',
    'style.css',
    'dist/*.jsx',
  ],
  open: false,
  notify: false,
});

// Load jQuery into every script and resolve package aliases
mix.autoload({
    jQuery: ['$', 'window.jQuery'],
  })
  .webpackConfig({
    externals: {
      jQuery: 'jQuery',
      jquery: 'jQuery'
    },
    resolve: {
      alias: { }
    },
    plugins: [
      new LiveReloadPlugin()
    ]
  });
