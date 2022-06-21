const data = require("./scripts/users/data");

const importTest = (name, path) => {
    describe(name, function () {
        require(path);
    });
}

describe("Test Execution Started", () => {
    importTest(data.CREATE_USER.NAME, './scripts/users/create/index');
    importTest("Second Script", './scripts/users/get/index');
});