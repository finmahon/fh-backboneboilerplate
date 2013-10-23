// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/projects',
  // Using the require.js text! plugin, we are loaded raw text
  // which will be used as this view's primary template
  'text!templates/projects/list.html'
], function($, _, Backbone, ProjectsCollection, projectListTemplate) {
  var ProjectListView = Backbone.View.extend({
    el: $('#page'),
    initialize: function() {
      this.collection = new ProjectsCollection();
      this.collection.add({ name: "Bilbo Baggins" });
      // Compile template with Underscore micro-templating
      var compiledTemplate = _.template(projectListTemplate, { projects: this.collection.models });
      // Append our compiled template to this view's "el" attribute
      this.$el.html(compiledTemplate);
    }
  });

  return ProjectListView;
  
});