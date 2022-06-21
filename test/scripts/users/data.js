module.exports = {
    CREATE_USER: {
        NAME: "Create User",
        PATH: '/user',
        DESCRIBE: "Create User API -> PUT",
        SUB: 'Should successfully pass the test for create user api',
        TEST_DATA: {
            NAME_COUNT: 2,
            REQUEST_HEADERS: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        },
        EXPECTED_RESULT: {
            RESPONSE_MESSAGE: 'User Added',
            RESPONSE_STATUS_CODE: 200
        }
    },
    GET_ALL_USERS: {
        NAME: "Get All Users",
        PATH: '/user',
        DESCRIBE: "Get All Users API -> GET",
        SUB: 'Should successfully pass the test for get all user api',
        TEST_DATA: {},
        EXPECTED_RESULT: {
            RESPONSE_DATA_IS_ARRAY: true,
            RESPONSE_STATUS_CODE: 200
        }
    }
}