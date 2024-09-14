// function Success() {
//   console.log('Success');
// }
// function fail() {
//   console.log('Fail');
// }
// function error() {
//   console.log('Error');
// }
// function exec(data, callback){
//     if(data){
//         console.log("balance :" $data);
//     }
//     //callback();
//     setTimeout(callback, 3000)
// }
// function trigger(){
//     const data = 1;
//     if(data>0){
//         exec(data, Success);
//     }
//     else if(data<=0){
//         exec(data, fail);
//     }
//     else{
//         exec(data, error);
//     }
// }
// trigger();https://66e5273a5cc7f9b6273c6edc.mockapi.io/register

async function API(){
    try{
        const response = await fetch('https://66e5273a5cc7f9b6273c6edc.mockapi.io/register');
        const data = await response.json();
        console.table(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}
API();