Package.describe({
  summary: 'Fund Exits custom package – use as template for your own packages',
  version: '0.1.0',
  name: 'custom-fundexits'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use([
		'telescope:core',
  	'montecruiseto:telescope-theme-sm-laval'
  ]);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  

  // client & server

  api.addFiles([
    'lib/custom_fields.js',
    'lib/template_modules.js',
    'lib/callbacks.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/custom_post_title_laval.html',
    'lib/client/templates/custom_post_item_laval.html',
    'lib/client/templates/custom_post_content_laval.html',
    'lib/client/templates/custom_post_title.js',
		'lib/client/templates/custom_nav.html',
		'lib/client/templates/custom_posts_daily.html',
		'lib/client/templates/custom_newsletter_banner.html',
    'lib/client/stylesheets/custom.scss',
		'lib/client/custom_post_item_laval.js',
    'lib/client/custom_templates.js'
  ], ['client']);

  // server

  api.addFiles([
    'lib/server/templates/custom_emailPostItem.handlebars',
    'lib/server/templates/custom_emailDigest.handlebars'
  ], ['server']);

  // i18n languages (must come last)

  api.addFiles([
  ], ['client', 'server']);

});
