Package.describe({
  summary: "Checkstation Feed"
});

Package.on_use(function (api, where) {
  api.use([
    'cs-base',
    'cs-database',
    'jquery'
  ]);

  api.add_files([
    'vendor/jquery.timeago.js'
  ], 'client');

  api.add_files([
    'views/feed.html',
    'views/feed.js',
    'views/feed.less',
  ], ['client', 'server']);
});

