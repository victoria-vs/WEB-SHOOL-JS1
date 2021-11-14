// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

 const sorting = (mas, x) => {
    var mass=mas.sort()
    if (x==1){
        console.log(mass)
    } else {
        console.log(mass.reverse())
    }
}

// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
 const deepSorting = (users) => {
    users.sort((prev, next) => prev.age - next.age)
    console.log(users)
}




// ['d', 1, 3, null] -> [1, 3]
 const getNumbers = (mas) => {
     for (let i = 0; i < mas.length; i++){
         var res = []
         if (typeof(mas[i]) == Number){
             res.push(mas[i])
         }
     }
     console.log(res)

    
}




// [1, 5, 34, -100] -> -100
 const min = (mas) => {
     var n = mas[0]
     for (let i = 0; i < mas.length; i++){
         if (n > mas[i]){
             n = mas[i]
         }
     }
     console.log(n)

    
}



// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
 const getSet = (mas) => {
     var res = []
     for (let i = 0; i < mas.length; i++){
         if (res.indexOf(mas[i])==-1){
             res.push(mas[i])
         }
     }
     console.log(res)
 
 }


// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
 const findTheMostReapetedEls = (mas) => {
    var masSet = []
    var res = []
    var n=0
    for (let i = 0; i < mas.length; i++){
        if (masSet.indexOf(mas[i])==-1){
            masSet.push(mas[i])
        }
    }
    var setCount = new Array(masSet.length).fill(0)
    for (let i = 0; i < mas.length; i++){
        setCount[masSet.indexOf(mas[i])]++
    }
    for (let i = 0; i < setCount.length; i++){
        if (n<setCount[i]){
            n=setCount[i]
        }
    }
    for (let i = 0; i < setCount.length; i++){
        if (setCount[i]==n){
            res.push(masSet[i])
        }
    }
    console.log(res)
}

// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
 const stack = (mas) => {
     var res=[]
     var n=0
     if (mas.length%2==1 || mas[0]==']'){
         console.log(false)
         n=-1
     }else{
         for (let i = 0; i < mas.length; i++){
             if (mas[i]=='['){
                 res.push(mas[i])
             }else if (res.length!=0){
                 res.pop()
             }else{
                 console.log(false)
                 n=-1
                 break
             }

         }}
         if (res.length==0 && n==0){
             console.log(true)
         }
     }


// 'Hi, Nikita', 'Hi' -> true
 const checkForBadWord = (phr, w) => {
     if (phr.indexOf(w)!=-1){
         console.log(true)
     } else{
         console.log(false)
     }
    
}

 const customSome = (func, mas) => {
     var n = 1
     for (let i = 0; i < mas.length; i++){
         if(func(mas[i])==true){
             console.log(true)
             n=0
             break
         }
     }
     if (n=1){
         console.log(false)
     }
    
}


 const customFind = (func, mas) => {
    for (let i = 0; i < mas.length; i++){
        if (func(mas[i])== true){
            console.log(mas[i])
            break
        }
    }
}
 const customMap = (func, mas) => {
     var res = []
     for (let i = 0; i < mas.length; i++){
         res.push(func(mas[i]))
     }
     console.log(res)
    
}

 const customReducer = (func, mas) => {
     var res = func(mas[0], mas[1])
     for (let i = 2; i < mas.length; i++){
         res=func(res, mas[i])
     }
     console.log(res)

}

 const custonFilter = (func, mas) => {
        var res = []
     for (let i = 0; i < mas.length; i++){
         if (func(mas[i])== true){
             res.push(mas[i])
         }
     }
     console.log(res)
}