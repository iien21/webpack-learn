// let str = "get-element-by-id";
// function transFun(param) {
//   let data = param.split("-");
//   let arr = [data[0]];
//   data.shift() &&
//     data.forEach((x) => {
//       arr.push(x[0].toUpperCase() + x.slice(1));
//     });
//   return arr.join('');
// }
// console.log(transFun(str));

// let date = new Date();
// let dateStr;
// let month =
//   date.getMonth() + 1 > 9
//     ? (date.getMonth() + 1).toString()
//     : "0" + (date.getMonth() + 1).toString();
// let day = (date.getDate() < 10 ? "0" : "") + date.getDate().toString();
// dateStr = date.getFullYear() + month + day;
// console.log(dateStr);

// let a = '<tr><td>{$id}</td><td>{$name}</td></tr>'.replace(/{\$id}/g,'10').replace(/\{\$name\}/g,'xiaobai')
// console.log(a)

// function escapeHtml(param) {
//   return param.replace(/[<>"&]/g, function (match) {
//     switch (match) {
//       case "<":
//         return "&lt;";
//       case ">":
//         return "&gt;";
//       case "&":
//         return "&amp;";
//       case "\"":
//         return "&quot;";
//     }
//   });
// }
// let str = "<tr>我是\人/大\"成员</tr>";
// console.log(escapeHtml(str));

// var foo = 1;
// (function(){
//     console.log(foo)
//      foo = 2;
//     console.log(foo)
// })()

// function ranFun() {
//   let arr = [],
//     rand;
//   for (let i = 0; i < 100; i++) {
//     rand = parseInt(Math.random() * 90 + 10);
//     arr.push(rand);
//   }
//   return arr.sort();
// }
// console.log(ranFun());

// var arr1 = ['a','b','c']
// var arr2 = ['d','e','f']
// var arr3 = arr1.concat(arr2)
// arr3.splice(1,1)
// console.log(arr3)

// var url =
//   "https://item.taobao.com/item.htm?spm=a21bo&id=2289&scm=1007&pvid=7f67d94e&pp";

// function urlFun(param) {
//   let data = {};
//   let p = param.split("?")[1].split("&");
//   p.forEach((x) => {
//     let d = x.split("=");
//     data[d[0]] = d[1];
//   });
//   return data;
// }
// console.log(urlFun(url));

// var regMail = /^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$/;
// var regMail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

// var pat = 'lxfdfff@163.com';
// console.log(regMail.test(pat))

// function Trim(str, is_global) {
//   var result;
//   result = str.replace(/(^\s+)|(\s+$)/g, "");
//   if (is_global.toLowerCase() == "g") {
//     result = str.replace(/\s/g, "");
//   }
//   return result;
// }

// let stri = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1 id="hell">dddddddd</h1>
// </body>
// </html>`;
// console.log(Trim(stri,'g'));

// var a = undefined;var b=NaN;
// a='123';b=NaN;
// a=NaN;b='undefined'

// console.log(a+b)

// let stri = 'abcdefg';
// console.log(stri.substring(4));

// function Animal(name) {
//   this.name = name || "Animal";
//   this.sleep = function () {
//     console.log(this.name + "正在睡觉！");
//   };
// }

// function Cat(name) {
//   Animal.call(this);
//   this.name = name || "Tom";
// }

// var cat = new Cat();
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat instanceof Animal); // false
// console.log(cat instanceof Cat); // true

// function Animal(name) {
//   this.name = name || "Animal";
//   this.sleep = function () {
//     console.log(this.name + "正在睡觉！");
//   };
// }
// function Cat(name) {
//   var instance = new Animal();
//   instance.name = name || "Tom";
//   return instance;
// }
// var cat = new Cat();
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat instanceof Animal); // true
// console.log(cat instanceof Cat); // false

// function Animal(name) {
//   this.name = name || "Animal";
//   this.sleep = function () {
//     console.log(this.name + "正在睡觉！");
//   };
// }
// function Cat(name) {
//   Animal.call(this);
//   this.name = name || "Tom";
// }
// Cat.prototype = new Animal();

// Cat.prototype.constructor = Cat;

// var cat = new Cat();
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat instanceof Animal); // true
// console.log(cat instanceof Cat); // true

