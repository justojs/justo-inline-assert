//imports
const assert = require("../../../dist/es5/nodejs/justo-inline-assert");

//suite
describe("String", function() {
  var txt;

  before(function() {
    txt = "str";
  });

  describe("#raise()", function() {
    it("raise() : false", function() {
      assert.raise(txt).should.be.equal(true);
    });
  });

  describe("#like()", function() {
    it("like(string, re) - pass", function() {
      assert.like("The National", /ati/).should.be.equal(true);
    });

    it("like(string, re) - fail", function() {
      assert.like("The National", /nada/).should.be.equal(false);
    });
  });

  describe("#notLike()", function() {
    it("notLike(string, re) - pass", function() {
      assert.notLike("The National", /nada/).should.be.equal(true);
    });

    it("notLike(string, re) - fail", function() {
      assert.notLike("The National", /ion/).should.be.equal(false);
    });
  });

  describe("#contain()", function() {
    it("contain(string, string) - 1st item - pass", function() {
      assert.contain("abc", "a").should.be.equal(true);
    });

    it("contain(string, string) - another item - pass", function() {
      assert.contain("abc", "b").should.be.equal(true);
    });

    it("contain(string, string) - fail", function() {
      assert.contain("abc", "d").should.be.equal(false);
    });
  });

  describe("#notContain()", function() {
    it("notContain(string, string) - start - fail", function() {
      assert.notContain("abc", "a").should.be.equal(false);
    });

    it("notCntain(string, string) - middle - fail", function() {
      assert.notContain("abc", "b").should.be.equal(false);
    });

    it("notContain(string, string) - end - fail", function() {
      assert.notContain("abc", "c").should.be.equal(false);
    });

    it("notContain(string, string) - pass", function() {
      assert.notContain("abc", "d").should.be.equal(true);
    });
  });

  describe("#insideOf()", function() {
    it("insideOf(string, string) - pass", function() {
      assert.insideOf("ion", "The National").should.be.equal(true);
    });

    it("insideOf(string, string) - fail", function() {
      assert.insideOf("nada", "The National").should.be.equal(false);
    });

    it("insideOf(string, '') - always fail", function() {
      assert.insideOf("The National", "").should.be.equal(false);
    });

    it("insideOf(string, object[]) - pass", function() {
      assert.insideOf("The National", [0, "The National", 2]).should.be.equal(true);
    });

    it("insideOf(string, object[]) - fail", function() {
      assert.insideOf("The National", [0, 1, 2, 3]).should.be.equal(false);
    });

    it("insideOf(string, []) - always fail", function() {
      assert.insideOf("The National", []).should.be.equal(false);
    });
  });

  describe("#notInsideOf()", function() {
    it("notInsideOf(string, string) - pass", function() {
      assert.notInsideOf("nada", "The National").should.be.equal(true);
    });

    it("notInsideOf(string, array) - pass", function() {
      assert.notInsideOf(["nada"], "The National").should.be.equal(true);
    });

    it("notInsideOf(string, string) - fail", function() {
      assert.notInsideOf("ion", "The National").should.be.equal(false);
    });

    it("notInsideOf(string, array) - fail", function() {
      assert.notInsideOf(["ion"], "The National").should.be.equal(false);
    });
  });

  describe("#equal()", function() {
    it("equal(string, string) - pass", function() {
      assert.equal("one", "one").should.be.equal(true);
    });

    it("equal(string, string) - fail", function() {
      assert.equal("one", "two").should.be.equal(false);
    });

    it("equal(string, number) - pass", function() {
      assert.equal("123", 123).should.be.equal(true);
    });

    it("equal(string, number) - fail", function() {
      assert.equal("321", 123).should.be.equal(false);
    });

    it("equal(string, boolean) - always fail", function() {
      assert.equal("true", true).should.be.equal(false);
    });

    it("be.equal(string, object) - always fail", function() {
      assert.equal("{x: 1, y: 2}", {x: 1, y: 2}).should.be.equal(false);
    });
  });

  describe("#notEqual()", function() {
    it("notEqual(string, string) - pass", function() {
      assert.notEqual("one", "two").should.be.equal(true);
    });

    it("notEqual(string, string) - fail", function() {
      assert.notEqual("one", "one").should.be.equal(false);
    });

    it("notEqual(string, number) - pass", function() {
      assert.notEqual("123", 321).should.be.equal(true);
    });

    it("notEqual(string, number) - fail", function() {
      assert.notEqual("123", 123).should.be.equal(false);
    });

    it("notEqual(boolean) - always pass", function() {
      assert.notEqual("true", true).should.be.equal(true);
    });

    it("notEqual(string, object) - always pass", function() {
      assert.notEqual("{x: 1, y: 2}", {x: 1, y: 2}).should.be.equal(true);
    });
  });

  describe("#same()", function() {
    it("same(string, string) - pass", function() {
      assert.same("one", "one").should.be.equal(true);
    });

    it("same(string, string) - fail", function() {
      assert.same("one", "two").should.be.equal(false);
    });

    it("same(string, number) - always fail", function() {
      assert.same("123", 123).should.be.equal(false);
    });

    it("same(string, boolean) - always fail", function() {
      assert.same("true", true).should.be.equal(false);
    });

    it("same(string, object) - always fail", function() {
      assert.same("{x: 1, y: 2}", {x: 1, y: 2}).should.be.equal(false);
    });
  });

  describe("#notSame()", function() {
    it("notSame(string, string) - pass", function() {
      assert.notSame("true", "false").should.be.equal(true);
    });

    it("notSame(string, string) - fail", function() {
      assert.notSame("true", "true").should.be.equal(false);
    });

    it("notSame(string, number) - always pass", function() {
      assert.notSame("123", 123).should.be.equal(true);
    });

    it("notSame(string, boolean) - always pass`", function() {
      assert.notSame("true", true).should.be.equal(true);
    });

    it("notSame(string, object) - always pass", function() {
      assert.notSame("{x: 1, y: 2}", {x: 1, y: 2}).should.be.equal(true);
    });
  });

  describe("#between()", function() {
    it("between(value, left, right) - pass", function() {
      assert.between("b", "a", "c").should.be.equal(true);
    });

    it("between(value, left, right) - fail", function() {
      assert.between("d", "a", "c").should.be.equal(false);
    });
  });

  describe("#notBetween()", function() {
    it("notBetween(value, left, right) - pass", function() {
      assert.notBetween("d", "a", "c").should.be.equal(true);
    });

    it("notBetween(value, left, right) - fail", function() {
      assert.notBetween("b", "a", "c").should.be.equal(false);
    });
  });

  describe("#lessThan()", function() {
    it("lessThan(string, string) - pass", function() {
      assert.lessThan("a", "b").should.be.equal(true);
    });

    it("lessThan(string, string) - fail", function() {
      assert.lessThan("b", "a").should.be.equal(false);
    });
  });

  describe("#notLessThan()", function() {
    it("notLessThan(string, string) - pass", function() {
      assert.notLessThan("b", "a").should.be.equal(true);
    });

    it("notLessThan(string, string) - fail", function() {
      assert.notLessThan("a", "b").should.be.equal(false);
    });
  });

  describe("#greaterThan()", function() {
    it("greaterThan(string, string) - pass", function() {
      assert.greaterThan("b", "a").should.be.equal(true);
    });

    it("greaterThan(string, string) - fail", function() {
      assert.greaterThan("a", "b").should.be.equal(false);
    });
  });

  describe("#notGreaterThan()", function() {
    it("notGreaterThan(string, string) - pass", function() {
      assert.notGreaterThan("a", "b").should.be.equal(true);
    });

    it("notGreaterThan(string, string) - fail", function() {
      assert.notGreaterThan("b", "a").should.be.equal(false);
    });
  });

  describe("#instanceOf()", function() {
    it("instanceOf(string, string) - pass", function() {
      assert.instanceOf("The National", "String").should.be.equal(true);
    });

    it("instanceOf(string, string) - fail", function() {
      assert.instanceOf("The National", "Number").should.be.equal(false);
    });

    it("instanceOf(string, class) - pass", function() {
      assert.instanceOf("The National", String).should.be.equal(true);
    });

    it("instanceOf(string, class) - fail", function() {
      assert.instanceOf("The National", Number).should.be.equal(false);
    });

    it("instanceOf(string, object) - always fail", function() {
      assert.instanceOf("The National", {}).should.be.equal(false);
    });
  });

  describe("#notInstanceOf()", function() {
    it("notInstanceOf(string, string) - fail", function() {
      assert.notInstanceOf("The National", "Number").should.be.equal(true);
    });

    it("notInstanceOf(string, string) - pass", function() {
      assert.notInstanceOf("The National", "String").should.be.equal(false);
    });

    it("notInstanceOf(string, class) - fail", function() {
      assert.notInstanceOf("The National", Number).should.be.equal(true);
    });

    it("notInstanceOf(string, class) - pass", function() {
      assert.notInstanceOf("The National", String).should.be.equal(false);
    });

    it("notInstanceOf(string, object) - always pass", function() {
      assert.notInstanceOf("The National", {}).should.be.equal(true);
    });
  });

  describe("#have()", function() {
    it("have(string, string) - pass", function() {
      assert.have("The National", "length").should.be.equal(true);
    });

    it("have(string, string) - fail", function() {
      assert.have("The National", "count").should.be.equal(false);
    });

    it("have(string, string[]) - pass", function() {
      assert.have("The National", ["length"]).should.be.equal(true);
    });

    it("have(string, string[]) - fail", function() {
      assert.have("The National", ["count"]).should.be.equal(false);
    });

    it("have(string, []) - always fail", function() {
      assert.have("The national", []).should.be.equal(false);
    });

    it("have(string, object) - pass", function() {
      assert.have("The National", {length: 12}).should.be.equal(true);
    });

    it("have(string, object) - fail", function() {
      assert.have("The National", {length: 11}).should.be.equal(false);
    });

    it("have(string, {}) - always fail", function() {
      assert.have("The National", {}).should.be.equal(false);
    });
  });

  describe("#notHave()", function() {
    it("notHave(string, string) - pass", function() {
      assert.notHave("The National", "count").should.be.equal(true);
    });

    it("notHave(string, string) - fail", function() {
      assert.notHave("The National", "length").should.be.equal(false);
    });

    it("notHave(string, string[]) - pass", function() {
      assert.notHave("The National", ["count"]).should.be.equal(true);
    });

    it("notHave(string, string[]) - fail", function() {
      assert.notHave("The National", ["length"]).should.be.equal(false);
    });

    it("notHave(string, []) - always pass", function() {
      assert.notHave("The national", []).should.be.equal(true);
    });

    it("notHave(string, object) - pass", function() {
      assert.notHave("The National", {length: 11}).should.be.equal(true);
    });

    it("notHave(string, object) - fail", function() {
      assert.notHave("The National", {length: 12}).should.be.equal(false);
    });

    it("notHave(string, {}) - always pass", function() {
      assert.notHave("The National", {}).should.be.equal(true);
    });
  });

  describe("#haveAny()", function() {
    it("haveAny(string, string[]) - pass", function() {
      assert.haveAny("The National", ["length"]).should.be.equal(true);
    });

    it("haveAny(string, string[]) - fail", function() {
      assert.haveAny("The National", ["count"]).should.be.equal(false);
    });

    it("haveAny(string, []) - always fail", function() {
      assert.haveAny("The National", []).should.be.equal(false);
    });

    it("haveAny(string, object) - pass", function() {
      assert.haveAny("The National", {length: 12}).should.be.equal(true);
    });

    it("haveAny(string, object) - fail", function() {
      assert.haveAny("The National", {length: 11}).should.be.equal(false);
    });

    it("haveAny(string, {}) - always fail", function() {
      assert.haveAny("The National", {}).should.be.equal(false);
    });
  });

  describe("#allHave()", function() {
    it("allHave(string, string) - always fail", function() {
      assert.allHave("The National", "length").should.be.equal(false);
    });

    it("allHave(string, string[]) - always fail", function() {
      assert.allHave("The National", ["length"]).should.be.equal(false);
    });

    it("allHave(string, []) - always fail", function() {
      assert.allHave("The National", []).should.be.equal(false);
    });

    it("allHave(string, object) - always fail", function() {
      assert.allHave("The National", {length: 1}).should.be.equal(false);
    });

    it("allHave(string, {}) - always fail", function() {
      assert.allHave("The National", {}).should.be.equal(false);
    });
  });

  describe("#notAllHave()", function() {
    it("notAllHave(string, string) - always pass", function() {
      assert.notAllHave("The National", "length").should.be.equal(true);
    });

    it("notAllHave(string, string[]) - always pass", function() {
      assert.notAllHave("The National", ["length"]).should.be.equal(true);
    });

    it("notAllHave(string, []) - always pass", function() {
      assert.notAllHave("The National", []).should.be.equal(true);
    });

    it("notAllHave(string, object) - always pass", function() {
      assert.notAllHave("The National", {length: 1}).should.be.equal(true);
    });

    it("notAllHave(string, {}) - always pass", function() {
      assert.notAllHave("The National", {}).should.be.equal(true);
    });
  });
});
