const {describe, it} = require('node:test')
const assert = require('node:assert')
const {fetchData} = require('../app.js')

describe('SnapshotTesting',()=>{
    it('test that it fetches data correctly',(t)=>{
     const result = fetchData(123)
     t.assert.snapshot(result)
    })
})