// 判断一个字符出现次数最多的字符，统计次数。
// var str = "asdfjjjssssjsssjzjzjzjzjx";
// var obj = {};
// var arr = [];
// for (let i = 0; i < str.length; i++) {
//   obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
// }
// Object.keys(obj).map((x, y) => {
//   arr.push({ [x]: obj[x] });
// });
// var compare = function (x, y) {
//   Object.keys(x).map((a) => {
//     x = x[a];
//   });
//   Object.keys(y).map((b) => {
//     y = y[b];
//   });
//   if (x < y) {
//     return -1;
//   } else if (x > y) {
//     return 1;
//   } else {
//     return 0;
//   }
// };
// console.log(arr.sort(compare));

// 将数字123456789转成RMB形式
// let num = 123456789;
// function thouFun(param) {
//   let p = param.toString();
//   p = p.split("").reverse().join().replace(/,/g, "");
//   let str = "";
//   for (let i = 0; i < p.length; i++) {
//     if (i % 3 == 0 && i != 0) {
//       str = str + "/" + p[i];
//     } else {
//       str = str + p[i];
//     }
//   }
//   return str.split('').reverse().join('').replace(/\//g,',')
//   console.log(p, str);
// }
// console.log(thouFun(num));

// function sepThousands(num) {
//   var result = "",
//     counter = 0,
//     numLen,
//     numlit = "";
//   num = (num || 0).toString();
//   if (num.indexOf(".") > -1) {
//     numLen = num.substring(0, num.indexOf("."));
//     numlit = num.substring(num.indexOf("."));
//   } else {
//     numLen = num;
//   }
//   for (var i = numLen.length - 1; i >= 0; i--) {
//     counter++;
//     result = numLen.charAt(i) + result;
//     if (!(counter % 3) && i != 0) {
//       result = "," + result;
//     }
//   }
//   return result + numlit;
// }
// console.log(sepThousands(1111.111111));

//生成1-10的随机数且不重复
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   born();
// }
// function born() {
//   let data = parseInt(Math.random() * 10 + 1);
//   if (arr.indexOf(data) == -1) {
//     arr.push(data);
//   } else {
//     born();
//   }
//   return data;
// }
// console.log(arr);

// 阶乘
// function fun(num) {
//   return num < 1 ? 1 : num * fun(num - 1);
// }
// console.log(fun(5));

// 精度问题
// var n = 0.3,m=0.2,i=0.2,j=0.1
// console.log(n-m==i-j)
// console.log(n-m==0.1)
// console.log(i-j==0.1)

// let a = {
//     name:'julia',
//     age:20
// }

// function change(o) {
//     o.age = 25;
//     o={
//         name:'Kath',
//         age:30,
//         think:'chifan'
//     }
//     return o
// }

// let b=change(a)
// console.log(b)
// console.log(a)

// let a = { c: 1 };
// let b = a;
// b.c = 2;
// b = { c: 3 };
// console.log(a, b);

// console.log(typeof BigInt(3))

// let Car = function () {};
// let benz = new Car()
// console.log(benz instanceof Car)

// let car = new String('mec')
// console.log(car instanceof String)

// let str = 'covid'
// console.log(str instanceof String)

// function myInstanceof(left, right) {
//   if (typeof left !== "object" || left === null) return false;
//   let proto = Object.getPrototypeOf(left);
//   while (true) {
//     if (proto === null) return false;
//     if (proto === right.prototype) return true;
//     proto = Object.getPrototypeOf(proto);
//   }
// }
// console.log(myInstanceof(new Number(123), Number)); //true
// console.log(myInstanceof(123, Number)); //false

// console.log(Object.prototype.toString({}))  //object
// console.log(Object.prototype.toString.call({}))  //object
// console.log(Object.prototype.toString.call(1))  //number
// console.log(Object.prototype.toString.call('1'))  //string
// console.log(Object.prototype.toString.call(true))  //boolean
// console.log(Object.prototype.toString.call(function(){}))  //function
// console.log(Object.prototype.toString.call(null))  //null
// console.log(Object.prototype.toString.call(undefined))  //undefined
// console.log(Object.prototype.toString.call(/123/g))  //regexp
// console.log(Object.prototype.toString.call(new Date()))  //date
// console.log(Object.prototype.toString.call([]))  //array
// console.log(Object.prototype.toString.call(document))  //浏览器环境 htmldocument
// console.log(Object.prototype.toString.call(window))  //浏览器环境 window

