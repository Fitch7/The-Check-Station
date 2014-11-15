Package.describe({
  summary: "Checkstation Dashboard"
});

Package.on_use(function (api, where) {
  api.use('cs-base');

  api.add_files([
    'views/dashboard.html',
    'views/dashboard.less'
  ], ['client', 'server']);
});

