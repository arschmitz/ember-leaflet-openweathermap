import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('openweatermap-tile-layer', 'Integration | Component | openweatermap tile layer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{openweatermap-tile-layer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#openweatermap-tile-layer}}
      template block text
    {{/openweatermap-tile-layer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
