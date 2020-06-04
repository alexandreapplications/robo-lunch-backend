const axios = require("axios");
const cartRepository = require("./cartRepository");

jest.mock("axios");

describe("Testing card repository", function () {
  describe("getSingle", () => {
    test("getSingle should work", () => {
      axios.get.mockResolvedValue({
        status: 200,
        status_text: "OK",
        data: "hello",
      });

      const dependences = {
        axios,
      };

      let cr = cartRepository(dependences);
      var resposta = cr.getSingle("TTT", 12);
      expect(resposta).resolves.toStrictEqual({
        status: 200,
        status_text: "OK",
        data: "hello",
      });
    });

    test("getSingle when reject", () => {
      axios.get.mockRejectedValue({
        response: {
          status: 404,
          status_text: "Not Found",
        },
      });

      const dependences = {
        axios,
      };

      let cr = cartRepository(dependences);
      var resposta = cr.getSingle("TTT", 14);
      expect(resposta).rejects.toStrictEqual({
        status: 404,
        status_text: "Not Found",
      });
    });
  });

  describe("insert", () => {
    test("insert should work", () => {
      axios.post.mockResolvedValue({
        status: 200,
        status_text: "OK",
        data: {
          status: "open",
          userId: "",
          timestamp: "",
          items: [],
          id: 1,
        },
      });

      const dependences = {
        axios,
      };

      let cr = cartRepository(dependences);
      var resposta = cr.insert("TTT");
      expect(resposta).resolves.toStrictEqual({
        status: 200,
        status_text: "OK",
        data: {
          status: "open",
          userId: "",
          timestamp: "",
          items: [],
          id: 1,
        },
      });
    });
  });
});
