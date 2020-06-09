var CartController = require("./cartController");

describe("Card controller", () => {
  describe("insert", () => {
    test("create method should call service", async () => {
      var dependences = {
        cartService: {
          create: jest.fn().mockResolvedValue({
            status: "200",
            status_text: "OK",
            data: "hello",
          }),
        },
      };
      const cartController = CartController(dependences);

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

      await cartController.create(null, res);

      expect(res.value).toStrictEqual({ status: "200", data: "hello" });

      //cart
    });

    test("Create method should call error when not found", async () => {
      var dependences = {
        cartService: {
          create: jest.fn().mockRejectedValue({
            status: "404",
            status_text: "Not found",
            data: "Not found",
          }),
        },
      };
      const cartController = CartController(dependences);

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

      await cartController.create(null, res);

      expect(res.value).toStrictEqual({ data: "Not found", status: "404" });

      //cart
    });
  });

  describe("getSingle", () => {
    test("create method should call service", async () => {
      var dependences = {
        cartService: {
          getSingle: jest.fn().mockResolvedValue({
            status: "200",
            status_text: "OK",
            data: "hello",
          }),
        },
      };
      const cartController = CartController(dependences);

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

      const req = {
        params: {
          id: "12",
        },
      };

      await cartController.getSingle(req, res);

      expect(res.value).toStrictEqual({ status: "200", data: "hello" });

      //cart
    });
    test("Requested data wasn't found", async () => {
      var dependences = {
        cartService: {
          getSingle: jest.fn().mockRejectedValue({
            status: "404",
            status_text: "Not found",
          }),
        },
      };
      const cartController = CartController(dependences);

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

      const req = {
        params: {
          id: "12",
        },
      };

      await cartController.getSingle(req, res);

      expect(res.value).toStrictEqual({
        data: undefined,
        status: "404",
      });

      //cart
    });
  });
});
