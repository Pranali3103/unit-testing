exmaple for plane
but why its cacutlly needed, testers naye features, kaise ye sari chize 
Jo naye features test kiya that, naye code ki wajah se purana code to test kiya hi nai, purane +naye features test karta hota, itna time lag, gaya, ab naya feature ayaa, ek time aisa, pura featured amnualyl test karne ki jarur hai to badh jata hai, manual testing bolte hai

as a developer - its our reposendpsii, aisa kya kar sakte hai--to solve above problem
to tester--vahi kaam hum code ke throught likhenege--jab bhi hamari code file hai--code test file run hoti hai--humare jo feature hai jo aate--harek release se pehle hume ek command run karni hoti hai

ek aur chiz jo hoti hai wo hai, hum code likhte hai--push karte hai--automatic pieplines banate hai--auaomtcic test caes run ho jati hai, codde gets deployed on server --

Yeh sari pipeline hoti hai --let's say koi test case fail hui--to test fail hongi aur deploy nai hongi --devloepr test agar fail ho rahi hai to fix karenga and thne --ci iss stage ko include karte---in pipeline 

ex: function greet(name){
    return ``
    image.png--refer images in here
    https://docs.google.com/document/d/17jQa5gFq0ljPWQsslLVlcVGgK7a0zLqGuFNefYdtQZo/edit?tab=t.0
}


Types of testing:
1. Unit--function, --ISOLATION ME TEST KARNA HOTA--BANDH DABEE ME RUN KIYA JATA HAI--DUSRE kiisi ko affect nai karna chiaye
2. Integration test-- sare units hai, unko ek sath milake--iske andar bhi side effects nai hona chiaye--unit test se thodi si slow hoti hai
3. End to end--sabse slow --ab ioslation remove and acutal dataasbe karo ne badhu karu


HUm manual bhi kar sakte hai
aur library use karte hai--bani banaye--Jest , MOcha, 

either we can do file.test.js
or test folder k andar jo bhi files hai unko consider karega

AAA
A- Arrange--jo bhi varibales, expected values--inshort badhu gothvanu or setup 
A- Act--jo kaam karne aaye hai usko karna, act karna padega usko call karna padega--function calls,import karna hai woh act 
A- Assert--jo test karna chiaye the, result --assert object hai 

inbuilt module hai node js to get test funcion, assert function 



Easy flow, --function ko import karo, usko call kare, aur jo expected result hai --use compare karo(assert)


ab isse help hinga k ke aise nai work karenga--ye problem kar raha hai--usko sochke banunga 



Suite meaning
--ek jeva meaning na function ne jode rakhi sakay--grouping kar pate hai, output ache se dekh pate hai 