const { expect } = require("chai");
const processor = require("../../../lib/processors/eta");

describe("processor", () => {
  describe("preprocess", () => {
    it("should not crash", () => {
      processor.preprocess("Foo!");
    });
    it("should not crash on an empty string", () => {
      processor.preprocess("");
    });
    it("should not ignore normal text", () => {
      expect(processor.preprocess("Foo!")[0].text).to.equal("");
    });
    it("should return an array", () => {
      expect(typeof processor.preprocess("Foo!") === "object");
    });
    it("should properly preprocess", () => {
      expect(processor.preprocess("Hello <%= it.name %>")[0].text).to.equal(
        "it.name"
      );
    });
    it("should properly preprocess", () => {
      expect(
        processor.preprocess(
          "<% const name = 'bill'; %>\nHello <%= name %>.\nMy name is <%= it.name %>"
        )[0].text
      ).to.equal("const name = 'bill';\nname\nit.name");
    });
  });
  describe("postprocess", () => {});
});
