
//注意不要把拷贝和赋值弄混淆
//赋值
//引用的是同一个内存地址，赋值后，其中一个元素改变（不管是基本类型还是引用类型），另一个也会跟着改变
let fuzhiArry = [1,'a'];
let newFuzhiArry = fuzhiArry;
fuzhiArry[0] = 2
newFuzhiArry[1] = 'b'
console.log(fuzhiArry)    //[ 2, 'b']
console.log(newFuzhiArry) //[ 2, 'b']
//浅拷贝
//如果"数组元素（对象属性）"是基本类型，就会拷贝一份，互不影响，
//而如果是对象或者数组(引用类型)，拷贝的就是内存地址 ，这样我们无论在新旧数组进行了修改，两者都会发生变化。

let arr = [{a:1},{b:2},'c'];
let new_arr = arr.concat(); //或者let new_arr = arr.slice(); 
new_arr[0].a = 'a';
new_arr[2] = 'd';
arr[1].b = 'b';
new_arr[2] = 'd';
console.log(new_arr);//[ { a: 'a' }, { b: 'b' }, 'd' ]
console.log(arr);//[ { a: 'a' }, { b: 'b' }, 'c' ]

//深拷贝
//完全的拷贝一个对象或数组，即使嵌套了对象，两者也相互分离，修改一个对象的属性，也不会影响另一个。
let deepArr = [{a:1},{b:2},'c'];
//方法一
//使用JSON方法
//缺点：JSON.stringify(..) 在对象中遇到undefined、function和symbol时会自动将其忽略， 
//在 数组中则会返回null以保证单元位置不变）。
let newDeepArr = JSON.parse(JSON.stringify(deepArr));
deepArr[0].a='a';
newDeepArr[1].b='b';
console.log(deepArr);    //[ { a: 'a' }, { b: 2 }, 'c' ]
console.log(newDeepArr); //[ { a: 1 }, { b: 'b' }, 'c' ]

//方法二
//递归遍历
//缺点：因为使用的是递归，性能上不如方法一

function deepClone (obj){
    if(obj === null || typeof obj !== 'object') return; 
    let newObj =  obj instanceof Array ? []:{};
    for(let key in obj){
        newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]):obj[key]
    }
    return newObj
}
