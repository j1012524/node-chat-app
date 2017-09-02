const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generate location message', () => {
  it('should generate correct location object', () => {
    var results = generateLocationMessage('testloc', 1, 1);
    expect(results).toInclude({
      from:'testloc'
    });
    expect(results.url).toEqual('https://www.google.com/maps?q=1,1');
    expect(results.createdAt).toBeA('number');
  });
});
