const Todo = require('../src/todo.js');
const expect = require("chai").expect;
const assert = require("chai").assert;
const fs = require('fs');

describe("Todo operations", () => {
    describe("Todo functions", () => {
        it("adding new todo to the list", () => {
            const todo = new Todo();
            todo.add("remind me about the event at 11:00am")
            todo.add("call Nisha at 11:30am");
            expect(todo.list()).to.not.equals(null);
            expect(todo.list().length).to.equals(2);
            expect(todo.list()).to.deep.equals([
                { title: 'remind me about the event at 11:00am', completed: false },
                { title: 'call Nisha at 11:30am', completed: false }
            ]);
        });
        it("completing new todo task", () => {
            const todo = new Todo();
            todo.add("remind me about the event at 11:00am")
            todo.complete("remind me about the event at 11:00am");
            expect(todo.list()).to.deep.equals([
                { title: 'remind me about the event at 11:00am', completed: true }
            ])
        });
        // it("saving todo into new file: callback", (done) => {
        //     const todo = new Todo();
        //     todo.add("remind me about the event at 11:00am")
        //     todo.saveFile((err) => {
        //         expect(fs.existsSync("todos.csv"), true);
        //         let expectedFileContent = "Title,Completed\nremind me about the event at 11:00am,false";
        //         let content = fs.readFileSync("todos.csv").toLocaleString();
        //         expect(expectedFileContent).to.equal(content);
        //         done(err);
        //     })
        // });
        it("saving todo into new file: async await", async () => {
            const todo = new Todo();
            todo.add("remind me about the event at 11:00am")
            await todo.saveFile();
            let expectedFileContent = "Title,Completed\nremind me about the event at 11:00am,false";
            let content = fs.readFileSync("todos.csv").toLocaleString();
            assert.strictEqual(content, expectedFileContent);
        })
    });
});