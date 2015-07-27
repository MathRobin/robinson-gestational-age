/*globals module, require */

module.exports = {
    getGestationalAge: function (crl) {
        'use strict';

        var numberedCrl = Number(crl),
            gestationalAgeInDays;

        if (0 < numberedCrl) {
            gestationalAgeInDays = ((Math.round(1000 * (8.052 * Math.pow(numberedCrl, 0.5) + 23.73))) / 1000);
        } else {
            throw 'Invalid crown-rump length.';
        }

        return gestationalAgeInDays;
    }
};