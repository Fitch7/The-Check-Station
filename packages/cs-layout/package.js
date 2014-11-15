Package.describe({
  summary: 'Checkstation Layout'
});

Package.on_use(function (api) {
  api.use([
    'cs-base',
    'mizzao:bootstrap-3'
  ]);

  api.add_files([
    'views/index.html',
    'views/header.html',
    'views/layout.html',
    'views/layout.less'
    ], 'client');
})
