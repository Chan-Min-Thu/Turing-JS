# ** Object ** #
Object is collections of properties.

Object can add dynamically property.

let date = new Date(); 
/*
Date is constructor. 
*/

// date cannnot create with object literal.

let obj = new Object();

/*
 object တစ်ခု မှာ  __proto__ ဆိုတဲ့ parent ပါတယ်, သူ့ကို ခေါ်သုံးရပါတယ်
*/

let obj = {
    x:10, y:20
}

let obj2 = Object.create(obj);

/*
 create သည် parent ကို access လုပ်တာ
 obj2  သည် obj ရဲ့  parent prototype ကို လက်ခံရရှိ ထား တယ်.
 console.log(obj2.x) // x=10 readable
 if you create obj2.x = 100 // writeable
*/

if object property is string , you should user bracket([]) notation. 

if you want to loop , for...in loop use.

# ** conditional access ** #

let obj = {
    name:"Chan",
    age:27,
    city:"Kyaukse",
}

obj?.addresss?.city // conditional property access  (if obj.address is undefined, city is aslo undefined)

/*
 Array မှာ delete ကို မသုံးသင့်ဘူး ,သုံးရင် value ပျက်ပြီး empty ဖြစ်သွားမယ် 
*/

property in object  /* e.g "name" in object */
** hasOwnProperty **

obj.hasOwnProperty("name"); // true
obj.hasOwnProperty("toString"); // false

obj.isEnumerable("name"); //true

obj.x !== undefined // shouldn't use in real world

you should use
obj.hasOwnProperty("x")

// Enumerable
Object.keys(obj)
obj.getOwnPropertyNames();//["name","age","city"] // e
Reflect.ownKeys(obj)

// object destructuring

modern // shallow clone
obj = {...obj1, ...obj2}

es6 => obj = Object.assign()

object to string //deep clone
JSON.stringify(obj) // serialization
JSON.parse(obj) // desefialization

/* JSON cannot change function to be as string. so in JSON.stringfy function does not include */

toJSON:{
    username:this.name,
    age:this.age

    //city ကျန်ခဲ့
}

object တစ်ခုမှာ ‌limit age တစ်ခုထည့်ဆိုရင်  setter ကို သုံးမယ်.

let obj ={
    name:"chan",
    _age:26,
    banana_qty:2,
    price:30,
    get total(){
        return this.price * this.banana_qty
    }, // total လိုမျိုးတွက်ရရင် getကို သုံး
    set age(newValue){ 
        if(newValue > 0 && newValue <100){
            this._age = newValue;
        }
        else{
            console.log("Invalid age");
        }
    } // setကကျတော့ validateလုပ်ရင်သုံး
  
}


