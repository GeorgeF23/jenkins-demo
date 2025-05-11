import supertest from "supertest";

import app from "../../src/index";

describe("Test add method", () => {
    const add = (query: object) => supertest(app)
        .get("/add")
        .query(query);

    test ("Missing params return error", async () => {
        const params = {};

        const response = await add(params);

        expect(response.status).toEqual(401);
        expect(response.body).toHaveProperty("error");
        expect(response.body.error).toEqual("Invalid request");
    });

    test ("Invalid strings return error", async () => {
        const params = {
            a: "abc",
            b: "1",
        };

        const response = await add(params);

        expect(response.status).toEqual(401);
        expect(response.body).toHaveProperty("error");
        expect(response.body.error).toEqual("Invalid request");
    });

    test ("Returns correct sum", async () => {
        const params = {
            a: "3",
            b: "1",
        };

        const response = await add(params);

        expect(response.status).toEqual(200);
        expect(response.body).toHaveProperty("result");
        expect(response.body.result).toEqual(4);
    });
});