// function getType(obj) {
//   let type = typeof obj;
//   if (type !== "object") {
//     return type;
//   }
//   return Object.prototype.toString
//     .call(obj)
//     .replace(/^\[object (\S+)\]$/, "$1");
// }
// console.log(getType([])); //Array
// console.log(getType(123)); //Number
// // console.log(getType(window));  //浏览器环境 Window
// console.log(getType(null)); //Null
// console.log(getType(undefined)); //undefined
// console.log(getType()); //undefined
// console.log(getType(function () {})); //function
// console.log(getType(/123/g)); //RegExp

// console.log("123" == 123); //true
// console.log("" == null); //false
// console.log("" == 0); //true
// console.log([] == 0); //true
// console.log([] == ""); //true
// console.log([] == ![]); //true
// console.log(null == undefined); //true
// console.log(Number(null)); //0
// console.log(Number("")); //0
// console.log(parseInt("")); //NaN
// console.log({} + 10); //[object Object]10

// console.log(Number(true)); //1
// console.log(Number(false)); //0
// console.log(Number("1110")); //1110
// console.log(Number(null)); //0
// console.log(Number("")); //0
// console.log(Number("af")); //NaN
// console.log(Number(-0x11)); //-17
// console.log(Number("0X11")); //17

// var a = {
//   value: 0,
//   valueOf: function () {
//     this.value++;
//     return this.value;
//   },
// };
// console.log(a == 1, a == 2, a == 3);

// console.log('1'+'2') //12
// console.log('1'+undefined) //1undefined
// console.log('1'+null) //1null
// console.log('1'+true) //1true
// console.log('1'+1n) //11
// console.log(1+undefined) //NaN
// console.log(1+null) //1
// console.log(1+true) //2
// console.log(1+1n) //Error 不能把BigInt和Number类型直接混合相加
// console.log('1'+3) //13

// var obj = {
//   value: 1,
//   toString() {
//     return "2";
//   },
//   valueOf() {
//     return 3;
//   },
//   [Symbol.toPrimitive]() {
//     return 4;
//   },
// };
// console.log(obj + 1); //5 优先调用Symbol.toPrimitive，然后valueOf，然后toString
// console.log(10 + {}); //10[object Object] 注：{}会默认调用valueOf，不是基础类型继续转换；调用toString(),返回[object Object]
// console.log([1, 2, undefined, 4, 5] + 10); //1,2,,4,510
// console.log([1, 2, 3, 4, 5]); //[ 1, 2, 3, 4, 5 ]

// let obj = { a: 1, b: { c: 1 } };
// let obj2 = { ...obj };
// obj.a = 2;
// console.log(1, obj, obj2);
// obj.b.c = 2;
// console.log(2, obj, obj2);

// let obj1 = { a: { b: 1 }, sym: Symbol(1) };
// Object.defineProperty(obj1, "innumberable", {
//   value: "不可枚举属性",
// });
// let obj2 = {};
// Object.assign(obj2, obj1);
// obj1.a.b = 2;

// console.log("obj1", obj1);
// console.log("obj2", obj2);

// const shallowClone = (target) => {
//   if (typeof target === "object" && target !== null) {
//     const cloneTarget = Array.isArray(target) ? [] : {};
//     for (let prop in target) {
//       if (target.hasOwnProperty(prop)) {
//         cloneTarget[prop] = target[prop];
//       }
//     }
//     return cloneTarget;
//   } else {
//     return target;
//   }
// };
// console.log(shallowClone([3]))

// let obj1 = { a: { b: 1 } };
// function deepClone(obj) {
//   let cloneObj = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       cloneObj[key] = deepClone(obj[key]);
//     } else {
//       cloneObj[key] = obj[key];
//     }
//   }
//   return cloneObj;
// }
// let obj2 = deepClone(obj1);
// obj1.a.b = 2;
// console.log(obj2);

// const isComplexDataType = (obj) =>
//   (typeof obj === "object" || typeof obj === "function") && obj !== null;

