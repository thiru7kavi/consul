import createHeaders from 'consul-ui/utils/create-headers';
import { module, test } from 'qunit';

module('Unit | Utility | create-headers', function() {
  const parseHeaders = createHeaders();
  test('it converts lines of header-like strings into an object', function(assert) {
    const expected = {
      'Content-Type': 'application/json',
      'X-Consul-Index': '1',
    };
    const lines = `
      Content-Type: application/json
      X-Consul-Index: 1
    `.split('\n');
    const actual = parseHeaders(lines);
    assert.deepEqual(actual, expected);
  });
});
