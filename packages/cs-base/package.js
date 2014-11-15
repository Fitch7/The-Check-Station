Package.describe({
  summary: "Checkstation Base"
});

Package.on_use(function (api) {
  api.use([
    'standard-app-packages',
    'less'
    ]);

  api.imply([
    'standard-app-packages',
    'less',
    'mquandalle:harmony',
    'underscore'
    ]);

  api.add_files([
    'helpers/toLowercase.js',
    'helpers/toCapital.js'
  ]);
});
