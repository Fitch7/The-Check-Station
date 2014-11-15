Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("filesStore")]
});

Files.allow({
  insert: function () {
    return true;
  },
  download: function () {
    return true;
  },
  update: function (userId, doc, fieldNames, modifier) {
    return true
  }
});
