// Check to see if Counties have already been added.
if (Counties.find().count() === 0) {
  // If Virginia hasn't been added, grab the data...
  Assets.getText('private/counties.geo.json', function (err, res) {
    if (err) {
      throw err;
    }
    // ...parse it, and insert each feature into the Features collection.
    JSON.parse(res).features.forEach(function (feature) {
      Counties.insert(feature);
    });
  });
}

if (States.find().count() === 0) {
  // If Virginia hasn't been added, grab the data...
  Assets.getText('private/states.geo.json', function (err, res) {
    if (err) {
      throw err;
    }
    // ...parse it, and insert each feature into the Features collection.
    JSON.parse(res).features.forEach(function (feature) {
      States.insert(feature);
    });
  });
}

Meteor.publish('states', function () {
  return States.find();
});
Meteor.publish('counties', function () {
  return Counties.find({ 'properties.STATE': '51'});
});

