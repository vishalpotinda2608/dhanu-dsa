let arr=[44,2,33,46,5,6];

//access array
console.log(arr[0])

let index=3
console.log(arr[index])

//Print 
console.log("=======Print ========")
for(let i=0;i <arr.length;i++){
    console.log(arr[i])
}

//Print reverse arr
console.log("===========Revers==============")
for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i])
}

console.log("===========Event Number ==============")

//Print Even Number
for(let i=0;i<arr.length;i++){
   if(arr[i]%2==0){
    console.log(arr[i])
   }
}


console.log("===========Odd Number ==============")
//Print Odd Number
for(let i=0;i<arr.length;i++){
   if(arr[i]%2==1){
    console.log(arr[i])
   }
}


console.log("===========Sum array ==============")

//Print Odd Number
let result=0;
for(let i=0;i<arr.length;i++){
   result=result+arr[i]
}
console.log(result)

//In-build array method
let result2=arr.reduce((prev,curr)=>{
    return prev+curr
},0)
console.log(result2)

let result3=arr.reduce((prev,curent)=>prev+curent,0)
console.log(result3)


