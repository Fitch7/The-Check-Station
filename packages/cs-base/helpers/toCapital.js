/*
* Returns string with capitalized first character
*/
Handlebars.registerHelper('toCapital', function (value) {
  if (value && typeof value === 'string') {
    return value.charAt(0).toUpperCase() + value.substring(1)
  } else {
    return '';
  }
});
