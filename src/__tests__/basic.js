import { checkTel } from "../index.js";

test("checkUserName", () => {
    let tel = "8 (927) 000-00-00";
    const result = checkTel(tel);
    expect(result).toEqual('+79270000000');
});
