import { module, test } from 'qunit';
import { setupTest } from 'inhome/tests/helpers';

module('Unit | Route | gadgets', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:gadgets');
    assert.ok(route);
  });
});
