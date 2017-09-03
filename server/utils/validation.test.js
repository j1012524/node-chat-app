const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString test cases', () => {
  it('should reject non-string values', () => {
    var results = isRealString(1234);
    expect(results).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var results = isRealString('   ');
    expect(results).toBe(false);
  });

  it('should allow string with non -space charatcters', () => {
    var results = isRealString(' abc ');
    expect(results).toBe(true);
  });
});
