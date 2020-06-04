const apiUtils = require("./apiUtils");
describe("Handle response tests", () => {
  test("handleResponse should handle correctly", () => {
    const pr2 = new Promise((resolve, reject) => {
      const pr = new Promise((resolve) => {
        resolve({
          status: "200",
          status_text: "OK",
          data: "Abcd",
          teste: "Teste",
        });
      });
      apiUtils.handleResponse(pr, resolve, reject);
    });

    expect(pr2).resolves.toStrictEqual({
      status: "200",
      status_text: "OK",
      data: "Abcd",
    });
  });

  test("handleResponse should handle error correctly", () => {
    const pr2 = new Promise((resolve, reject) => {
      const pr = new Promise((resolve, reject) => {
        reject({
          response: {
            status: "404",
            status_text: "Not found",
          },
        });
      });
      apiUtils.handleResponse(pr, resolve, reject);
    });

    expect(pr2).rejects.toStrictEqual({
      status: "404",
      status_text: "Not found",
    });
  });
});
