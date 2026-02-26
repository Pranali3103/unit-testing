import { greet, greetInGujarati } from '../app.js'
import { test,suite } from 'node:test'
import assert from 'node:assert'


// test('greet function should return correct greeting',()=>{

//     //Arrange
//     const expected = 'Hello Shanaya!' 
//     const actual =greet('Shanaya')
//     //Act
//     //Assert
//     assert.strictEqual(actual, expected)
// });
suite('Greetings',()=>{
 test('greet function should return correct greeting',()=>{
    const expected ='Hello Shanaya!'
    const actual =greet('Shanaya')
    assert.strictEqual(actual, expected)
 });

 test('greet in gujarati should return correct greeting',()=>{
 const expected = 'કેમ છો Shanaya!'
const actual =greetInGujarati('Shanaya')
assert.strictEqual(actual, expected)
 });


});