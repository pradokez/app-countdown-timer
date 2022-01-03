const getDaysRemain = require("app.js");
const today = new Date();
const eventDay = new Date("2021/12/31");

describe("component", ()=>{
    it("should teste", ()=>{
       const daysRemain = getDaysRemain(eventDay, today);
        expect(Math.floor(daysRemain)).toBe(8);
    })
});