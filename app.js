
//---learning Mocking---
//step 1
//dependencies is an object that contains the dependencies of the function
export function procesOrder(data,dependencies){
//some logic...
//step 3
 const paymentInfo = dependencies.processPayment(data.amount)
 //dependice ko swap kar pa rahe hai 
//dependencies are injected as an object,original ko pass nai karenege,dependency injection karna hota hai
 return paymentInfo;



}

//step 2
function processPayment(amount){
//API Call to external payment gateway
console.log('I am original....');
return{ id:123, amount: amount }
}

// ---learning basics---
// export function greet(name){
// return `Hello ${name}!`
// }

// export function greetInGujarati(name){
//     return `કેમ છો ${name}!`
// }