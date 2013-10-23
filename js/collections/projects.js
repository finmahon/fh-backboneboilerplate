// Filename: collections/projects.js
define([
  'underscore',
  'backbone',
  'models/project'
], function(_, Backbone, ProjectModel) {
  
  var ProjectCollection = Backbone.Collection.extend({
    model: ProjectModel
  });

  // You don't usually return a collection instantiated
  return ProjectCollection;
  
});