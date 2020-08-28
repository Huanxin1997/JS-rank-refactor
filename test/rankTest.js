const rankTest = require('ava');
const {voyageRisk} = require('../src/rank');

rankTest('voyageRisk case 1. should return 1 when voyageRisk given voyage length is 4', t => {
    const voyage = {
        zone: 'west-indies',
        length: 4,
    };
    const result = voyageRisk(voyage);
    t.is(result, 1);
});