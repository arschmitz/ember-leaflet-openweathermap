import BaseLayer from 'ember-leaflet/components/base-layer';

export default BaseLayer.extend({
  leafletOptions: [
    'showLegend', 'legendImagePath', 'legendPosition'
  ],

  leafletProperties: [
    'opacity'
  ],

  createLayer() {
    let type = this.get('type');
      assert(`There isn't any OWM layer of this type: ${type}`, this.L.OWM[type]);
      return this.L.OWM[type](this.get('options'));
  }
});
