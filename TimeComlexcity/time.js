//1.Constant 
const  a=10; 
// TMC:O(1)


//2.Linear  
n=10
for(let i=0;i<n;i++){
    console.log(i)
}
 //TMC : O(n)


 //3.Logarithmic
 let arr=[2,4,6,8,10,12,18]
 let target=12;

 function binarySearch(arr,target){
    let start=0
    let end=arr.length-1;
    while(start<=end){
        let mid=start+(end-start)/2;
        if (target < arr[mid]){
            end=mid-1;
        }else if(target > arr[mid]){
            start=mid+1
        }else{
            return mid;
        }
    }
    return -1;
 }

console.log(arr[binarySearch(arr,target)])

// 4.Quadaratic
let arr1=[2,4,6,8,20]
let arr2=[3,9,8,5,7]

for(let i=0;i<arr1.length;i++){   
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            console.log(i,j)
        }
    }
}

// TMC:n^2