/*jshint node:true*/
module.exports = {
  name: 'ember-leaflet-openweathermap-tile-layer',
  description: 'openweathermap tile layer',

  normalizeEntityName: function() {
   // this prevents an error when the entityName is
   // not specified (since that doesn't actually matter
   // to us
  },
  afterInstall: function(options) {
   return this.addBowerPackageToProject('git@github.com:buche/leaflet-openweathermap.git', '#bb9272b' );
  }
};
