//imports
const assert = require("../../../dist/es5/nodejs/justo-inline-assert");

//suite
describe("Common", function() {
  describe("aliases", function() {
    describe("#eq()", function() {
      it("eq() - pass", function() {
        assert.eq(1, 1).should.be.equal(true);
      });

      it("eq() - fail", function() {
        assert.eq(1, 2).should.be.equal(false);
      });
    });

    describe("#neq()", function() {
      it("neq() - pass", function() {
        assert.neq(1, 2).should.be.equal(true);
      });

      it("neq() - fail", function() {
        assert.neq(1, 1).should.be.equal(false);
      });
    });

    describe("#ne()", function() {
      it("ne() - pass", function() {
        assert.ne(1, 2).should.be.equal(true);
      });

      it("ne() - fail", function() {
        assert.ne(1, 1).should.be.equal(false);
      });
    });

    describe("#lt()", function() {
      it("lt() - pass", function() {
        assert.lt(1, 2).should.be.equal(true);
      });

      it("lt() - fail", function() {
        assert.lt(2, 1).should.be.equal(false);
      });
    });

    describe("#nlt()", function() {
      it("nlt() - pass", function() {
        assert.nlt(1, 0).should.be.equal(true);
      });

      it("nlt() - fail", function() {
        assert.nlt(0, 1).should.be.equal(false);
      });
    });

    describe("#gt()", function() {
      it("gt() - pass", function() {
        assert.gt(1, 0).should.be.equal(true);
      });

      it("gt() - fail", function() {
        assert.gt(0, 1).should.be.equal(false);
      });
    });

    describe("#ngt()", function() {
      it("ngt() - pass", function() {
        assert.ngt(0, 1).should.be.equal(true);
      });

      it("ngt() - fail", function() {
        assert.ngt(1, 0).should.be.equal(false);
      });
    });
  });
});
