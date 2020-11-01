

//lv0 Hello World!
alert("Hello World!");
var test = "Hello World!";
console.log(test);
alert(test);
console.log("Hello world");
document.write("Hello World");
var inner = document.getElementById("wuhu");
inner.innerHTML = "Hello World";

//lv0 累加
let arr3 = [1, 5, 6, 7, "8", 10];
var sum = getSum(arr3);
function getSum(arr3) {
    let sum = 0;
    for (let i = 0; i < arr3.length; i++) {
        var number = Number(arr3[i]);
        sum += number;
    }
    return sum;
}
console.log(sum);

//lv1 驼峰命名
let str4 = "can-enter-volunteer-organization";
function change(str4) {
    let splited = str4.split("-");
    let result = splited[0];
    for (let i = 1; i < splited.length; i++) {
        var trans = splited[i];
        trans = trans.replace(trans[0], trans[0].toUpperCase());
        result += trans;
    }
    console.log(result);
}
change(str4);

//lv1 返回新数组
let arr123 = ["myfirstactivity", "today activity", "yourActivity", "activitys"];
arr123[4] = "activity";
let newArr = arr123;
console.log(newArr);

//lv2 多维变一维 (大体思路：将所有的多维数组中嵌套的不是二维数组的部分单独拿出递归)
let arr = [[1, 2], [3], [4, [5, [6]], 7], [8, [9, [[10], [11, 12]]]], 13];
let arr1 = [];
function even(arr) {
    //一维
    for (var i = 0; i < arr.length; i++) {
        //判断是否为非数组
        if (arr[i].length == undefined) {
            arr1.push(arr[i]);
        }
        //判断是否为一维数组
        else if (arr[i].length == 1) {
            arr1.push(arr[i][0]);
        }
        //非一维时
        else {
            //二维及多维
            for (let j = 0; j < arr[i].length; j++) {
                //判断是否为二维
                if (arr[i][j].length == undefined) {
                    arr1.push(arr[i][j]);
                }
                //判断是否二维数组元素中是否含有一维数组
                else if (arr[i].length == 1) {
                    arr1.push(arr[i][j][0]);
                }
                //将不是二维的部分递归
                else {
                    even(arr[i][j]);
                }
            }
        }
    }
    return arr1;
}
console.log(even(arr));

//lv2 sort排序
let arr0 = [{ id: 10, name: 'kc' }, { id: 8, name: 'hy' }, { id: 15, name: 'pipi' }, { id: 2, name: 'mama' }];
arr0.sort(function (a, b) {
    // return b.id - a.id;//降序
    return a["id"] - b["id"];//升序
})
console.log(arr0);