// const deepClone = function (obj, hash = new WeakMap()) {
//   if (obj.constructor === Date) {
//     return new Date(obj);
//   }
//   if (obj.constructor === RegExp) {
//     return new RegExp(obj);
//   }
//   if (hash.has(obj)) {
//     return hash.get(obj);
//   }
//   let allDesc = Object.getOwnPropertyDescriptors(obj);
//   let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
//   hash.set(obj, cloneObj);
//   for (let key of Reflect.ownKeys(obj)) {
//     cloneObj[key] =
//       isComplexDataType(obj[key]) && typeof obj[key] !== "function"
//         ? deepClone(obj[key], hash)
//         : obj[key];
//   }
//   return cloneObj;
// };

// let obj = {
//   num: 0,
//   str: "",
//   boolean: true,
//   unf: undefined,
//   nul: null,
//   obj: { name: "俺是河南了哩", id: 1 },
//   arr: [1, 2, 3],
//   func: function () {
//     console.log("俺是函数");
//   },
//   date: new Date(0),
//   reg: new RegExp("/俺是正则/ig"),
//   [Symbol("1")]: 1,
// };

// Object.defineProperty(obj, "innumerable", {
//   enumerable: false,
//   value: "不可枚举属性",
// });
// obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj));
// obj.loop = obj;

// let cloneObj = deepClone(obj);
// cloneObj.arr.push(4);
// console.log("obj", obj);
// console.log("cloneObj", cloneObj);

// function Parent1() {
//   this.name = "parent1";
//   this.play = [1, 2, 3];
// }
// function Child1() {
//   this.type = "child2";
// }
// Child1.prototype = new Parent1();
// console.log(new Child1());

// var s1 = new Child1();
// var s2 = new Child1();
// s1.play.push(4);
// console.log(s1.play, s2.play);//相同

// function Parent1() {
//   this.name = "parent1";
// }
// Parent1.prototype.getName = function () {
//   return this.name;
// };
// function Child1() {
//   Parent1.call(this);
//   this.type = "child1";
// }
// let child = new Child1();
// console.log(child);
// console.log(child.getName());

// function Parent3() {
//   this.name = "parent3";
//   this.play = [1, 2, 3];
// }
// Parent3.prototype.getName = function () {
//   return this.name;
// };
// function Child3() {
//   Parent3.call(this);
//   this.type = "child3";
// }

// Child3.prototype = new Parent3();
// Child3.prototype.constructor = Child3;
// var s3 = new Child3();
// var s4 = new Child3();
// s3.play.push(4);
// console.log(s3.play, s4.play);
// console.log(s3.getName());
// console.log(s4.getName());

// let parent4 = {
//   name: "parent4",
//   friends: ["p1", "p2", "p3"],
//   getName: function () {
//     return this.name;
//   },
// };
// let person4 = Object.create(parent4);
// person4.name = "tom";
// person4.friends.push("jerry");
// let person5 = Object.create(parent4);
// person5.friends.push("lucy");

// console.log(person4.name);
// console.log(person4.name === person4.getName());
// console.log(person5.name);
// console.log(person5.getName());
// console.log(person4.friends);
// console.log(person5.friends);

// let parent5 = {
//   name: "parent5",
//   friends: ["p1", "p2", "p3"],
//   getName: function () {
//     return this.name;
//   },
// };
// function clone(original) {
//   let clone = Object.create(original);
//   clone.getFriends = function () {
//     return this.friends;
//   };
//   return clone;
// }
// let person5 = clone(parent5);
// console.log(person5.getName());
// console.log(person5.getFriends());

// function clone(parent, child) {
//   child.prototype = Object.create(parent.prototype);
//   child.prototype.constructor = child;
// }
// function Parent6() {
//   this.name = "parent6";
//   this.play = [1, 2, 3];
// }
// Parent6.prototype.getName = function () {
//   return this.name;
// };
// function Child6() {
//   Parent6.call(this);
//   this.friends = "child5";
// }
// clone(Parent6, Child6);
// Child6.prototype.getFriends = function () {
//   return this.friends;
// };
// let person6 = new Child6();
// console.log(person6);
// console.log(person6.getName());
// console.log(person6.getFriends());

// class Person{
//   constructor(name){
//     this.name=name
//   }
//   getName=function(){
//     console.log('Person:',this.name)
//   }
// }
// class Gamer extends Person{
//   constructor(name,age){
//     super(name)
//     this.age=age
//   }
// }
// const asuna=new Gamer('Asuna',20)
// asuna.getName()

