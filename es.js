const f1 = () => console.log("f1");
const f2 = () => {
    for (let i = 0; i < 5; i++) {
        console.log("f2");
    }
}
f1();
f2();
let arr= [2,4,8,10]
let updatedArr = arr.map(val=> val+2)
console.log(arr);
console.log(updatedArr);
let updatedArr3 = arr.slice().filter(val => val < 5);
console.log(arr);
console.log(updatedArr3);
