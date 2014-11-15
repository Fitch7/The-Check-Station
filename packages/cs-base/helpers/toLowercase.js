/*
* Returns lowercase of a string
*/
Handlebars.registerHelper('toLowerCase', function(value) {
  if (value && typeof value === 'string') {
    return value.toLowerCase();
  } else {
    return '';
  }
});
