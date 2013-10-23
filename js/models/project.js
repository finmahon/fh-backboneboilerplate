// Filename: models/project
define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var ProjectModel = Backbone.Model.extend({
    defaults: {
      name: "Joe Bloggs"
    }
  });
  // Return the model for the module
  return ProjectModel;
  
});