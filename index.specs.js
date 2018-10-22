/*globals jest, require, expect, describe, it */
jest.autoMockOff();

var testedThing = require('./index');

describe('getGestationalAge', function () {
    it('to be described correctly', function () {
        expect(typeof testedThing.getGestationalAge).toBe('function');
    });

    it('should return correct numeric gestational age', function () {
        expect(testedThing.getGestationalAge(24)).toEqual(63.177);
        expect(testedThing.getGestationalAge(43)).toEqual(76.53);
    });

    it('should return correct string gestational age', function () {
        expect(testedThing.getGestationalAge('24')).toEqual(63.177);
        expect(testedThing.getGestationalAge('43')).toEqual(76.53);
    });

    it('should throw for stupid param', function () {
        try {
            expect(testedThing.getGestationalAge());
            expect(true).toBe(false);
        } catch (eX) {
            expect(true).toBe(true);
        }
        try {
            expect(testedThing.getGestationalAge(null));
            expect(true).toBe(false);
        } catch (eX) {
            expect(true).toBe(true);
        }
        try {
            expect(testedThing.getGestationalAge(''));
            expect(true).toBe(false);
        } catch (eX) {
            expect(true).toBe(true);
        }
        try {
            expect(testedThing.getGestationalAge('abcd'));
            expect(true).toBe(false);
        } catch (eX) {
            expect(true).toBe(true);
        }
    });
});
