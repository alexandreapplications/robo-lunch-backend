const CartService = require("./cartService");
describe("Cart service tests", () => {
  test("Method create Should call repository", () => {
    const mockedItem = {
      status: 200,
      status_text: "OK",
      data: {
        status: "open",
        userId: "",
        timestamp: "",
        items: [],
        id: 1,
      },
    };
    const dependences = {
      cartRepository: {
        insert: () =>
          new Promise((resolve) => {
            resolve(mockedItem);
          }),
      },
    };

    const cartService = CartService(dependences);

    const pr = cartService.create("Teste");

    expect(pr).resolves.toStrictEqual(mockedItem);
  });

  test("Method getSingle Should call repository", () => {
    const mockedItem = {
      status: 200,
      status_text: "OK",
      data: {
        status: "open",
        userId: "",
        timestamp: "",
        items: [],
        id: 1,
      },
    };
    const dependences = {
      cartRepository: {
        getSingle: () =>
          new Promise((resolve) => {
            resolve(mockedItem);
          }),
      },
    };

    const cartService = CartService(dependences);

    const pr = cartService.getSingle("Teste", 1);

    expect(pr).resolves.toStrictEqual(mockedItem);
  });
});
