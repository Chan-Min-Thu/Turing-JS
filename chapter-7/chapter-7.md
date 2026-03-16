# ** Array ** #

Why array ?
 name လို variables တွေကို ပုံစံတူနေရင် varialbe ခဏ"‌ကြေညာနေရရင် ARRAY ကို သုံးလိုက်ပါ   

 We can call, ordered collections.

 ** To create Array **
 let array = new Array(); // array constructor
 let array = []
 let array2=[...array]

 # ** Two Dimensional Array **
 let twoDArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
 ]

 ** Iterable objects are what the for/of loop iterates over **

 Array.of(1,3,4,2,5);
 Array.from(array1)

 let array = [10,20,30]
 array.length = 10;

 9 in array // false
 2 in array // true

 empyt ဆိုရင်  false;
 တန်ဖိုး empty မဟူတ်ရင် null, undefined ဆိုရင်လဲ true;
array['5'] = 200; it also assign value;

index of array must be positive number.

array.shift(); // ရှေ့ဖြုတ်
array.pop(); //နောက်ဖြုတ်
array.unshift(1,2);// ရှေ့ထည့်
array.push(1) // နောက်ထည့်
array.splice(1,1) //splice(initial ndex, no of elements)
array.entries(),// [index, value]
array.forEach(item,index, array)=>{
    item;
}// method for each and for of are userage different.
array.every(); // အားလုံးနဲ့ အဆင်ပြေမှ
array.some(); // တချို့နဲ့ ပြေလည်မှ
array.reduce((a,b))
reduceRight // exponential
flat()// twoDArray to oneDArray
flatMap()// Map to flat
slice(1) // index 1 ကနေ အကုန်ယူ
slice(2,5)// index 1 ကနေ 5 မတိုင်ခင် အကုန်ယူ 
splice(1,3,100,200) // index 1 ကနေ စပြီး ၃ လုံးဖြတ်မယ် ၁၀၀,၂၀၀ က အစားထိုးမယ် mutable
/*
 map // transform
 filter // select
 reduce // group
 slice(-1,-3) // - value လက်ခံတယ် နောက်ကနေယူတယ်
*/

copywithn(0,3,5) // 0 က target, 3 က စ , 5 က end
includes
indexOf,lastIndexOf // last က နောက် ကနေ စရှာ indexOf("2")= -1
sort // ascending string အနေနဲ့ စီစဉ်မယ်
// comparator 0,1,-1
sort((a,b)=> a-b), // number  အနေနဲ့ စီစဉ်မယ် 