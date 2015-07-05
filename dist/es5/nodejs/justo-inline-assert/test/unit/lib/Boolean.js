//imports
const assert = require("../../../dist/es5/nodejs/justo-inline-assert");

//suite
describe("Boolean", function() {
  describe("#raise()", function() {
    it("raise() - always pass", function() {
      assert.raise(true).should.be.equal(true);
    });
  });

  describe("#contain()", function() {
    it("contain(boolean, object) - always fail", function() {
      assert.contain(true, "x").should.be.equal(false);
    });
  });

  describe("#notContain()", function() {
    it("notContain(boolean, object) - always pass", function() {
      assert.notContain(true, "x").should.be.equal(true);
    });
  });

  describe("#insideOf()", function() {
    it("insideOf(boolean, object[]) - pass", function() {
      assert.insideOf(true, [true, false]).should.be.equal(true);
    });

    it("insideOf(boolean, object[]) - fail", function() {
      assert.insideOf(true, [false]).should.be.equal(false);
    });

    it("insideOf(boolean, []) - always fail", function() {
      assert.insideOf(true, []).should.be.equal(false);
    });
  });

  describe("#notInsideOf()", function() {
    it("notInsideOf(boolean, object[]) - fail", function() {
      assert.notInsideOf(true, [true, false]).should.be.equal(false);
    });

    it("notInsideOf(boolean, object[]) - pass", function() {
      assert.notInsideOf(true, [false]).should.be.equal(true);
    });

    it("notInsideOf(boolean, []) - always pass", function() {
      assert.notInsideOf(true, []).should.be.equal(true);
    });
  });

  describe("#equal()", function() {
    it("equal(boolean, boolean) - pass", function() {
      assert.equal(true, true).should.be.equal(true);
    });

    it("equal(boolean, boolean) - fail", function() {
      assert.equal(true, false).should.be.equal(false);
    });

    it("equal(boolean, string) - always fail", function() {
      assert.equal(true, "true").should.be.equal(false);
    });

    it("equal(boolean, number) - pass", function() {
      assert.equal(true, 1).should.be.equal(true);
    });

    it("equal(boolean, number) - fail", function() {
      assert.equal(true, 0).should.be.equal(false);
    });

    it("equal(object) - always fail", function() {
      assert.equal(false, {}).should.be.equal(false);
    });
  });

  describe("#equal()", function() {
    it("notEqual(boolean, boolean) - fail", function() {
      assert.notEqual(true, true).should.be.equal(false);
    });

    it("notEqual(boolean, boolean) - pass", function() {
      assert.notEqual(true, false).should.be.equal(true);
    });

    it("notEqual(boolean, string) - always pass", function() {
      assert.notEqual(true, "true").should.be.equal(true);
    });

    it("notEqual(boolean, number) - fail", function() {
      assert.notEqual(true, 1).should.be.equal(false);
    });

    it("notEqual(boolean, number) - true", function() {
      assert.notEqual(true, 0).should.be.equal(true);
    });

    it("notEqual(object) - always pass", function() {
      assert.notEqual(false, {}).should.be.equal(true);
    });
  });

  describe("#same()", function() {
    it("same(boolean, boolean) - pass", function() {
      assert.same(true, true).should.be.equal(true);
    });

    it("same(boolean, boolean) - fail", function() {
      assert.same(true, false).should.be.equal(false);
    });

    it("same(boolean, number) - always fail", function() {
      assert.same(true, 1).should.be.equal(false);
    });

    it("same(boolean, string) - always fail", function() {
      assert.same(true, "true").should.be.equal(false);
    });

    it("same(boolean, object) - always fail", function() {
      assert.same(false, {}).should.be.equal(false);
    });
  });

  describe("#notSame()", function() {
    it("notSame(boolean, boolean) - fail", function() {
      assert.notSame(true, true).should.be.equal(false);
    });

    it("notSame(boolean, boolean) - pass", function() {
      assert.notSame(true, false).should.be.equal(true);
    });

    it("notSame(boolean, number) - always pass", function() {
      assert.notSame(true, 1).should.be.equal(true);
    });

    it("notSame(boolean, string) - always pass", function() {
      assert.notSame(true, "true").should.be.equal(true);
    });

    it("notSame(boolean, object) - always pass", function() {
      assert.notSame(false, {}).should.be.equal(true);
    });
  });

  describe("#between()", function() {
    it("between(boolean, left, right) - pass", function() {
      assert.between(true, -1, 1).should.be.equal(true);
    });

    it("between(boolean, left, right) - fail", function() {
      assert.between(true, 10, 20).should.be.equal(false);
    });
  });

  describe("#notBetween()", function() {
    it("notBetween(boolean, left, right) - fail", function() {
      assert.notBetween(true, -1, 1).should.be.equal(false);
    });

    it("notBetween(boolean, left, right) - pass", function() {
      assert.notBetween(true, 10, 20).should.be.equal(true);
    });
  });

  describe("#lessThan()", function() {
    it("lessThan(boolean, bound) - pass", function() {
      assert.lessThan(true, 2).should.be.equal(true);
    });

    it("lessThan(boolean, bound) - fail", function() {
      assert.lessThan(true, 1).should.be.equal(false);
    });
  });

  describe("#notLessThan()", function() {
    it("notLessThan(boolean, bound) - fail", function() {
      assert.notLessThan(true, 2).should.be.equal(false);
    });

    it("notLessThan(boolean, bound) - pass", function() {
      assert.notLessThan(true, 1).should.be.equal(true);
    });
  });

  describe("#greaterThan()", function() {
    it("greaterThan(boolean, bound) - pass", function() {
      assert.greaterThan(true, 0).should.be.equal(true);
    });

    it("greaterThan(boolean, bound) - fail", function() {
      assert.greaterThan(true, 1).should.be.equal(false);
    });
  });

  describe("#notGreaterThan()", function() {
    it("notGreaterThan(boolean, bound) - fail", function() {
      assert.notGreaterThan(true, 0).should.be.equal(false);
    });

    it("notGreaterThan(boolean, bound) - pass", function() {
      assert.notGreaterThan(true, 1).should.be.equal(true);
    });
  });

  describe("#instanceOf()", function() {
    it("instanceOf(boolean, string) - pass", function() {
      assert.instanceOf(true, "Boolean").should.be.equal(true);
    });

    it("instanceOf(boolean, string) - fail", function() {
      assert.instanceOf(true, "Number").should.be.equal(false);
    });

    it("instanceOf(boolean, class) - pass", function() {
      assert.instanceOf(true, Boolean).should.be.equal(true);
    });

    it("instanceOf(boolean, class) - fail", function() {
      assert.instanceOf(true, Number).should.be.equal(false);
    });

    it("instanceOf(boolean, Object) - always fail", function() {
      assert.instanceOf(true, {}).should.be.equal(false);
    });
  });

  describe("#notInstanceOf()", function() {
    it("notInstanceOf(boolean, string) - fail", function() {
      assert.notInstanceOf(true, "Boolean").should.be.equal(false);
    });

    it("notInstanceOf(boolean, string) - pass", function() {
      assert.notInstanceOf(true, "Number").should.be.equal(true);
    });

    it("notInstanceOf(boolean, class) - fail", function() {
      assert.notInstanceOf(true, Boolean).should.be.equal(false);
    });

    it("notInstanceOf(boolean, class) - pass", function() {
      assert.notInstanceOf(true, Number).should.be.equal(true);
    });

    it("notInstanceOf(boolean, Object) - always pass", function() {
      assert.notInstanceOf(true, {}).should.be.equal(true);
    });
  });

  describe("#have()", function() {
    it("have(boolean, string) - always fail", function() {
      assert.have(true, "value").should.be.equal(false);
    });

    it("have(boolean, string[]) - always fail", function() {
      assert.have(true, ["value"]).should.be.equal(false);
    });

    it("have(boolean, []) - always fail", function() {
      assert.have(true, []).should.be.equal(false);
    });

    it("have(boolean, object) - always fail", function() {
      assert.have(true, {value: true}).should.be.equal(false);
    });

    it("have(boolean, {}) - always fail", function() {
      assert.have(true, {}).should.be.equal(false);
    });
  });

  describe("#notHave()", function() {
    it("notHave(boolean, string) - always pass", function() {
      assert.notHave(true, "value").should.be.equal(true);
    });

    it("notHave(boolean, string[]) - always pass", function() {
      assert.notHave(true, ["value"]).should.be.equal(true);
    });

    it("notHave(boolean, []) - always pass", function() {
      assert.notHave(true, []).should.be.equal(true);
    });

    it("notHave(boolean, object) - always pass", function() {
      assert.notHave(true, {value: false}).should.be.equal(true);
    });

    it("notHave(boolean, {}) - always pass", function() {
      assert.notHave(true, {}).should.be.equal(true);
    });
  });

  describe("#haveAny()", function() {
    it("haveAny(boolean, string[]) - always fail", function() {
      assert.haveAny(true, ["value"]).should.be.equal(false);
    });

    it("haveAny(boolean, []) - always fail", function() {
      assert.haveAny(true, []).should.be.equal(false);
    });

    it("haveAny(boolean, object) - always fail", function() {
      assert.haveAny(true, {value: true}).should.be.equal(false);
    });

    it("haveAny(boolean, {}) - always fail", function() {
      assert.haveAny(true, {}).should.be.equal(false);
    });
  });

  describe("#allHave()", function() {
    it("allHave(boolean, string) - always fail", function() {
      assert.allHave(true, "value").should.be.equal(false);
    });

    it("allHave(boolean, string[]) - always fail", function() {
      assert.allHave(true, ["value"]).should.be.equal(false);
    });

    it("allHave(boolean, []) - always fail", function() {
      assert.allHave(true, []).should.be.equal(false);
    });

    it("allHave(boolean, object) - always fail", function() {
      assert.allHave(true, {value: true}).should.be.equal(false);
    });

    it("allHave(boolean, {}) - always fail", function() {
      assert.allHave(true, {}).should.be.equal(false);
    });
  });

  describe("#notAllHave()", function() {
    it("notAllHave(boolean, string) - always pass", function() {
      assert.notAllHave(true, "value").should.be.equal(true);
    });

    it("notAllHave(boolean, string[]) - always pass", function() {
      assert.notAllHave(true, ["value"]).should.be.equal(true);
    });

    it("notAllHave(boolean, []) - always pass", function() {
      assert.notAllHave(true, []).should.be.equal(true);
    });

    it("allHave(boolean, object) - always pass", function() {
      assert.notAllHave(true, {value: true}).should.be.equal(true);
    });

    it("notAllHave(boolean, {}) - always pass", function() {
      assert.notAllHave(true, {}).should.be.equal(true);
    });
  });
});
