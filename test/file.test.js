const expect = require("chai").expect;
const fs = require('fs');
const Todo = require('../src/todo.js');

describe("Todo Operations", () => {
    let todo;
    beforeEach(() => {
        todo = new Todo();
        todo.add("save the file to disk");
    })
    afterEach(() => {
        if (fs.existsSync("todos.csv")) {
            fs.unlinkSync("todos.csv")
        }
    })
    it("saving todo into new file: async await with hooks", async () => {
        todo.complete("save the file to disk")
        await todo.saveFile();
        expect(fs.existsSync("todos.csv")).to.equal(true);
        let expectedFileContent = "Title,Completed\nsave the file to disk,true";
        let content = fs.readFileSync("todos.csv").toLocaleString();
        expect(expectedFileContent).to.equal(content)
    })
})