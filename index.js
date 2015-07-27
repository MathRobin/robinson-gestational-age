/*globals module, require */

module.exports = {
    getGestationalAge: function (crl, measureDate) {
        'use strict';

        var moment = require('moment'),
            numberedCrl = Number(crl),
            mmtMeasureDate,
            gestationalAgeInDays;

        if (0 < numberedCrl) {
            //mmtMeasureDate = moment(measureDate);
            gestationalAgeInDays = ((Math.round(1000 * (8.052 * Math.pow(numberedCrl, 0.5) + 23.73))) / 1000);
        } else {
            throw 'Invalid crown-rump length.';
        }

        return gestationalAgeInDays;
    }
};