 var a=[1,2,3,4,5]
 var b=[6,7,8,10]
var all=a.concat(b)
 console.log("========== concat() ==========")
 //combine mupliple array into single array
 var c=a.concat(b)
 console.log(c)

 console.log("========== IndexOf() ==========")
 // its take as value and return index 
 var c=a.indexOf(4)
 console.log(c)

 console.log("========== Filter() ==========")
 //Filter return array as per condition
 const fil=all.filter((item)=>item%2==0)
 console.log(fil)

 console.log("========== Map() ==========")
 //Filter return array as per condition
 const map=all.map((item)=>item*item)
 console.log(map)

 console.log("========== Reduce() ==========")
 //Filter return array as per condition
 const reduce=all.reduce((prev,current)=>prev+current, 0)
 console.log(reduce)



