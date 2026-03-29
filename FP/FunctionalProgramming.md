Once.html 
payment / orderfun တစ်ကြိမ် တစ်ခါ run စေချင်ရင် closure ကို သုံးပြီး လုပ်ဆောင်နိုင်တယ်.

function တစ်ခုက fn တစ်ခု ကို parameter လက်ခံ့ရင်သော်လည်းကောင်း return ပြန်ရင်သော်လည်းကောင်း ** higher order function ** လို့ခေါ်တယ်.
 
pure Function

- function add(a,b){
    return a + b;
}
  - a and b က in the process မှာ  without changing a and b  ဆိုရင် add function က pure function
- side effects မပါတဲ့ function ကို pure function
- globally variable သုံးရင် no pure function
- same input and same output မဖြစ်ရင် pure function မဖြစ်ဘူး
- function countObj (){
    return obj.count ++;
} // no pure fuction cause of the modifying obj
- function immuatateObj (){
    return {
        ...obj, 
        count:obj.count +1;
    }// obj clone
} // pure function cuz the immuatable obj and also same input and same output


# ** Side Effects ** #
  -Modifying a variable
  -Modifying a data structure in place
  -Setting a field on an object
  -Throwing an exception or halting with an error
  -Printing to the console or reading user input
  -Reading from or writing to a file
  -Drawing on the screen

# ** Why pure function ** #

add(1,2) // 3,add(1,2) ရဲ့ result ကို cache နိုင် ရင်  ,  အဲ့တာ ကြောင့် same input and same output  ‌referential transperancy လို့ခေါ်တယ်

fun1, fun2, fun3

functional programming မှာ သူများရဲ့ variable သွားမထိအတွက် ကြိုက်တဲ့ function ကို run လို့ရတယ်  order of excution , တပြိုင်နက်ထဲ run ရ 

pure functions are easy to debug because of without using the global varible.


 ** Imperative Programming **
  How to do
 ** Declarative Programming **
 What to do

map,filter,reduce are higher order function.

reduce fun with map,filter

pillar
  // functional programming အဓိကအားဖြင့် referential transprancy, composition ရယ်က အဓိကပါ
  - referential transprancy ဆိုတာ pure function မှာ ဘယ်လို အလုပ်လုပ်သလဲ once.html ကြည့်ပါ
  - composition ဆိုတာ function အသေးလေးတွေပေါင်းပြီးလုပ်တာ.

compose function
    -compose function က function တွေကို dynamically ထည့်လို့ရတယ်.
    -functional programming မှာ function တွေကို  သေးသေးလေးတွေ လုပ်ပြီးတော့  debug , maintain လုပ်ရတာ လွယ်ကူအောင်လုပ်တယ်.
    -compose က  right to left ဖတ်တယ်.

pipe function
    - left to right


composition for rules
 -single input ဖြစ်ရမယ်, single output return ပြန်ရမယ်
 -type match ဖြစ်ရမယ်, function တစ်ခုက return တဲ့ type သည် နောက် function က return ပြန်မဲ့ type နဲ့ တူညီနေရမယ်.
 -multiple input ဖြစ်သော function ဆို composition လုပ်မရဘူး
 -composition လုပ်မယ်ဆိုရင် single input or output ပဲ ရမယ်.

 ** what is currying ?  **

multiple input အဖြစ်ရှိနေတဲ့ functions တွေကို single input or output ‌ရအောင် ပြောင်းလဲတာကို curry လို့ခေါ်တယ်.
multiple input function တွေဆိုရင်တောင် currying version(partial application) ပြောင်းပြီး composition လုပ်ရတယ်.

monoid
    -binary operation
      associative( associative ဆိုတာ 2 + 3 = 3 + 2 or (2 + 3) + 5 = 2 + ( 3 + 5) အဲ့လို သဘော )
      + -  * /  မှာ binary operation ဖြစ်ပြီးတော့ associative ဖြစ်တဲ့ကောင် ပါလား ဘယ်ဟာ ကတော့ associative မဖြစ်ဘူးလဲ: answer ( + and *)
      + အတွက် identity က 0,
      * အတွက် identity က 1,
      * binary operation ပါမယ် , associated ဖြစ်မယ် , identity ပါရင် *
      * { 
        string concat
        "hello"+"" 
        } ကို monoid လို့ခေါ်တယ်.

** Mutation ကိစ္စကို functional programming က ခွင့်မပြုဘူး **