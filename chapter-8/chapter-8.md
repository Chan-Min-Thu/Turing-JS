# ** Function ** #

Why function?
  - reuseable,maintable,

declare, invoke

let fun = function(){

}// function expression or normal function

let fun =()=>{
    console.log("hello");
    return 4; // 
} // arrow function

/* arrow function * / 

တိုတိုနဲ့ ရေးရမဲ့နေရာမှာ map, filter, sort ,find,စတဲ့ နေရာမှာ arrow function ကို သုံးပါ.

/* normal function */ 

ခနခန သုံးရမဲ့ နေရာမှာဆို normal function ကို သုံးပါ.


# * Closure function * #

variable တစ်ခုက outer function ထဲမှာ ရှိနေစဉ် inner function က ယူသုံလို့ရတာကို closure လို့ခေါ်ပါတယ်.
outer function ခေါ်သုံးလဲ ပျောက်မသွားဘူး

function တစ်ခုမှာ inner function ကို name declare မလုပ်ဘဲ return ပြန်ထားရင် အဲ့ outer function ပြန်‌ခေါ်တဲ့အခါ function ပြန်ရတယ် , so we should need to recall this varible as with function call

