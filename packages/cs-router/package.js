Package.describe({
  summary: "Checkstation Router"
});

Package.on_use(function (api) {
  api.use([
    'cs-base',
    'cs-database',
    'iron:router'
    ]);
  api.add_files('routes.js');
});
