const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var results = generateMessage('rakesh', 'testing');
    expect(results).toInclude({
      from: 'rakesh',
      text: 'testing'
    });
    expect(results.createdAt).toBeA('number');
  });
});
