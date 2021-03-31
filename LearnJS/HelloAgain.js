// var s = 'hello, i\'m ridd';
// console.log(s);
// var upper = s.toUpperCase();
// console.log(upper);
// var arr0 = [0, 1, 2];
// console.log(arr0.length);
// arr0.push(3);
// console.log(arr0.length);
//
// var arr = ['小明', '小红', '大军', '阿黄'];
// arr.sort();
// console.log(`欢迎${arr.slice(0, -1)}和${arr[arr.length - 1]}同学！`);
//
// var Ridd =
//     {
//         name: 'Ridd',
//         age: 21,
//         school: 'BUPT'
//     }
// console.log(Ridd);
// console.log(Ridd['name']);
// console.log('toString' in Ridd);
// console.log(Ridd.hasOwnProperty('age'));
// console.log(Ridd.hasOwnProperty('toString'));
// for (const key in Ridd) {
//     console.log(key);
// }
//
// var array = [10, 20, 30];
// var sum = 0;
// for (var i in array) {
//     if (array.hasOwnProperty(i)) {
//         console.log(i);
//         console.log(array[i]);
//         sum += i;
//     }
// }
// console.log(sum);//0012
//
// sum = 0;
// for (var j = 0; j < array.length; j++) {
//     console.log(array[j]);
//     sum += array[j];
// }
// console.log(sum);//60


// var m = new Map([['Ridd', 666], [1, 75], ['Tracy', 85]]);
// console.log(m.get('Ridd')); // 95
// console.log(m);
// m.set('LXY', 233);
// m.delete('LXY');
// m.has('LXY');
// m.get('Ridd');
// alert(m.get(1));
//
// var s1 = new Set(); // 空Set
// var s2 = new Set([1, 2, 3]); // 含1, 2, 3
// s2.delete(3);
// //set可以用于数组去重


// var a = ['A', 'B', 'C'];
// a.forEach(function (value, index, array) {
//     // element: 指向当前元素的值
//     // index: 指向当前索引
//     // array: 指向Array对象本身
//     console.log(value + ', index = ' + index);
// });
//
// function abs(x)
// {
//     if(x>=0) {
//         return x;
//     }else {
//         return -x;
//     }
// }
// console.log(abs(-1));
//
// var absolute = function (x)//匿名函数
// {
//     if(x>=0) {
//         return x;
//     }else {
//         return -x;
//     }
// };
// console.log(absolute(-3));

// function abs() {
//     if (arguments.length === 0) {
//         return 0;
//     }
//     var x = arguments[0];
//     return x >= 0 ? x : -x;
// }
// abs(); // 0
// abs(10); // 10
// abs(-9); // 9
//
// //ES6标准引入了rest参数
// function foo(a, b, ...rest) {
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
// }
// foo(1, 2, 3, 4, 5);
// // 结果:
// // a = 1
// // b = 2
// // Array [ 3, 4, 5 ]
// foo(1);
// // 结果:
// // a = 1
// // b = undefined
// // Array []

// function sum(a, ...rest) {//
//     var res = 0;
//     rest.forEach(function (value) {
//         res += value;
//     })
//     return res;
// }
// console.log(sum(1, 2, 3, 4, 5, 6));

// //所以正确的多行写法是：
// function foo() {
//     return { // 这里不会自动加分号，因为{表示语句尚未结束
//         name: 'foo'
//     };
// }

// function area_of_circle(r, pi) {
//     if(typeof pi != "number"){
//         pi = 3.14;
//     }
//
// }

// // 唯一的全局变量MYAPP:
// var MYAPP = {};
//
// // 其他变量:
// MYAPP.name = 'myapp';
// MYAPP.version = 1.0;
//
// // 其他函数:
// MYAPP.foo = function () {
//     return 'foo';
// };

// var [x, y, z] = ['hello', 'JavaScript', 'ES6'];//解构赋值
// let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];

//({x, y} = { name: '小明', x: 100, y: 200});//对已经声明的变量解构赋值，加小括号

//修复的办法也不是没有，我们用一个that变量首先捕获this：

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var that = this; // 在方法内部一开始就捕获this
//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - that.birth; // 用that而不是this
//         }
//
//         return getAgeFromBirth();
//     }
// };
// xiaoming.age(); // 25
// //用var that = this;，你就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中。


/*
this这个 keyword非常的困惑,但是其实有一个好方法可以理解.

1. 检查 ' . ' 左边是谁invoke 这个函数. 例如 xiaoming.age();  age函数里面有this, 然后 '. ' 旁边是xiaoming , 那么this就是指向xiaoming了.这种叫做 Implicit Binding.

2. 如果点旁边没有,那就检查有没有用到 bind, apply, call 这三种, 有的话就是调用此方法的对象. 这种叫做 explicit binding.

3. 如果上面两个都没有就检查代码里面有没有用到new 这个keyword, 有的话那就是指向new旁边的函数对象. 这种叫做new binding

4. 上面三个都没有, 检查是不是有arrow function, 有arrow function的话就是, 那么指向是arrow function的lexical binding 的对象. 就是她的parent. 这种叫做 lexical binding

5. 全部都没有如果不是strict mode那就是window对象了.. strict就是 error (undefined).
 */

// //高阶函数
// function add(x, y, f) {
//     return f(x) + f(y);
// }//例：add(-5, 6, Math.abs)

// function product(arr) {
//     return arr.reduce(function(x,y){return x*y;});
// };
