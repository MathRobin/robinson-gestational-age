jest.autoMockOff();

var testedThing = require('./index');

describe('getGestationalAge', () => {
  it('to be described correctly', () => {
    expect(typeof testedThing.getGestationalAge).toBe('function');
  });

  it('should return correct numeric gestational age', () => {
    expect(testedThing.getGestationalAge(24)).toEqual(63.177);
    expect(testedThing.getGestationalAge(43)).toEqual(76.53);
  });

  it('should return correct string gestational age', () => {
    expect(testedThing.getGestationalAge('24')).toEqual(63.177);
    expect(testedThing.getGestationalAge('43')).toEqual(76.53);
  });

  it('should throw for stupid param', () => {
    expect(testedThing.getGestationalAge).toThrowError(new Error('Invalid crown-rump length.'));
    expect(testedThing.getGestationalAge.bind(null, null)).toThrowError(new Error('Invalid crown-rump length.'));
    expect(testedThing.getGestationalAge.bind(null, '')).toThrowError(new Error('Invalid crown-rump length.'));
    expect(testedThing.getGestationalAge.bind(null, 'abcd')).toThrowError(new Error('Invalid crown-rump length.'));
  });
});
