const { removeDupsFromArray, reverString } = require('../utils.js');
const expect = require('chai').expect;

describe("Array operation", function () {
    describe("remove duplicate from the array", function () {
        it("shoud be able to remove duplicate", function () {
            let result = removeDupsFromArray([1, 1, 2, 3]);
            let ouput = [1, 2, 3];
            expect(result).to.deep.equal(ouput)
        })
    })
    describe("reveser the array", function () {
        it("shoud be able reverse the array", function () {
            let result = reverString("mom");
            let ouput = "mom";
            expect(result).to.deep.equal(ouput)
        })
    })
})