import Ember from 'ember';
import TileLayer from 'ember-leaflet/components/tile-layer';

const { assert } = Ember;

let OwmLayerComponent = TileLayer.extend({

  leafletOptions: [
    'showLegend', 'legendImagePath', 'legendPosition',
    'appId', 'type', 'lang', 'minZoom', 'interval', 'progressControl', 'imageLoadingUrl',
    'imageLoadingBgUrl', 'temperatureUnit', 'temperatureDigits', 'speedUnit', 'speedDigits',
    'popup', 'keepPopup', 'showOwmStationLink', 'showWindSpeed', 'showWindDirection',
    'showTimestamp', 'showTempMinMax', 'useLocalTime', 'clusterSize', 'imageUrlCity',
    'imageWidth', 'imageHeight', 'imageUrlPlane', 'imageWidthPlane', 'imageHeightPlane',
    'imageUrlStation', 'imageWidthStation', 'imageHeightStation', 'markerFunction',
    'popupFunction', 'caching', 'cacheMaxAge', 'keepOnMinZoom', 'baseUrl'
  ],

  createLayer() {
    let owmType = this.get('owmType');
    let options = this.get('options');

    if ( options.tileProxy ) {
      this.L.OWM.baseUrl = options.baseUrl;
      delete options.baseUrl;
    }
    assert(`You need to specify the OWM layer type as a positional param`, !!owmType);
    assert(`The specified OWM layer is invalid: '${owmType}'`, !!this.L.OWM[owmType]);
    return this.L.OWM[owmType](options);
  }
});

OwmLayerComponent.reopenClass({
  positionalParams: ['owmType']
});

export default OwmLayerComponent;