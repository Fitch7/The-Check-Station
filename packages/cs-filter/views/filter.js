var virginiaOnly = {
  'properties.STATE': '51'
};

if (Meteor.isClient) {
  Template.filter.helpers( {
    counties: function () {
      var options = { sort: ['properties.NAME', 'asc']};
      var arr =  Counties.find(virginiaOnly, options).fetch();
      var active = Session.get('county');
      arr.forEach(function (county) {
        if (county.properties && county.properties.NAME === active) {
          county.isSelected = true;
        } else {
          county.isSelected = false;
        }
      });

      return arr;
    }, radioFilters: [
      {
      title: 'Type',
      class: 'type',
      options: [
        'Harvest/Catch',
        'Trailcam',
        'Video'
      ]
    }, {
      title: 'Game',
      class: 'game',
      options: [
        'Deer',
        'Fish',
        'Predator',
        'Bear',
        'Small Game',
        'Turkey'
      ]
    }, ]
  } );

  Template.filter.events({
    'change select': function (event) {
      var newCounty = event.target.value;
      Session.set('county', newCounty);
    },
    'click .game input': function (event) {
      var newGame = event.target.value;
      Session.set('game', newGame);
    },
    'click .type input': function (event) {
      var newType = event.target.value;
      Session.set('type', newType);
    }
  });
}


if (Meteor.isClient) {
  Template.map.rendered = function() {
    L.Icon.Default.imagePath = 'packages/leaflet/images';

    var Stamen_TerrainBackground = L.tileLayer('http://{s}.tile.stamen.com/terrain-background/{z}/{x}/{y}.png', {
      subdomains: 'abcd',
      minZoom: 4,
      maxZoom: 18
    });

    // Attribute: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'

    var map = L.map('map', {
      doubleClickZoom: false
    }).addLayer(Stamen_TerrainBackground).setView([38, -79], 6);

    var countyData = [];
    Counties.find(virginiaOnly).fetch().forEach(function (county) {
      countyData.push(county);
    });

    var style = function (feature) {
      return {
        fillColor: '#FFFFFF',
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.1
      };
    };

    var onEachFeature = function (feature, layer) {

      // Make sure the feature has a name
      if (feature.properties && feature.properties.NAME) {
        var name = feature.properties.NAME;

        layer.on('click', function () {
          Session.set('county', name);
        });
        layer.bindLabel(name);
      }
    }

    L.geoJson(countyData, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map);
  };
}
