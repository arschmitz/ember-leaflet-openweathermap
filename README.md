# Ember-leaflet-openweathermap

An ember addon for including OpenWeatherMap's layers and OWM's current city/station data in ember-leaflet based maps without hassle.

OpenWeatherMap is a service for providion weather related data for use on an OpenLayers based map

## Installation

* `ember install ember-leaflet-openweathermap`

## Basic Usage

```html
{{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
	{{owm-layer "wind" opacity=0.5}}
{{/leaflet-map}}
```
## Paramaters

#### Layer type ( positional, must be first )
The OWM layer type to display

##### Types
* `clouds`
* `cloudscls`
* `precipitation`
* `precipitationcls`
* `rain`
* `raincls`
* `snow`
* `pressure`
* `pressurecntr`
* `temp`
* `wind`

##### Example
```html
{{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
	{{owm-layer "pressure"}}
{{/leaflet-map}}
```

#### Added Options

* *showLegend*: **true** or false. If true and option 'legendImagePath' is set there will be a legend image on the map.

##### Example
```html
{{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
	{{owm-layer "pressure" showLegend=true}}
{{/leaflet-map}}
```

* *legendImagePath*: URL (is set to a default image for some layers, **null** for others, see below). URL or relative path to an image which is a legend to this layer.

##### Example
```html
{{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
	{{owm-layer "pressure" legendImagePath=true}}
{{/leaflet-map}}
```

* *legendPosition*: **'bottomleft'**. Position of the legend images on the map. Available are standard positions for Leaflet controls ('topright', 'topleft', 'bottomright', 'bottomleft').

##### Example
```html
{{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
	{{owm-layer "pressure" legendPosition=true}}
{{/leaflet-map}}
```

### For more information and usage example see (https://github.com/buche/leaflet-openweathermap/tree/master)[leaflet-openweathermap]

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
