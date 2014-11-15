Package.describe({
  summary: "Checkstation Check-In"
});

Package.on_use(function (api, where) {
  api.use(
    ['cs-base',
      'aldeed:autoform']
  );
  api.add_files([
    'views/check-in.html',
    'views/check-in.less',
    'views/check-in.js'
  ], ['client', 'server']);
});
