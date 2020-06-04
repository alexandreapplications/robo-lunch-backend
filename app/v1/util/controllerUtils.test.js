const controllerUtils = require("./controllerUtils");
describe("Controller Utils Test", () => {
  test("handleServiceResponse should handle correctly", () => {
    var res = {
      value: {
        status: "",
        data: "",
      },
      status: (value) => {
        res.value.status = value;
        return res;
      },
      send: (value) => {
        res.value.data = value;
        return res;
      },
    };
    controllerUtils.handleServiceResponse(
      { status: "200", data: { a: 1 } },
      res
    );

    expect(res.value.status).toBe("200");
    expect(res.value.data).toStrictEqual({ a: 1 });
  });

  test("handleServiceResponse should handle correctly", () => {
    var res = {
      value: {
        status: "",
        data: "",
      },
      status: (value) => {
        res.value.status = value;
        return res;
      },
      send: (value) => {
        res.value.data = value;
        return res;
      },
    };
    controllerUtils.handleServiceResponse(
      { status: "404", data: { a: 1 } },
      res
    );

    expect(res.value.status).toBe("404");
    expect(res.value.data).toStrictEqual({ a: 1 });
  });
});
