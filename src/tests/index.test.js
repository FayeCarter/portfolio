const request = require("supertest");
const app = require("../../index");

describe("Test the api path", () => {

  afterEach(() => app.close());
  
  test("It should response the GET method", done => {
    request(app)
      .get("/api")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toEqual("success");
        expect(response.body.message).toEqual("Running");
        done();
      });
  });
});