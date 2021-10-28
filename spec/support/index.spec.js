describe("MathLib", function() {
    let Math = require('../../index.js');
    describe("Add", function() {
        it('add two numbers together', function(){
            let mathLib = new Math();
            let result = mathLib.add(1, 2);
            expect(result).toEqual(3)
        })
    })
    describe("Multiply", function() {
        it('multiply two numbers together', function(){
            let mathLib = new Math();
            let result = mathLib.multiply(1, 2);
            expect(result).toEqual(2)
        })
    })
    describe("fibanacci", function() {
        it('fibanacci of the number', function(){
            let mathLib = new Math();
            let result = mathLib.fibonacci(2);
            expect(result.length).toEqual(3)
        })
    })
})