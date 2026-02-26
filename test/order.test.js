//step 4 
import {describe, test,mock} from 'node:test'
import assert from 'node:assert'
import {procesOrder } from '../app.js'
describe('OrderFeature',()=>{
    test('test that it processes order correctly',()=>{
    
        //AAA
//step 5
  const mockedProcessPayment = mock.fn((amount)=>{
    //don't call any api and no side effects
    console.log('I am mocked....');
    return { id: 123, amount }
  })
  // expected j return thase ae
  const expected = { id: 123, amount: 100 }

  assert.strictEqual(mockedProcessPayment.mock.callCount(), 0)
//act
//prcess payment ni value 
const result= procesOrder({amount:100},{processPayment:mockedProcessPayment})

//assert
assert.deepStrictEqual(result, expected)
//ek baar function call honi chahiye
//AAne SPying kevay 
assert.strictEqual(mockedProcessPayment.mock.callCount(),1)

//pehla call out of jitni baar call hua honga 
const call =mockedProcessPayment.mock.calls[0]
//function ko call karte time arguments konse diye the , ye bhi assert karenga ki function call k andar ye argument thi
assert.deepStrictEqual(call.arguments, [100])
    })
})