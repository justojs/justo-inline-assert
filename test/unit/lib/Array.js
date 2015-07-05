//imports
const assert = require("../../../dist/es5/nodejs/justo-inline-assert");

//suite
describe("Array", function() {
  const arr = ["one", "two", "three"];

  describe("#contain()", function() {
    it("contain(array, item) - first - pass", function() {
      assert.contain(["one", "two", "three"], "one").should.be.equal(true);
    });

    it("contain(array, item) - middle - pass)", function() {
      assert.contain(["one", "two", "three"], "two").should.be.equal(true);
    });

    it("contain(array, item) - last - pass", function() {
      assert.contain(["one", "two", "three"], "three").should.be.equal(true);
    });

    it("contain(array, item) - fail", function() {
      assert.contain(["one", "two", "three"], "four").should.be.equal(false);
    });
  });

  describe("#notContain()", function() {
    it("notContain(array, item) - pass", function() {
      assert.notContain([1, 2, 3], 4).should.be.equal(true);
    });

    it("notContain(array, item) - first - fail", function() {
      assert.notContain([1, 2, 3], 1).should.be.equal(false);
    });

    it("notContain(array, item) - middle - fail", function() {
      assert.notContain([1, 2, 3], 2).should.be.equal(false);
    });

    it("notContain(array, item) - last - fail", function() {
      assert.notContain([1, 2, 3], 3).should.be.equal(false);
    });
  });

  describe("#insideOf()", function() {
    it("insideOf(array, array) - first - pass", function() {
      assert.insideOf([1, 2, 3], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]).should.be.equal(true);
    });

    it("insideOf(array, array) - middle - pass", function() {
      assert.insideOf([4, 5, 6], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]).should.be.equal(true);
    });

    it("insideOf(array, array) - last - pass", function() {
      assert.insideOf([4, 5, 6], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]).should.be.equal(true);
    });

    it("insideOf(array, array) - fail", function() {
      assert.insideOf([1, 3, 5], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]).should.be.equal(false);
    });

    it("insideOf(array, []) - always fail", function() {
      assert.insideOf([1, 2, 3], []).should.be.equal(false);
    });
  });

  describe("#notInsideOf()", function() {
    it("notInsideOf(array, array) - first - fail", function() {
      assert.notInsideOf([1, 2, 3], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]).should.be.equal(false);
    });

    it("notInsideOf(array, array) - middle - fail", function() {
      assert.notInsideOf([4, 5, 6], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]).should.be.equal(false);
    });

    it("notInsideOf(array, array) - last - fail", function() {
      assert.notInsideOf([4, 5, 6], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]).should.be.equal(false);
    });

    it("notInsideOf(array, array) - pass", function() {
      assert.notInsideOf([1, 3, 5], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]).should.be.equal(true);
    });

    it("notInsideOf(array, []) - pass", function() {
      assert.notInsideOf([1, 2, 3], []).should.be.equal(true);
    });
  });

  describe("#allHave()", function() {
    it("allHave(string[], string) - pass", function() {
      assert.allHave(["x", "y"], "length").should.be.equal(true);
    });

    it("allHave(string[], string) - fail", function() {
      assert.allHave(["x", "y"], "count").should.be.equal(false);
    });

    it("allHave(string[], string[]) - pass", function() {
      assert.allHave(["x", "y"], ["length"]).should.be.equal(true);
    });

    it("allHave(string[], string[]) - fail", function() {
      assert.allHave(["x", "y"], ["count"]).should.be.equal(false);
    });

    it("allHave(string[], object) - pass", function() {
      assert.allHave(["x", "y"], {length: 1}).should.be.equal(true);
    });

    it("allHave(string[], object) - fail", function() {
      assert.allHave(["x", "y"], {length: 2}).should.be.equal(false);
    });
  });

  describe("#notAllHave()", function() {
    it("notAllHave(string[], string) - fail", function() {
      assert.notAllHave(["x", "y"], "length").should.be.equal(false);
    });

    it("notAllHave(string[], string) - pass", function() {
      assert.notAllHave(["x", "y"], "count").should.be.equal(true);
    });

    it("notAllHave(string[], string[]) - fail", function() {
      assert.notAllHave(["x", "y"], ["length"]).should.be.equal(false);
    });

    it("notAllHave(string[], string[]) - pass", function() {
      assert.notAllHave(["x", "y"], ["count"]).should.be.equal(true);
    });

    it("notAllHave(string[], object) - fail", function() {
      assert.notAllHave(["x", "y"], {length: 1}).should.be.equal(false);
    });

    it("notAllHave(string[], object) - pass", function() {
      assert.notAllHave(["x", "y"], {length: 2}).should.be.equal(true);
    });
  });
});
