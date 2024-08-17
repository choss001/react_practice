
//const value = (function timeTest(){
//
//    return 'value!!';
//})();
export function GET(){
    setTimeout(() =>{
        console.log('value!!!');
    }, 3000)
    return Response.json({ message: 'test'});
}