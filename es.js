const f1 = () => console.log("f1");
const f2 = () => {
    for (let i = 0; i < 5; i++) {
        console.log("f2");
    }
}
f1();
f2();
