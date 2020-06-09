describe("Cart Router Test", () => {
  test("Routes for cart are been created well", () => {
    const router = {
      post: (x, y) => {
        router.data.post.push(x);
      },
      get: (x, y) => {
        router.data.get.push(x);
      },
      data: {
        post: [],
        get: [],
      },
    };
    const dependences = {
      express: {
        Router: () => router,
      },
    };
    require("./cartRouter")(dependences);

    expect(router.data.post.filter((x) => x === "/").length).toBe(1);
    expect(router.data.get.filter((x) => x === "/:id").length).toBe(1);
    expect(
      router.data.get.filter((x) => x === "/getByStatus/:status").length
    ).toBe(1);
  });
});
