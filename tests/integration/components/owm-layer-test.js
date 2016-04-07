import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('owm-layer', 'Integration | Component | owm layer', {
  integration: true
});

test('not specifying the owm layer type throws', function(assert) {
  assert.expect(1);

  assert.throws(() => {
    this.render(hbs`
      {{#leaflet-map zoom=5 lat=39.7680448 lng=-6.6366858}}
        {{owm-layer}}
      {{/leaflet-map}}
    `);
  }, /.*You need to specify the OWM layer type as a positional param.*/);
});

test('specifying an invalid owm layer type throws', function(assert) {
  assert.expect(1);

  assert.throws(() => {
    this.render(hbs`
      {{#leaflet-map zoom=5 lat=39.7680448 lng=-6.6366858}}
        {{owm-layer "whatever"}}
      {{/leaflet-map}}
    `);
  }, /.*The specified OWM layer is invalid: 'whatever'.*/);
});