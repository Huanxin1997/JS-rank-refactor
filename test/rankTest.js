const rankTest = require('ava');
const {voyageRisk, hasChina} = require('../src/rank');

rankTest('voyageRisk case 1. should return 1 when voyageRisk given voyage length is 4', t => {
    const voyage = {
        zone: 'west-indies',
        length: 4,
    };
    const result = voyageRisk(voyage);
    t.is(result, 1);
});

rankTest('voyageRisk case 2. should return 3 when voyageRisk given voyage length is 8', t => {
    const voyage = {
        zone: 'west-indies',
        length: 8,
    };
    const result = voyageRisk(voyage);
    t.is(result, 3);
});

rankTest('voyageRisk case 3. should return 4 when voyageRisk given voyage length is 9', t => {
    const voyage = {
        zone: 'west-indies',
        length: 9,
    };
    const result = voyageRisk(voyage);
    t.is(result, 4);
});

rankTest('voyageRisk case 4. should return 5 when voyageRisk given voyage length is 9 and zone is china', t => {
    const voyage = {
        zone: 'china',
        length: 4,
    };
    const result = voyageRisk(voyage);
    t.is(result, 5);
});

rankTest('voyageRisk case 5. should return 7 when voyageRisk given voyage length is 8 and zone is china', t => {
    const voyage = {
        zone: 'china',
        length: 8,
    };
    const result = voyageRisk(voyage);
    t.is(result, 7);
});

rankTest('voyageRisk case 6. should return 7 when voyageRisk given voyage length is 9 and zone is china', t => {
    const voyage = {
        zone: 'china',
        length: 9,
    };
    const result = voyageRisk(voyage);
    t.is(result, 8);
});

rankTest('hasChina case 1. should return true when hasChina given history include china', t => {
    const history = [
        {
            zone: 'china',
            profit: 0,
        }
    ];

    const result = hasChina(history);
    t.is(result, true);
});

rankTest('hasChina case 2. should return true when hasChina given history not include china', t => {
    const history = [
        {
            zone: 'west-indies',
            profit: 0,
        }
    ];

    const result = hasChina(history);
    t.is(result, false);
});