import Ember from 'ember';
import TileLayer from 'ember-leaflet/components/tile-layer';

const { assert } = Ember;

let OwmLayerComponent = TileLayer.extend({

  url: '',

  leafletOptions: [
    'showLegend', 'legendImagePath', 'legendPosition',
    'appId', 'type', 'lang', 'minZoom', 'interval', 'progressControl', 'imageLoadingUrl',
    'imageLoadingBgUrl', 'temperatureUnit', 'temperatureDigits', 'speedUnit', 'speedDigits',
    'popup', 'keepPopup', 'showOwmStationLink', 'showWindSpeed', 'showWindDirection',
    'showTimestamp', 'showTempMinMax', 'useLocalTime', 'clusterSize', 'imageUrlCity',
    'imageWidth', 'imageHeight', 'imageUrlPlane', 'imageWidthPlane', 'imageHeightPlane',
    'imageUrlStation', 'imageWidthStation', 'imageHeightStation', 'markerFunction',
    'popupFunction', 'caching', 'cacheMaxAge', 'keepOnMinZoom'
  ],

  createLayer() {
    let owmType = this.get('owmType');
    assert(`You need to specify the OWM layer type as a positional param`, !!owmType);
    assert(`The specified OWM layer is invalid: '${owmType}'`, !!this.L.OWM[owmType]);
    return this.L.OWM[owmType](this.get('options'));
  }
});

OwmLayerComponent.reopenClass({
  positionalParams: ['owmType']
});

export default OwmLayerComponent;