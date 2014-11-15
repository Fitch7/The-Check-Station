Package.describe({
  summary: "Checkstation Filter"
});

Package.on_use(function (api, where) {
  api.use([
    'cs-base',
    'cs-database'
  ]);

  api.add_files([
    'vendor/leaflet.label.js',
    'vendor/leaflet.label.css',
    'views/filter.html', 
    'views/filter.js',
    'views/filter.less'
  ], 'client');
});
