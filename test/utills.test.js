const { removeDupsFromArray } = require('../utils.js');
const expect = require('chai').expect;

describe("Array operation", function () {
    describe("remove duplicate from the array", function () {
        it("shoud be might to remove duplicate", function () {
            let result = removeDupsFromArray([1, 1, 2, 3]);
            let ouput = [1, 2, 3];
            expect(result).to.deep.equal(ouput)
        })
    })
})