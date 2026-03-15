#### **Statement**



statement is complete command.



expression statement,

loop statement,

switch statement,

function statement,

a++; // expression statement

b++; // expression statement

### **If ,else statement**

compound statement ဆိုရင် { .... } သုံးတယ်

## ** conditional statement **

-> if နဲ့ else  က if ကို လုပ်ရင် else ကို မလုပ်ဘူး
-> if(myan >= 40){
    if(eng >= 40){
        if(math >= 40){
            console.log("passed.")
        }
    }-- nested if လို့ခေါ်တယ်
}else{
    console.log("failed.Is")
}
  
if(num > 5){

}else if (num > 3){

} // logic bug လို့ ခေါ်တယ်

/* programming language cannot catch the logic bug so you need to do ascending or descending.
*/

/*
if/switch are conditional statements.
switch is faster than if but you can neglet and switch can get === ,number and string but not for compound statement ( & , || ,!).
conditional statement are control structure cuz which one run and other one doesn't run.
*/
## * while loop *

let i = 0; // initialization

while(i < 4){ // condition
    console.log("num",num)
    i++; //step 
}
console.log("End of loop", i)

/*
 loop တွေက တူညီပြီး ထပ်ခါထပ်ခါလုပ်ရတဲ့() အလုပ်တွေ မှာ သုံးတယ် 
*/

## * do while loop *
do{

}while(num < 10)

do while is at least one time run.


## * for loop *

for loop is greater than while according to be  semmatic.

To read array, for of should use , 
To write array, for should use.  

# * for object *
let obj= {
    x:10,
    y:20,
    z:30
};

Object.keys(obj); // {x,y,z}
Object.values(obj); // {10,20,30}
Object.entries(obj); // [["x":10],["y":20],["z":30]]

# * jump * 

break က ရပ်တယ် 
continue က ဆက်သွားခိုင်းတယ်
return က  function ကိုရပ်တယ်.

# ** throw **

if there will be error, we need to user `throw`.

throw လိုက်တဲ့ error ကို ဖမ်းရန် try ... catch ကို သုံးပါ.

eg : 
function multiply(a, b){
    if(isNaN(a) || isNaN(b)){
        throw new Error("a or b isn't number.")
    }
    return a * b;
}

try{
    multiply(1, "bb");
}catch(e){
    console.log("error", e)
}finally{
    cosole.log("to close the network")
}


 **finally**
 finallly က ကြ မှား",မှန်" ,network ကို ပိတ်ရန် သုံးပါတယ်.

 /* try catch က all languages မှာ  semmatic က တူတူပဲ */

# ** with ** #

let obj = {
    x: 10, 
    y: 20
}

with(obj){
    x=100,
    y=200,
    z=300
}
console.log("obj",obj);
console.log("z", z)
shouldn't use in real world cuz can miss while putting the properties that will be global properties. e.g., z will be global properties.

# ** debugger ** #

shouldn't use in real world cuz cannot host the server it will stop

# **use strict ** #

use strict က သုံးရမယ်, for the best practise 

use strict က with တို့ eval တို့ကို သုံးခွင့်မပြုပါဘူး

function ထဲမှာ this ကို သုံးခွင့်မပြု.

window.top ကို ရေးခွင့်မပြုပါဘူး non writable

eval ကို တော့ သုံးရ/ but variables can not declare

strict mode မှာ window.top ကို ဖြတ်မရဘူးc

let x = 100;
delete x; // none strict mode မှာ ဘာမှမပြောဘူး
console.log("x",x);

undefined = 100; // none strict mode မှာ ရ or strict mode မှာ undefined သည် read only ပါ



# ** function declaration ** #

function hello(){} ==> declaration

hello() => invoke 