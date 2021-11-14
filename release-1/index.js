//  'Nikita' -> 'Hi, Nikita'
 const hiFunction = () => {
    var name = 
    console.log("Hi, " + name)
}
hiFunction()
// 5, 6 -> 11
 const sum = () => {
    var a=6
    var b=6
    console.log(a+b)
}


//5 -> false
//0 -> true
//4 -> true
 const isEven = () => {
    var a = 4
    if (a%2==0){
        console.log(true)
    }else{
        console.log(false)
    }
}


// 2 -> i have 2 apples
 const apples = () => {
    var a=2
    if (a==0){
        console.log("i have no apples")
    } else if (a==1){
        console.log("i have "+a+"apple")
    }else{
        console.log("i have "+a+"apples")
    }
    
}
// 4 -> 16
 const getPower = () => {
     var a=4
     console.log(a*a)
 }

module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}

