/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-openweathermap',
  included: function(app) {
    this._super.included(app);

    app.import('vendor/openweathermap/dist/leaflet-openweathermap.js');
    app.import('vendor/openweathermap/dist/leaflet-openweathermap.css');
  }
};
