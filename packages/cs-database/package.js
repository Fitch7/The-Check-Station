Package.describe({
  summary: "Checkstation Database"
});

Package.on_use(function (api, where) {
  api.use([
    'cs-base',
    'aldeed:collection2',
    'aldeed:simple-schema',
    'cfs:standard-packages',
    'cfs:filesystem',
    'cfs:autoform',
    'cfs:gridfs',
    'yogiben:autoform-file'
  ]);

  api.add_files([
    'private/states.geo.json',
    'private/counties.geo.json'
  ] , 'server', {isAsset: true});

  api.add_files([
    'collections.js',
    'fs.js'
  ]);

  api.add_files([
    'geo.js'
  ], 'server');

  api.add_files('schema.js');

  api.export([
    'States',
    'Counties',
    'Items',
    'SimpleSchema',
    'Files'
  ]);
});
