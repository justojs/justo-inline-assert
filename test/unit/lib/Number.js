//imports
const assert = require("../../../dist/es5/nodejs/justo-inline-assert");

//suite
describe("Number", function() {
  describe("#raise()", function() {
    it("raise() - true", function() {
      assert.raise(1).should.be.equal(true);
    });
  });

  describe("#contain()", function() {
    it("contain(number, item) - always fail", function() {
      assert.contain(1, 1).should.be.equal(false);
    });
  });

  describe("#notContain()", function() {
    it("notContain() - always pass", function() {
      assert.notContain(1, 2).should.be.equal(true);
    });
  });

  describe("#insideOf()", function() {
    it("insideOf(number, array) - first - pass", function() {
      assert.insideOf(123, [123, 456, 789]).should.be.equal(true);
    });

    it("insideOf(number, array) - middle - pass", function() {
      assert.insideOf(456, [123, 456, 789]).should.be.equal(true);
    });

    it("insideOf(number, array) - last -pass", function() {
      assert.insideOf(789, [123, 456, 789]).should.be.equal(true);
    });

    it("insideOf(number, array) - fail", function() {
      assert.insideOf(1, [123, 456, 789]).should.be.equal(false);
    });

    it("insideOf(number, []) - fail", function() {
      assert.insideOf(1, []).should.be.equal(false);
    });
  });

  describe("#notInsideOf()", function() {
    it("notInsideOf(number, array) - first - fail", function() {
      assert.notInsideOf(123, [123, 456, 789]).should.be.equal(false);
    });

    it("notInsideOf(number, array) - middle - fail", function() {
      assert.notInsideOf(456, [123, 456, 789]).should.be.equal(false);
    });

    it("notInsideOf(number, array) - last - fail", function() {
      assert.notInsideOf(789, [123, 456, 789]).should.be.equal(false);
    });

    it("notInsideOf(number, array) - pass", function() {
      assert.notInsideOf(1, [123, 456, 789]).should.be.equal(true);
    });

    it("notInsideOf(number, []) - pass", function() {
      assert.notInsideOf(1, []).should.be.equal(true);
    });
  });

  describe("#equal()", function() {
    it("equal(number, number) - pass", function() {
      assert.equal(1, 1).should.be.equal(true);
    });

    it("equal(number, number) - fail", function() {
      assert.equal(1, 2).should.be.equal(false);
    });

    it("equal(number, string) - pass", function() {
      assert.equal(1, "1").should.be.equal(true);
    });

    it("equal(number, string) - fail", function() {
      assert.equal(1, "2").should.be.equal(false);
    });

    it("be.equal(number, boolean) - pass", function() {
      assert.equal(1, true).should.be.equal(true);
    });

    it("equal(number, boolean) - fail", function() {
      assert.equal(1, false).should.be.equal(false);
    });

    it("equal(object) - always fail", function() {
      assert.equal(0, {}).should.be.equal(false);
    });
  });

  describe("#notEqual()", function() {
    it("notEqual(number, number) - fail", function() {
      assert.notEqual(1, 1).should.be.equal(false);
    });

    it("notEqual(number, number) - pass", function() {
      assert.notEqual(1, 2).should.be.equal(true);
    });

    it("notEqual(number, string) - fail", function() {
      assert.notEqual(1, "1").should.be.equal(false);
    });

    it("notEqual(number, string) - pass", function() {
      assert.notEqual(1, "2").should.be.equal(true);
    });

    it("be.notEqual(number, boolean) - fail", function() {
      assert.notEqual(1, true).should.be.equal(false);
    });

    it("notEqual(number, boolean) - pass", function() {
      assert.notEqual(1, false).should.be.equal(true);
    });

    it("notEqual(object) - always pass", function() {
      assert.notEqual(0, {}).should.be.equal(true);
    });
  });

  describe("#same()", function() {
    it("same(number, number) - pass", function() {
      assert.same(1, 1).should.be.equal(true);
    });

    it("same(number, number) - fail", function() {
      assert.same(1, 2).should.be.equal(false);
    });

    it("same(number, string) - always fail", function() {
      assert.same(1, "1").should.be.equal(false);
    });

    it("same(number, boolean) - always fail", function() {
      assert.same(1, true).should.be.equal(false);
    });

    it("same(number, object) - always fail", function() {
      assert.same(0, {}).should.be.equal(false);
    });
  });

  describe("#notSame()", function() {
    it("notSame(number, number) - fail", function() {
      assert.notSame(1, 1).should.be.equal(false);
    });

    it("notSame(number, number) - pass", function() {
      assert.notSame(1, 2).should.be.equal(true);
    });

    it("notSame(number, string) - always pass", function() {
      assert.notSame(1, "1").should.be.equal(true);
    });

    it("notSame(number, boolean) - always pass", function() {
      assert.notSame(1, true).should.be.equal(true);
    });

    it("notSame(number, object) - always pass", function() {
      assert.notSame(0, {}).should.be.equal(true);
    });
  });

  describe("#between()", function() {
    it("between(number, left, right) - pass", function() {
      assert.between(1, 0, 2).should.be.equal(true);
    });

    it("between(number, left, right) - fail", function() {
      assert.between(111, 0, 2).should.be.equal(false);
    });
  });

  describe("#notBetween()", function() {
    it("notBetween(number, left, right) - fail", function() {
      assert.notBetween(1, 0, 2).should.be.equal(false);
    });

    it("notBetween(number, left, right) - pass", function() {
      assert.notBetween(111, 0, 2).should.be.equal(true);
    });
  });

  describe("#lessThan()", function() {
    it("lessThan(number, bound) - pass", function() {
      assert.lessThan(1, 2).should.be.equal(true);
    });

    it("lessThan(number, bound) - fail", function() {
      assert.lessThan(1, 0).should.be.equal(false);
    });
  });

  describe("#notLessThan()", function() {
    it("notLessThan(number, bound) - fail", function() {
      assert.notLessThan(1, 2).should.be.equal(false);
    });

    it("notLessThan(number, bound) - pass", function() {
      assert.notLessThan(1, 0).should.be.equal(true);
    });
  });

  describe("#greaterThan()", function() {
    it("greaterThan(number, bound) - pass", function() {
      assert.greaterThan(1, 0).should.be.equal(true);
    });

    it("greaterThan(number, bound) - fail", function() {
      assert.greaterThan(0, 1).should.be.equal(false);
    });
  });

  describe("#notGreaterThan()", function() {
    it("notGreaterThan(number, bound) - fail", function() {
      assert.notGreaterThan(1, 0).should.be.equal(false);
    });

    it("notGreaterThan(number, bound) - pass", function() {
      assert.notGreaterThan(0, 1).should.be.equal(true);
    });
  });

  describe("#instanceOf()", function() {
    it("instanceOf(number, string) - pass", function() {
      assert.instanceOf(1, "Number").should.be.equal(true);
    });

    it("instanceOf(number, string) - fail", function() {
      assert.instanceOf(1, "String").should.be.equal(false);
    });

    it("instanceOf(number, class) - pass", function() {
      assert.instanceOf(1, Number).should.be.equal(true);
    });

    it("instanceOf(number, class) - fail", function() {
      assert.instanceOf(1, String).should.be.equal(false);
    });

    it("instanceOf(object) - always fail", function() {
      assert.instanceOf(1, {}).should.be.equal(false);
    });
  });

  describe("#notInstanceOf()", function() {
    it("notInstanceOf(number, string) - fail", function() {
      assert.notInstanceOf(1, "Number").should.be.equal(false);
    });

    it("notInstanceOf(number, string) - pass", function() {
      assert.notInstanceOf(1, "String").should.be.equal(true);
    });

    it("notInstanceOf(number, class) - fail", function() {
      assert.notInstanceOf(1, Number).should.be.equal(false);
    });

    it("notInstanceOf(number, class) - pass", function() {
      assert.notInstanceOf(1, String).should.be.equal(true);
    });

    it("notInstanceOf(object) - always pass", function() {
      assert.notInstanceOf(1, {}).should.be.equal(true);
    });
  });

  describe("#have()", function() {
    it("have(number, string) - always fail", function() {
      assert.have(1, "value").should.be.equal(false);
    });

    it("have(number, string[]) - always fail", function() {
      assert.have(1, ["value"]).should.be.equal(false);
    });

    it("have(number, []) - always fail", function() {
      assert.have(1, []).should.be.equal(false);
    });

    it("have(number, object) - always fail", function() {
      assert.have(1, {value: true}).should.be.equal(false);
    });

    it("have(number, {}) - always fail", function() {
      assert.have(1, {}).should.be.equal(false);
    });
  });

  describe("#notHave()", function() {
    it("notHave(number, string) - always pass", function() {
      assert.notHave(1, "value").should.be.equal(true);
    });

    it("notHave(number, string[]) - always pass", function() {
      assert.notHave(1, ["value"]).should.be.equal(true);
    });

    it("notHave(number, []) - always pass", function() {
      assert.notHave(1, []).should.be.equal(true);
    });

    it("notHave(number, object) - always pass", function() {
      assert.notHave(1, {value: 1}).should.be.equal(true);
    });

    it("notHave(number, {}) - always pass", function() {
      assert.notHave(1, {}).should.be.equal(true);
    });
  });

  describe("#haveAny()", function() {
    it("haveAny(number, string[]) - always fail", function() {
      assert.haveAny(1, ["value"]).should.be.equal(false);
    });

    it("haveAny(number, []) - always fail", function() {
      assert.haveAny(1, []).should.be.equal(false);
    });

    it("haveAny(number, object) - always fail", function() {
      assert.haveAny(1, {value: 1}).should.be.equal(false);
    });

    it("haveAny(number, {}) - always fail", function() {
      assert.haveAny(1, {}).should.be.equal(false);
    });
  });

  describe("#allHave()", function() {
    it("allHave(number, string) - always fail", function() {
      assert.allHave(1, "value").should.be.equal(false);
    });

    it("allHave(number, string[]) - always fail", function() {
      assert.allHave(1, ["value"]).should.be.equal(false);
    });

    it("allHave(number, []) - always fail", function() {
      assert.allHave(1, []).should.be.equal(false);
    });

    it("allHave(number, object) - always fail", function() {
      assert.allHave(1, {value: 1}).should.be.equal(false);
    });

    it("allHave(number, {}) - always fail", function() {
      assert.allHave(1, {}).should.be.equal(false);
    });
  });

  describe("#notAllHave()", function() {
    it("notAllHave(number, string) - always pass", function() {
      assert.notAllHave(1, "value").should.be.equal(true);
    });

    it("notAllHave(number, string[]) - always pass", function() {
      assert.notAllHave(1, ["value"]).should.be.equal(true);
    });

    it("notAllHave(number, []) - always pass", function() {
      assert.notAllHave(1, []).should.be.equal(true);
    });

    it("allHave(number, object) - always pass", function() {
      assert.notAllHave(1, {value: 1}).should.be.equal(true);
    });

    it("notAllHave(number, {}) - always pass", function() {
      assert.notAllHave(1, {}).should.be.equal(true);
    });
  });
});