// let a = {
//   name: "jack",
//   getName: function (msg) {
//     return msg + this.name;
//   },
// };
// let b = {
//   name: "lily",
// };
// console.log(a.getName("hello~"));
// console.log(a.getName.call(b, "hi~"));
// console.log(a.getName.apply(b, ["hi~"]));
// let fun=a.getName.bind(b,'hello~')
// console.log(fun())

// var arrayLike={
//   0:'java',
//   1:'script',
//   length:2
// }
// Array.prototype.push.call(arrayLike,'jack','lily')
// console.log(typeof arrayLike)
// console.log(arrayLike)

// let arr =[13,2,45,16]
// const max = Math.max.apply(Math,arr)
// const min = Math.min.apply(Math,arr)
// console.log(max)
// console.log(min)

// function _new(ctor, ...args) {
//   if (typeof ctor !== "function") {
//     throw "ctor must be a function";
//   }
//   let obj = new Object();
//   obj.__proto__ = Object.create(ctor.prototype);
//   let res = ctor.apply(obj, ...args);
//   let isObject = typeof res === "object" && typeof res !== null;
//   let isFunction = typeof res === "function";
//   return isObject || isFunction ? res : obj;
// }

// Function.prototype.call = function (context, ...args) {
//   var context = context || window;
//   context.fn = this;
//   var result = eval("context.fn(...args)");
//   delete context.fn;
//   return result;
// };
// Function.prototype.apply = function (context, args) {
//   let context = context || window;
//   context.fn = this;
//   var result = eval("context.fn(...args)");
//   delete context.fn;
//   return result;
// };

// Function.prototype.bind = function (context, ...args) {
//   if (typeof this !== "function") {
//     throw new Error("this must be a function");
//   }
//   var self = this;
//   var fbound = function () {
//     self.apply(this instanceof self ? this : context),
//       args.concat(Array.prototype.slice.call(arguments));
//   };
//   if (this.prototype) {
//     fbound.prototype = Object.create(this.prototype);
//   }
//   return fbound;
// };

// console.log(a)
// if(true){
//   let a = 123
//   console.log(a)
// }
// console.log(a)

// function fun() {
//   let a = 1;
//   return function () {
//     console.log(a);
//   };
// }
// fun();
// var result = fun();
// result();

// setTimeout(function handler() {
//   console.log('1')
// },1000)

// $('#app').click(function () {
//   console.log('Event Listener')
// })

// var a = 1;
// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a);
//   }
//   bar(baz);
// }
// function bar(fn) {
//   fn();
// }
// foo();

// for(var i=1;i<=5;i++){
//   setTimeout(function(){
//     console.log(i)
//   },0)
// }

// for (var i = 1; i <= 5; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 0);
//   })(i);
// }

// for(var i=1;i<=5;i++){
//   setTimeout(function(j){
//     console.log(j)
//   },0,i)
// }

// JSON.parse('{"p":5}', function (k, v) {
//   if (k === "") return v;
//   return v * 2;
// }); //{p:10}

// console.log(JSON.stringify({x:[10,undefined,function(){},Symbol('')]}))

// function repacer(key,value) {
//   if(typeof value==='string'){
//     return undefined
//   }
//   return value
// }

// console.log(JSON.stringify({a:2},null,'   '))

// function jsonStringify(data) {
//   let type = typeof data;
//   if (type !== "object") {
//     let result = data;
//     if (Number.isNaN(data) || data === Infinity) {
//       result = "null";
//     } else if (
//       type === "function" ||
//       type === "undefined" ||
//       type === "symbol"
//     ) {
//       return undefined;
//     } else if (type === "string") {
//       result = '"' + data + '"';
//     }
//     return String(result);
//   } else if (type === "object") {
//     if (data === null) {
//       return "null";
//     } else if (data.toJSON && typeof data.toJSON === "function") {
//       return jsonStringify(data.toJSON());
//     } else if (data instanceof Array) {
//       let result = [];
//       data.forEach((item, index) => {
//         if (
//           typeof item === "undefined" ||
//           typeof item === "function" ||
//           typeof item === "symbol"
//         ) {
//           result[index] = "null";
//         } else {
//           result[index] = jsonStringify(item);
//         }
//       });
//       result = "[" + result + "]";
//       return result.replace(/'/g, '"');
//     } else {
//       let result = [];
//       Object.keys(data).forEach((item, index) => {
//         if (typeof item !== "symbol") {
//           if (
//             data[item] !== undefined &&
//             typeof data[item] !== "function" &&
//             typeof data[item] !== "symbol"
//           ) {
//             result.push('"' + item + '"' + ":" + jsonStringify(data[item]));
//           }
//         }
//       });
//       return ("{" + result + "}").replace(/'/g, '"');
//     }
//   }
// }

