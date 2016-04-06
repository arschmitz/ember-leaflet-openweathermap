/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-openweathermap',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/leaflet-openweathermap/leaflet-openweathermap.js');
    app.import(app.bowerDirectory + '/leaflet-openweathermap/leaflet-openweathermap.css');
  }
};
