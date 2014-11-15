Items = new Mongo.Collection("items");

var createSchemas = function () {
  SimpleSchema.debug = true;
  var countyList = [];

  Counties.find({
    'properties.STATE': '51'
  }).fetch().forEach(function (obj) {
    countyList.push(obj.properties.NAME);
  });

  countyList.sort();

  Items.attachSchema(new SimpleSchema({
    name: {
      type: String,
      label: "Name",
      max: 64
    },
    date: {
      type: Date,
      label: "Date",
      autoValue: function () {
        return new Date();
      }
    },
    caption: {
      type: String,
      label: "Caption",
      max: 512,
      optional: true
    },
    county: {
      type: String,
      label: "County",
      allowedValues: countyList  
    },
    type: {
      type: String,
      label: "Type",
      allowedValues: [
        'Harvest/Catch',
        'Trailcam'
      ]      
    },
    game: {
      type: String,
      label: "Game",
      allowedValues: [
        'Deer',
        'Fish',
        'Predator',
        'Bear',
        'Bird',
        'Small Game',
        'Turkey'
      ]  
    },
    fileId: {
      type: String,
      label: "File"
    }
  }));

  Items.allow({
    insert: function() {
      return true;
    },
    update: function() {
      return true;
    },
    remove: function () {
      return true;
    }
  });
};

if (Meteor.isClient) {
  Meteor.subscribe('counties', createSchemas);
} else {
  createSchemas();
  Meteor.publish('items', function () {
    return Items.find();
  });
}
