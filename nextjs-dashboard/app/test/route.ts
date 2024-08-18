
//const value = (function timeTest(){
//
//    return 'value!!';
//})();

console.log('start' + Date())
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done1!"), 2000);

});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done2!"), 2000);

});

let result2 = await promise2;

console.log(`wow1 !! ${result2} , ${Date()}`);
let result3 = await promise3;
console.log(`wow2 !! ${result3} , ${Date()}`);

async function f(){
    console.log(1, Date());
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 3000)

    });
    console.log(2.5, Date());
    console.log(2, Date());

    let result = await promise;

    console.log(3, Date());
    console.log(4, Date());
    console.log(5, Date());
    console.log(result);
    console.log(result2);

}

export function GET(){
    setTimeout(() =>{
        console.log('value!!!');
    }, 3000)
    f();
    return Response.json({ message: 'test'});
}