if (Meteor.isClient) {
  Template.checkIn.events({
    'change #checkInForm .type': function (event) {
      console.log(event.target.value);
    }
  });
  AutoForm.hooks({
    checkInForm: {
      onSuccess: function (doc) {
        console.log('something something');
        $('#check-in-modal').modal('hide');
        return doc;
      }
    }
  });
}
