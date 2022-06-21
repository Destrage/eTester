'use strict';

const config = require('../../../config');
const data = require('../data').CREATE_USER;
const util = require('../../../util');
const { expect, request } = require('../../../common');

const payload = {
    name: util.randomName(data.TEST_DATA.NAME_COUNT),
    age: util.getRandomNumberInRange(18, 35),
    gender: util.getRandomGender()
}

describe(data.DESCRIBE, () => {
    const baseurl = config.HOST;
    it(data.SUB, (done) => {
        request(baseurl)
            .put(data.PATH)
            .send(payload)
            .set(data.TEST_DATA.REQUEST_HEADERS)
            .set(config.AUTH_HEADER)
            .end(function (err, res) {
                // Change according to your validations
                let body = res.body;
                expect(body.message, data.EXPECTED_RESULT.RESPONSE_MESSAGE);
                expect(res.statusCode).to.be.equal(data.EXPECTED_RESULT.RESPONSE_STATUS_CODE);
                done();
            });
    });
});