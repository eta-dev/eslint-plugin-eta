const EtaEslint = require('../../lib/index')

describe('EtaEslint', () => {
  it("should be an object", () => {
      expect(typeof EtaEslint).toBe('object')
  })
  describe('.processors', () => {
    it('should be an object', () => {
      expect(typeof EtaEslint.processors).toBe('object')
    })
    describe('.eta', () => {
      it('should be an object', () => {
        expect(typeof EtaEslint.processors.eta).toBe('object')
      })
    })
  })
})
