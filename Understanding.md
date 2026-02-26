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


Mocking
Ek method hai jo dusri method call kar rahi hai, side effect hongi, third party api hoti hai--to isoltaion k andar karne k liye-- iska fake ya mock version/data banate hai--jo andar wali function return karti hai --mock ni andar koi bhi 3rd party api call nai thay --moking hum karte kyunki --bcz we want isolation--isolutaion k andar run karne k liye--side effects se rokna hota hai--expected data bhej hai aur side effect wala kaam nai karte

UNIT TEst==ISOLATION==Mocking


assert ma comparison mate j object joiye ene deepStrictEqual joiye --field same che k nai ae jovanu hoy ne object ma checking.

callcount==khbr padese k actual function call ketli thay thai, ae jovu padene 

kitni baar call ki hai--spy karte hai--uska ek array milta hai

mockedProcessPayment.make.call[0]--pehla call 

ab ye bhi check karna hai jo function --data.argument--100 argument thi, kabhi kabhi hum argument check karta hai 


original wali function call nai honi,varna api call homgi==I am original and I am mocked

mock call hi nai ho raha hai--funtion direct call kariye chiye to --process order 

NOw comes Dependency Injection---kisi func k andar jo bhi depednecy hai--process payment depednecy hai--to add unit test karna imposiible hota hai--jo bhi depdency --jo bhi dependeceinces use ho rahi hai wo directly use na kare ya call na kare --usko receive kare as depedncy as parameter
--3rd party api calls---SIDE EFFECT 
To ena mate andar na function nu fake version banavu pade--MOCK version --same data return hum return karte hai--koi bhi ek mock data--mock wale k andar koi api call nai krenege 
function ne isoltaion ma run karvu che-->possible side effect ne rokvu padse--> aur function ne side effect thi rockvu hoy to enu mocked version banavanu hoy--expected data return karte hai 
dependies. karine thase ae paramter k through inject karenge 
and class hoy to constructor k through pass karenge 


I am original aaya hua hai
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

  0 !== 1--mock call hi nai ho raha hai

  So wwe need DEPENDENCY INJECTION--ye function dependency hai--processPayment dependency hai --directly use nathi karvanu--recive as paramtere
ISOLATION_MOCKING_DEPENDENCYINJECTION


kitne baar call hui hai--1 k jagah 2 karenege 


STUBS:::
stub sirf, function kitni baar, konse argument k sath return hota hai.
stuff is dumb ye ek ready made data--wohi data karenga 

MOCK and stubb ma diff
mock-ketli vaar function call thay che, arguments pass thay che k nai, 
stubb-only data return karta hai-ready made 


SNAPSHOT TESTING
data bada ho sakta hai--iss case me iss type k responses k liye snapshot testing is used

TEST==IT TEST  ka alias hai IT

since harek field k liye assert dalna padega--resposen bau bada hai to assert bada ho jata hai-complicated

To is case me--reposse hai na ek hi baar string format me --match hota hai to test pass hota hai
file create thase--git commit k andar hote hai-snapshot ko 
with flag --node-test-snapshot file banse, ena vagar nai bane 

node --test --test-update-snapshots--naye snapshot banaye
node --test---us banaye huye snapshot pe test kariye 

jest--assert etle expect 
REFER NODE JS TEST DOCUMENTATION

Integration testing--multiple components
End-to-end--sypress,playright, browser ko open test karke test karna hota hai


RATIO ko samje k --kitni uunit, integration, end-to-end testing honi chahiye
THree leevels hoti hai
1. unit test--around 70%--fast 
2. Integration--around 30%-comparatively slow
3. End -to-End --imp flows-around 10%/20%--very slow

slow hase to resoucrs vadhare hova joiye--ane enathi badhu vadhi jaay

TDD--pela badha test and unn test cases ko pass karne k liye TDD
