// Filename: main.js

// Require.js allows us to configure shortcut aliases
require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone'
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App) {
  // The "app" dependency iis passed in as 
});