// // 1、null判断逻辑  2、引用类型中的数组类型

// let obj = {
//   name: "jack",
//   age: 33,
//   attr: ["coding", 123],
//   date: new Date(),
//   uni: Symbol(3),
//   sayHi: function () {
//     console.log("hi");
//   },
//   info: {
//     sister: "lili",
//     age: 11,
//     intro: {
//       money: undefined,
//       job: null,
//     },
//   },
// };
// console.log(jsonStringify(obj),jsonStringify(obj) === JSON.stringify(obj));

// var obj = { 0: "a", 1: "b", 2: "c", length: 3 };
// var arr = Array.from(
//   obj,
//   function (value, index) {
//     console.log(value, index, this, arguments.length);
//     return value.repeat(3);
//   },
//   obj
// );
// console.log(arr); //[ 'aaa', 'bbb', 'ccc' ]
// console.log(Array.from(obj, (value) => value.repeat(2))); //[ 'aa', 'bb', 'cc' ]
// console.log(Array.from("abc")); //[ 'a', 'b', 'c' ]
// console.log(Array.from(new Set(['abc','def'])))//[ 'abc', 'def' ]
// console.log(Array.from(new Map([[1,'ab'],[2,'de']])))//[ [ 1, 'ab' ], [ 2, 'de' ] ]

// var a = [];
// console.log(a instanceof Array);
// console.log(a.constructor === Array);
// console.log(Array.prototype.isPrototypeOf(a));
// console.log(Object.getPrototypeOf(a) === Array.prototype);
// console.log(Object.prototype.toString.apply(a) === "[object Array]");

// let num1=[1,2,3,0,0,0];
// let num2=[2,5,6]
// // 输出【1，2，2，5，6】
// // let res = num1.fill(num2,3,8)
// // num1.splice(3,3,...num2)
// num1.splice(3)
// // num2.splice(3)
// num1.push(...num2)
// console.log(num1)
// let num3 = num1.push(...num2)
// console.log(num1.sort())
// console.log(res)

// let arr = [{name:'zz'},123,'abc',new Date()]
// console.log(arr.toLocaleString())

// var arr = [1,3,5]
// var obj={name:'cc'}
// var ret = arr.forEach(function(val,ind,arr){
//     arr[ind]=val
//     console.log(this.name)
// },obj)
// console.log(ret,arr)

// var o = { 0: 10, 1: 8, 2: 24, length: 3 };
// var bool = Array.prototype.every.call(
//   o,
//   function (value, index, obj) {
//     console.log(1,value,index);
//     return value >= 8;
//   },
//   o
// );
// console.log(bool);

// var array = [1, 2, 3, 4];
// var s = array.reduce(function (previousValue, value, index, array) {
//     console.log(previousValue, value, index, array)
//   return previousValue * value;
// }, 0);
// var s = array.reduce((p,v)=>p*v)
// console.log(s);

// var arr=['a','b','c']
// var itr=arr.entries()
// console.log(itr.next().value)
// console.log(itr.next().value)
// console.log(itr.next().value)
// console.log(itr.next().value)

// console.log(arr.values().next())

// function foo(name,age,sex) {
// console.log(arguments)
// console.log(typeof arguments)
// console.log(Object.prototype.toString.call(arguments))
// console.log(arguments.callee)
// }
// foo('jack','11','male')

// function conca(separa) {
//     var args=Array.prototype.slice.call(arguments,1)
//     return args.join(separa)
// }
// console.log(conca(',','red','orange','blue'))

// function foo() {
//   bar.apply(this, arguments);
// }
// function bar(a, b, c) {
//   console.log(a, b, c);
// }
// foo(1, 2, 3);

var arrayLike={
    0:'js',
    1:'java',
    length:2
}
Array.prototype.push.call(arrayLike,'jack','lily')
console.log(typeof arrayLike)
console.log(arrayLike)
