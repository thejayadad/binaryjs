
let serachFunction = function (array, target, min, max){

   if( min > max) return false;

   let mid = Math.floor((min + max) / 2);
   if(array[mid] === target) return true;

   if(array[mid] > target){
    return  serachFunction(array, target, min, mid - 1)
   } else {
    return serachFunction(array, target, mid + 1, max)
   }

}


// let nums = [2, 3, 5,6, 7, 10]
// let x = 33;
// let y = 2;
// if(serachFunction(nums, x, 0, nums.length))
//     console.log("found")
// else
//     console.log("Not here")


// if(serachFunction(nums, y, 0, nums.length))
//     console.log("found")
// else
//     console.log("Not here")
