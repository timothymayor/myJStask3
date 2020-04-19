
// calculating for the remainder
function divisible(num){
    if (num % 2 ===0 && num % 3 === 0 && num % 5 ===0){
        return "yu-gi-oh"
    }
    else if (num % 2 ===0 && num % 3 === 0){
        return "yu-gi"
    } 
     else if (num % 2 ===0 && num % 5 === 0){
        return "yu-oh"
    }
    else if (num % 3 ===0 && num % 5 === 0){
        return "gi-oh"
    }
    else if (num % 2 === 0){
        return "yu"
    }
    else if (num % 3 === 0){
        return "gi"
    }
    else if (num % 5 === 0){
        return "oh"
    }
    else{
        return num
    }
}

function calcTotalNum(val){
    let arr = [];
    for (let i = 0; i<=val; i++){
        arr.push(divisible(i))
    }
    console.log(arr)
}

calcTotalNum(100)
calcTotalNum(10)