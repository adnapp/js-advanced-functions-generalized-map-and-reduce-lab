// Add your functions here
function map(arr, callback){
    let r=[]
    for (let i=0; i<arr.length; i++){
        r.push(callback(arr[i]))
    }
    return r
}


function reduce(arr, callback, starting){
    let reduced = (!!starting? starting : 0)

    for (let i=0; i<arr.length; i++){
        reduced = callback(arr[i], reduced)
    }


    return reduced

}