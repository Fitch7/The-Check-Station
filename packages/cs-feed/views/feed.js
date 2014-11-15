if (Meteor.isClient) {

  Meteor.subscribe('items');

  Template.feed.helpers({
    items: function () {
      // Use a filter (or no filter, if none exists)
      // TODO: This does nothing

      var filters = [
        'county',
        'type',
        'game'
      ];

      var filter = Session.get('filter') || {};

      filters.forEach(function (key) {
        var val = Session.get(key); 
        if (val && val !== 'all') {
          filter[key] = val;
        }
      });

      var arr = Items.find(filter, {sort: {date: -1}}).fetch();

      var newArr = [];

      arr.forEach(function (item) {
        var fid = item.fileId;
        var file = Files.findOne({_id: fid});
        if (file && file.url) {
          item.fileUrl = file.url();
        }
        if (item.date) {
          item.date = jQuery.timeago(item.date);
        }
        newArr.push(item);
      });
      return newArr;
    }
  });
}

